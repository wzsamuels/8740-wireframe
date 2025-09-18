import React, { useState, useEffect } from 'react';
import { generateAndCacheImage } from '../imageGenerator';

interface BannerImageProps {
  className?: string;
}

const BannerImage: React.FC<BannerImageProps> = ({ className = '' }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const cacheKey = 'homepage-banner';
    const prompt = `A wide, cinematic, professional photo of a collection of bizarre and useless gadgets arranged artistically on a minimalist surface. The style should be high-end, clean, and slightly absurd. The color palette should be muted, with tones of plum, terracotta, and soft grays. 8k, photorealistic.`;
    
    generateAndCacheImage(
      cacheKey,
      prompt,
      '16:9',
      (url) => {
        setImageUrl(url);
        setIsLoading(false);
      },
      (err) => {
        setError(err);
        setIsLoading(false);
      }
    );
  }, []);

  if (isLoading) {
    return <div className={`w-full h-full bg-gray-200 animate-pulse ${className}`}></div>;
  }

  if (error) {
    return (
      <div className={`w-full h-full bg-gray-100 flex items-center justify-center text-center text-red-500 p-4 ${className}`}>
        <p>{error}</p>
      </div>
    );
  }

  return <img src={imageUrl ?? ''} alt="A collection of useless gadgets" className={`w-full h-full object-cover ${className}`} />;
};

export default BannerImage;
