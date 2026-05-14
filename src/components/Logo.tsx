import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LOGO_IMAGE_PATHS = [
  '/logo.png',
  '/operium-labs-logo.png',
  '/lovable-uploads/logo.png',
];

const HEIGHTS = {
  sm: 'h-8',
  md: 'h-10 md:h-12',
  lg: 'h-14 md:h-16',
};

const TEXT_SIZES = {
  sm: { primary: 'text-lg', secondary: 'text-xs' },
  md: { primary: 'text-xl md:text-2xl', secondary: 'text-sm md:text-base' },
  lg: { primary: 'text-3xl md:text-4xl', secondary: 'text-lg md:text-xl' },
};

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const [imageError, setImageError] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageError = () => {
    if (currentImageIndex < LOGO_IMAGE_PATHS.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setImageError(true);
    }
  };

  if (imageError) {
    const { primary, secondary } = TEXT_SIZES[size];
    return (
      <div className={`flex flex-col leading-tight ${className}`}>
        <span className={`font-bold ${primary} text-[#0B1B2B] tracking-wide`}>
          OPERIUM
        </span>
        <span className={`font-medium ${secondary} text-[#3B82F6] tracking-[0.3em]`}>
          LABS
        </span>
      </div>
    );
  }

  return (
    <img
      src={LOGO_IMAGE_PATHS[currentImageIndex]}
      alt="Operium Labs"
      className={`${HEIGHTS[size]} w-auto object-contain ${className}`}
      onError={handleImageError}
    />
  );
}
