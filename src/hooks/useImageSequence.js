import { useState, useEffect } from 'react';

// Generates lightweight programmatic frames to demonstrate the engine
// without using external stock images.
const generateDemoFrames = (frameCount) => {
  const frames = [];
  const canvas = document.createElement('canvas');
  canvas.width = 1280;
  canvas.height = 720;
  const ctx = canvas.getContext('2d');

  for (let i = 0; i < frameCount; i++) {
    const progress = i / (frameCount - 1);
    
    // Background gradient 
    const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGradient.addColorStop(0, '#041126'); // Very deep navy
    bgGradient.addColorStop(1, '#082B5C');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Architectural shapes simulating buildings or interior elements moving
    ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    
    const x1 = -200 + progress * 400;
    ctx.fillRect(x1, 0, 400, canvas.height);

    const x2 = canvas.width - 200 - progress * 300;
    ctx.fillRect(x2, 100, 500, canvas.height);

    // Light beam
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.beginPath();
    ctx.moveTo(x1 + 400, 0);
    ctx.lineTo(canvas.width, canvas.height * 0.8 + progress * 100);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(x1 + 400, canvas.height);
    ctx.fill();

    // Cinematic framing lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.1, canvas.height * 0.1);
    ctx.lineTo(canvas.width * 0.1, canvas.height * 0.9);
    ctx.stroke();

    // Frame counter to show it's working
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.font = '12px monospace';
    ctx.fillText(`FRAME ${String(i + 1).padStart(3, '0')} / ${frameCount}`, canvas.width - 150, canvas.height - 40);

    frames.push(canvas.toDataURL('image/jpeg', 0.6));
  }
  return frames;
};

export function useImageSequence(frameUrls) {
  const [images, setImages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Fallback to 80 generated demo frames if no real URLs are provided
    const urlsToLoad = frameUrls && frameUrls.length > 0 
      ? frameUrls 
      : generateDemoFrames(80); 

    const total = urlsToLoad.length;
    let loaded = 0;
    const loadedImages = new Array(total);

    urlsToLoad.forEach((url, index) => {
      const img = new Image();
      img.onload = () => {
        loadedImages[index] = img;
        loaded++;
        setProgress(loaded / total);
        
        // When all frames are loaded, mark as ready
        if (loaded === total) {
          setImages(loadedImages);
          setIsReady(true);
        }
      };
      img.onerror = () => {
        // Fallback for failed frames
        loadedImages[index] = loadedImages[index > 0 ? index - 1 : 0] || null;
        loaded++;
        setProgress(loaded / total);
        
        if (loaded === total) {
          setImages(loadedImages);
          setIsReady(true);
        }
      };
      img.src = url;
    });

    return () => {
      // Cleanup loaded images to prevent memory leaks if component unmounts
      loadedImages.forEach(img => {
        if (img) img.src = '';
      });
    };
  }, [frameUrls]);

  return { 
    images, 
    progress, 
    isReady, 
    totalFrames: images.length 
  };
}
