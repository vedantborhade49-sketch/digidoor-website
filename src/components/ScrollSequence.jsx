import { useRef, useEffect, useState } from 'react';

export default function ScrollSequence({ images, progress }) {
  const canvasRef = useRef(null);
  const [, setTick] = useState(0);
  
  // Force re-render on window resize to ensure canvas resizing logic fires
  useEffect(() => {
    const handleResize = () => setTick(t => t + 1);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!images || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Determine current frame index safely
    const frameIndex = Math.min(
      images.length - 1,
      Math.max(0, Math.floor(progress * images.length))
    );
    
    const image = images[frameIndex];
    if (!image) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    
    // Only resize canvas internal dimensions if needed
    if (canvas.width !== Math.floor(rect.width * dpr) || canvas.height !== Math.floor(rect.height * dpr)) {
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    }

    // "Cover" image drawing strategy to prevent distortion
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

  }, [images, progress]);

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  );
}
