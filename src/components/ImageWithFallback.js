import React, { useState } from 'react';
import { fallbackImages } from '../utils/imageLoader';

const ImageWithFallback = ({ src, alt, fallback, className, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Try fallback if provided, otherwise use a default
      if (fallback) {
        setImgSrc(fallback);
      } else {
        // Use a placeholder or default image
        setImgSrc('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23ddd" width="800" height="600"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage Loading...%3C/text%3E%3C/svg%3E');
      }
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  );
};

export default ImageWithFallback;

