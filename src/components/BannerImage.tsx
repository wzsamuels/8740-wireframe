import React, { useState, useEffect } from 'react';
import bannerImage from '../assets/banner.png'

interface BannerImageProps {
  className?: string;
}

const BannerImage: React.FC<BannerImageProps> = ({ className = '' }) => {

  return <img src={bannerImage} alt="A collection of useless gadgets" className={`w-full h-full object-cover ${className}`} />;
};

export default BannerImage;
