    import React, { useRef, useEffect, useState } from 'react';

const AdvancedBackgroundRemover = ({ src, alt, className, method = 'auto' }) => {
  const canvasRef = useRef(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const removeBackgroundAuto = (imageData) => {
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    
    // Auto-detect background color from corners
    const corners = [
      data[0], data[1], data[2], // top-left
      data[(width - 1) * 4], data[(width - 1) * 4 + 1], data[(width - 1) * 4 + 2], // top-right
      data[(height - 1) * width * 4], data[(height - 1) * width * 4 + 1], data[(height - 1) * width * 4 + 2], // bottom-left
      data[(height * width - 1) * 4], data[(height * width - 1) * 4 + 1], data[(height * width - 1) * 4 + 2] // bottom-right
    ];
    
    const avgR = corners.filter((_, i) => i % 3 === 0).reduce((a, b) => a + b, 0) / 4;
    const avgG = corners.filter((_, i) => i % 3 === 1).reduce((a, b) => a + b, 0) / 4;
    const avgB = corners.filter((_, i) => i % 3 === 2).reduce((a, b) => a + b, 0) / 4;
    
    const threshold = 50; // Increased threshold for more aggressive removal
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Check if pixel is close to detected background
      const distance = Math.sqrt(
        Math.pow(r - avgR, 2) + 
        Math.pow(g - avgG, 2) + 
        Math.pow(b - avgB, 2)
      );
      
      // Also check for light purple backgrounds specifically
      const isLightPurple = (
        (r > 140 && g > 100 && b > 160 && r < 210) || // Light purple range
        (r > 130 && g > 100 && b > 160 && r < 190) || // Broader light purple
        (r > 120 && g > 90 && b > 150 && r < 180) || // Even broader
        (r > 110 && g > 80 && b > 140 && r < 170) || // Very broad
        (r > 100 && g > 70 && b > 130 && r < 160) // Extremely broad
      );
      
      // Check for light backgrounds
      const isLightBackground = (
        (r > 240 && g > 240 && b > 240) || // Pure white
        (r > 235 && g > 235 && b > 235) || // Very light
        (r > 230 && g > 230 && b > 230) || // Light
        (r > 225 && g > 225 && b > 225) || // Lighter
        (r > 220 && g > 220 && b > 220) || // Very light
        (r > 215 && g > 215 && b > 215) || // Even lighter
        (r > 210 && g > 210 && b > 210) || // More light
        (r > 200 && g > 200 && b > 200) // Very light
      );
      
      // Protect skin tones - don't remove facial features
      const isLikelySkinTone = (
        (r > 180 && g > 130 && b > 100 && r < 250 && g < 200 && b < 180) || // Light skin
        (r > 160 && g > 110 && b > 80 && r < 230 && g < 180 && b < 160) || // Medium skin
        (r > 140 && g > 90 && b > 60 && r < 210 && g < 160 && b < 140) || // Darker skin
        (r > 200 && g > 150 && b > 120 && r < 255 && g < 220 && b < 200) || // Very light skin
        (r > 170 && g > 120 && b > 90 && r < 240 && g < 190 && b < 180) // Medium-light skin
      );
      
      if ((distance < threshold || isLightPurple || isLightBackground) && !isLikelySkinTone) {
        data[i + 3] = 0; // Make transparent
      }
    }
  };

  const removeBackgroundWhite = (imageData) => {
    const data = imageData.data;
    const threshold = 240;
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      if (r > threshold && g > threshold && b > threshold) {
        data[i + 3] = 0;
      }
    }
  };

  const removeBackgroundLight = (imageData) => {
    const data = imageData.data;
    const threshold = 220; // Less aggressive threshold
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Remove light colors less aggressively
      if (r > threshold || g > threshold || b > threshold) {
        data[i + 3] = 0;
      }
    }
  };

  const removeBackgroundPurple = (imageData) => {
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // More aggressive purple detection
      const isLightPurple = (
        (r > 170 && g > 140 && b > 190) || // Broader light purple
        (r > 150 && g > 120 && b > 170) || // Broader medium purple
        (r > 130 && g > 100 && b > 150) || // Even broader purple
        (b > r + 15 && b > g + 15 && b > 140) || // Broader blue-purple
        (r > 140 && g > 110 && b > 180) || // Broader general purple
        (r > 160 && g > 130 && b > 185) || // Additional purple range
        (r > 145 && g > 115 && b > 175) // Extra purple range
      );
      
      // More aggressive light background removal
      const isLightBackground = (
        (r > 240 && g > 240 && b > 240) || // Pure white
        (r > 230 && g > 230 && b > 230) || // Very light
        (r > 220 && g > 220 && b > 220) || // Light
        (r > 210 && g > 210 && b > 210) || // Lighter
        (r > 200 && g > 200 && b > 200) // Very light
      );
      
      // Remove uniform areas that might be background
      const isUniformBackground = (
        (Math.abs(r - g) < 25 && Math.abs(g - b) < 25 && Math.abs(r - b) < 25 && r > 150) // Uniform colors
      );
      
      // Protect skin tones - don't remove facial features
      const isLikelySkinTone = (
        (r > 180 && g > 130 && b > 100 && r < 250 && g < 200 && b < 180) || // Light skin
        (r > 160 && g > 110 && b > 80 && r < 230 && g < 180 && b < 160) || // Medium skin
        (r > 140 && g > 90 && b > 60 && r < 210 && g < 160 && b < 140) || // Darker skin
        (r > 200 && g > 150 && b > 120 && r < 255 && g < 220 && b < 200) || // Very light skin
        (r > 170 && g > 120 && b > 90 && r < 240 && g < 190 && b < 180) // Medium-light skin
      );
      
      if ((isLightPurple || isLightBackground || isUniformBackground) && !isLikelySkinTone) {
        data[i + 3] = 0;
      }
    }
  };

  const removeBackgroundUltraPurple = (imageData) => {
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Ultra aggressive purple detection
      const isLightPurple = (
        (r > 160 && g > 130 && b > 180) || // Very broad light purple
        (r > 140 && g > 110 && b > 160) || // Very broad medium purple
        (r > 120 && g > 90 && b > 140) || // Extremely broad purple
        (b > r + 10 && b > g + 10 && b > 130) || // Very broad blue-purple
        (r > 130 && g > 100 && b > 170) || // Very broad general purple
        (r > 150 && g > 120 && b > 175) || // Additional broad purple range
        (r > 135 && g > 105 && b > 165) // Extra broad purple range
      );
      
      // Ultra aggressive light background removal
      const isLightBackground = (
        (r > 240 && g > 240 && b > 240) || // Pure white
        (r > 235 && g > 235 && b > 235) || // Very light
        (r > 230 && g > 230 && b > 230) || // Light
        (r > 225 && g > 225 && b > 225) || // Lighter
        (r > 220 && g > 220 && b > 220) || // Very light
        (r > 215 && g > 215 && b > 215) || // Even lighter
        (r > 200 && g > 200 && b > 200) // Light gray
      );
      
      // Remove uniform areas that might be background
      const isUniformBackground = (
        (Math.abs(r - g) < 30 && Math.abs(g - b) < 30 && Math.abs(r - b) < 30 && r > 140) // Uniform colors
      );
      
      if (isLightPurple || isLightBackground || isUniformBackground) {
        data[i + 3] = 0;
      }
    }
  };

  const removeCustomColor = (imageData) => {
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Target specific color ranges - very aggressive
      const isTargetColor = (
        // Light purple/blue ranges - much more aggressive
        (r > 140 && g > 110 && b > 170) || // Light purple
        (r > 130 && g > 100 && b > 160) || // Broader purple
        (r > 120 && g > 90 && b > 150) || // Even broader
        (r > 150 && g > 120 && b > 175) || // Additional range
        (r > 135 && g > 105 && b > 165) || // Extra range
        (r > 125 && g > 95 && b > 155) || // More range
        (r > 145 && g > 115 && b > 170) || // Another range
        (r > 115 && g > 85 && b > 145) || // Lower range
        (r > 155 && g > 125 && b > 180) || // Higher range
        (r > 130 && g > 100 && b > 165) || // Final range
        // Additional very light purple ranges
        (r > 160 && g > 130 && b > 185) || // Very light purple
        (r > 150 && g > 120 && b > 175) || // Light purple
        (r > 140 && g > 110 && b > 170) || // Medium light purple
        (r > 130 && g > 100 && b > 165) || // Broader light purple
        (r > 120 && g > 90 && b > 160) || // Even broader
        (r > 110 && g > 80 && b > 155) || // Very broad
        (r > 100 && g > 70 && b > 150) || // Extremely broad
        (r > 90 && g > 60 && b > 145) // Most aggressive
      );
      
      // Remove any light backgrounds - more aggressive
      const isLightBackground = (
        (r > 240 && g > 240 && b > 240) || // Pure white
        (r > 235 && g > 235 && b > 235) || // Very light
        (r > 230 && g > 230 && b > 230) || // Light
        (r > 225 && g > 225 && b > 225) || // Lighter
        (r > 220 && g > 220 && b > 220) || // Very light
        (r > 215 && g > 215 && b > 215) || // Even lighter
        (r > 210 && g > 210 && b > 210) || // More light
        (r > 200 && g > 200 && b > 200) // Very light
      );
      
      // Remove uniform areas - more aggressive
      const isUniformBackground = (
        (Math.abs(r - g) < 40 && Math.abs(g - b) < 40 && Math.abs(r - b) < 40 && r > 120) // Uniform colors
      );
      
      // Check if this is a light purple background specifically
      const isLightPurpleBackground = (
        (r > 140 && g > 110 && b > 170 && r < 200) || // Light purple range
        (r > 130 && g > 100 && b > 160 && r < 190) || // Broader light purple
        (r > 120 && g > 90 && b > 150 && r < 180) || // Even broader
        (r > 110 && g > 80 && b > 140 && r < 170) || // Very broad
        (r > 100 && g > 70 && b > 130 && r < 160) // Extremely broad
      );
      
      if (isTargetColor || isLightBackground || isUniformBackground || isLightPurpleBackground) {
        data[i + 3] = 0;
      }
    }
  };

  const processImage = () => {
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
      
      // Apply selected method
      switch (method) {
        case 'auto':
          removeBackgroundAuto(imageData);
          break;
        case 'white':
          removeBackgroundWhite(imageData);
          break;
        case 'light':
          removeBackgroundLight(imageData);
          break;
        case 'purple':
          removeBackgroundPurple(imageData);
          break;
        case 'ultra-purple':
          removeBackgroundUltraPurple(imageData);
          break;
        case 'custom':
          removeCustomColor(imageData);
          break;
        default:
          removeBackgroundAuto(imageData);
      }
      
      ctx.putImageData(imageData, 0, 0);
      setProcessedImage(canvas.toDataURL('image/png'));
      setIsProcessing(false);
    };
    
    img.src = src;
  };

  useEffect(() => {
    if (src) {
      processImage();
    }
  }, [src, method]);

  return (
    <div className={className}>
      {isProcessing && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          zIndex: 10
        }}>
          Removing background...
        </div>
      )}
      {processedImage && (
        <img 
          src={processedImage} 
          alt={alt} 
          style={{ 
            background: 'transparent',
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      )}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default AdvancedBackgroundRemover; 