import React from 'react';

const FALLBACK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="#e5e7eb"/><rect x="40" y="40" width="1120" height="720" fill="none" stroke="#111827" stroke-width="8" stroke-dasharray="20 16"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="44" fill="#111827">Image unavailable</text></svg>`;
const FALLBACK_SRC = `data:image/svg+xml;utf8,${encodeURIComponent(FALLBACK_SVG)}`;

type SafeImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const SafeImage: React.FC<SafeImageProps> = ({ onError, ...props }) => {
  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const image = event.currentTarget;
    if (image.src !== FALLBACK_SRC) {
      image.src = FALLBACK_SRC;
    }
    if (onError) {
      onError(event);
    }
  };

  return <img {...props} onError={handleError} />;
};
