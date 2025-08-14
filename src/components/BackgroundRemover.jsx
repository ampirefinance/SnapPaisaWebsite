import React, { useRef, useEffect, useState } from 'react';

const BackgroundRemover = ({ src, alt, className, threshold = 240 }) => {
  const canvasRef = useRef(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const removeBackground = () => {
    setIsProcessing(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      
      // Remove light backgrounds
      for (let i = 0; i < imageData.data.length; i += 4) {
        const r = imageData.data[i];
        const g = imageData.data[i + 1];
        const b = imageData.data[i + 2];
        
        // If pixel is close to white/light, make it transparent
        if (r > threshold && g > threshold && b > threshold) {
          imageData.data[i + 3] = 0; // Set alpha to 0
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
      setProcessedImage(canvas.toDataURL('image/png'));
      setIsProcessing(false);
    };
    
    img.src = src;
  };

  useEffect(() => {
    if (src) {
      removeBackground();
    }
  }, [src]);

  return (
    <div className={className}>
      {isProcessing && <div>Processing...</div>}
      {processedImage && (
        <img 
          src={processedImage} 
          alt={alt} 
          style={{ background: 'transparent' }}
        />
      )}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default BackgroundRemover; 