import React from 'react';

interface LogoProps {
  variant?: 'main' | 'prodair' | 'novelia';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ variant = 'main', className = '', size = 'md' }) => {
  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'h-8';
      case 'lg':
        return 'h-16';
      default:
        return 'h-12';
    }
  };

  const getLogoSrc = () => {
    const base = import.meta.env.BASE_URL;
    switch (variant) {
      case 'prodair':
        return `${base}Logoprodair.png`;
      case 'novelia':
        return `${base}Logonovelia.png`;
      default:
        return `${base}LogoHAA.png`;
    }
  };

  const getAltText = () => {
    switch (variant) {
      case 'prodair':
        return "Logo Prod'Air";
      case 'novelia':
        return 'Logo Novelia';
      default:
        return 'Logo Hadirate Al Anwar';
    }
  };

  return (
    <img
      src={getLogoSrc()}
      alt={getAltText()}
      className={`${getSizeClass()} w-auto object-contain ${className}`}
    />
  );
};

export default Logo;
