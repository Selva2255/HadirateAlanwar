import React from 'react';

interface LogoProps {
  variant?: 'main' | 'prodair' | 'novelia';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ variant = 'main', className = '', size = 'md' }) => {
  const getSizeClass = () => {
    switch (size) {
      case 'sm': return 'h-8';
      case 'lg': return 'h-16';
      default: return 'h-12';
    }
  };

  const getLogoSrc = () => {
    switch (variant) {
      case 'prodair':
        return '/Logo-prod\'air+SLOGAN.png';
      case 'novelia':
        return '/Logo_Powered_by_NOVELIA-removebg-preview.png';
      default:
        return '/Nouveau-Logo-HAA-2021-v-final-removebg-preview.png';
    }
  };

  return (
    <img
      src={getLogoSrc()}
      alt={`${variant === 'main' ? 'Hadirate Al Anwar' : variant === 'prodair' ? 'Prod\'Air' : 'Novelia'} logo`}
      className={`${getSizeClass()} w-auto object-contain ${className}`}
    />
  );
};

export default Logo;