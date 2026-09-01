import { useState, useEffect, useRef } from 'react';

// Generates lightweight programmatic frames as a fallback
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
    bgGradient.addColorStop(0, '#041126');
    bgGradient.addColorStop(1, '#082B5C');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    const x1 = -200 + progress * 400;
    ctx.fillRect(x1, 0, 400, canvas.height);
    const x2 = canvas.width - 200 - progress * 300;
    ctx.fillRect(x2, 100, 500, canvas.height);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.beginPath();
    ctx.moveTo(x1 + 400, 0);
    ctx.lineTo(canvas.width, canvas.height * 0.8 + progress * 100);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(x1 + 400, canvas.height);
    ctx.fill();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.font = '16px monospace';
    ctx.fillText(`DEMO FRAME ${String(i + 1).padStart(3, '0')} / ${frameCount}`, canvas.width - 250, canvas.height - 40);

    frames.push(canvas.toDataURL('image/jpeg', 0.6));
  }
  return frames;
};

// Vite's import.meta.glob can scan directories at build time.
// We scan both desktop and mobile frame directories.
const desktopFramesGlob = import.meta.glob('/public/assets/hero/frames/*.jpg', { query: '?url', import: 'default', eager: true });
const mobileFramesGlob = import.meta.glob('/public/assets/hero/frames-mobile/*.jpg', { query: '?url', import: 'default', eager: true });

function extractUrlsFromGlob(globResult) {
  // Extract URLs and sort them numerically based on the filename
  return Object.keys(globResult)
    .sort((a, b) => {
      const matchA = a.match(/frame_(\d+)/);
      const matchB = b.match(/frame_(\d+)/);
      const numA = matchA ? parseInt(matchA[1], 10) : 0;
      const numB = matchB ? parseInt(matchB[1], 10) : 0;
      return numA - numB;
    })
    .map(key => {
      // In Vite, assets in /public are served at the root
      return key.replace('/public', '');
    });
}

const desktopUrls = extractUrlsFromGlob(desktopFramesGlob);
const mobileUrls = extractUrlsFromGlob(mobileFramesGlob);

export function useFrameSequence() {
  const [isReady, setIsReady] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const imagesRef = useRef([]); // Store HTMLImageElements
  
  useEffect(() => {
    let active = true;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    // Choose the right frame set, fallback to demo if no frames found
    let urlsToLoad = isMobile && mobileUrls.length > 0 ? mobileUrls : desktopUrls;
    if (urlsToLoad.length === 0) {
      urlsToLoad = generateDemoFrames(120);
    }
    
    const total = urlsToLoad.length;
    const loadedImages = new Array(total).fill(null);
    let loadedCount = 0;
    
    // Strategy: 
    // 1. Load the first 15 frames immediately to ensure fast initial render
    // 2. Mark as ready
    // 3. Load the rest in the background
    
    const loadBatch = (startIndex, endIndex, onComplete) => {
      if (!active) return;
      if (startIndex >= total) {
        if (onComplete) onComplete();
        return;
      }
      
      const batchEnd = Math.min(endIndex, total);
      let batchLoaded = 0;
      const batchSize = batchEnd - startIndex;
      
      for (let i = startIndex; i < batchEnd; i++) {
        const img = new Image();
        img.onload = () => {
          if (!active) return;
          loadedImages[i] = img;
          loadedCount++;
          batchLoaded++;
          setLoadProgress(loadedCount / total);
          
          if (batchLoaded === batchSize && onComplete) {
            onComplete();
          }
        };
        img.onerror = () => {
          if (!active) return;
          // Fallback to previous frame on error
          loadedImages[i] = i > 0 ? loadedImages[i-1] : null;
          loadedCount++;
          batchLoaded++;
          setLoadProgress(loadedCount / total);
          
          if (batchLoaded === batchSize && onComplete) {
            onComplete();
          }
        };
        img.src = urlsToLoad[i];
      }
    };
    
    // Kick off progressive loading
    const initialBatchSize = Math.min(15, total);
    loadBatch(0, initialBatchSize, () => {
      if (!active) return;
      // Mark as ready once the initial sequence is loaded
      imagesRef.current = loadedImages;
      setIsReady(true);
      
      // Load the rest
      loadBatch(initialBatchSize, total);
    });
    
    return () => {
      active = false;
      // Cleanup
      imagesRef.current.forEach(img => {
        if (img) img.src = '';
      });
      imagesRef.current = [];
    };
  }, []);

  return {
    imagesRef, // We return the ref to avoid React state updates on every frame load
    isReady,
    loadProgress,
    totalFrames: imagesRef.current.length
  };
}
