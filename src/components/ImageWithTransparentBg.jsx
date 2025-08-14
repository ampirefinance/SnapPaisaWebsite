import React from 'react';

const ImageWithTransparentBg = ({ src, alt, className, blendMode = 'multiply' }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      style={{
        background: 'transparent',
        mixBlendMode: blendMode,
        filter: 'brightness(1.1) contrast(1.1)',
      }}
    />
  );
};

export default ImageWithTransparentBg; 