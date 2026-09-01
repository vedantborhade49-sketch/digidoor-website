import { useRef, useEffect, useState } from 'react';

export default function FrameSequenceCanvas({ imagesRef, progress }) {
  const canvasRef = useRef(null);
  
  // Force a resize check when viewport changes
  const [, setTick] = useState(0);
  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setTick(t => t + 1);
      }, 100); // Debounce resize
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !imagesRef.current || imagesRef.current.length === 0) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let currentDrawnFrame = -1;

    // Use requestAnimationFrame loop to efficiently draw only when needed
    const drawLoop = () => {
      const images = imagesRef.current;
      const totalFrames = images.length;
      
      // Calculate target frame safely
      const targetFrameIndex = Math.min(
        totalFrames - 1,
        Math.max(0, Math.floor(progress * totalFrames))
      );
      
      const image = images[targetFrameIndex];
      
      // If we need to draw and the image is actually loaded
      if (image && currentDrawnFrame !== targetFrameIndex) {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.parentElement.getBoundingClientRect();
        
        // Resize canvas internal dimensions only if they don't match
        const requiredWidth = Math.floor(rect.width * dpr);
        const requiredHeight = Math.floor(rect.height * dpr);
        
        if (canvas.width !== requiredWidth || canvas.height !== requiredHeight) {
          canvas.width = requiredWidth;
          canvas.height = requiredHeight;
          canvas.style.width = `${rect.width}px`;
          canvas.style.height = `${rect.height}px`;
          ctx.scale(dpr, dpr);
        }

        // object-fit: cover equivalent drawing strategy
        const canvasRatio = rect.width / rect.height;
        const imgRatio = image.width / image.height;
        
        let renderWidth, renderHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
          renderWidth = rect.width;
          renderHeight = rect.width / imgRatio;
          offsetX = 0;
          offsetY = (rect.height - renderHeight) / 2;
        } else {
          renderWidth = rect.height * imgRatio;
          renderHeight = rect.height;
          offsetX = (rect.width - renderWidth) / 2;
          offsetY = 0;
        }

        // High quality rendering
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        
        ctx.clearRect(0, 0, rect.width, rect.height);
        ctx.drawImage(image, offsetX, offsetY, renderWidth, renderHeight);
        
        currentDrawnFrame = targetFrameIndex;
      }
      
      animationFrameId = requestAnimationFrame(drawLoop);
    };
    
    drawLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [imagesRef, progress]);

  return (
    <div className="frame-sequence-canvas-wrapper" style={{ width: '100%', height: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '50%', height: '100%', position: 'relative' }}>
        <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
      </div>
    </div>
  );
}
