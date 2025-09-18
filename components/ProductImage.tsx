import React, { useState, useEffect, useRef } from 'react';
import { generateAndCacheImage } from '../imageGenerator';

interface ProductImageProps {
  productName: string;
  productDescription: string;
  className?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ productName, productDescription, className = '' }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isIntersecting, setIntersecting] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px 200px 0px' }
    );

    const currentRef = imageRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      setIsLoading(true);
      setError(null);
      const cacheKey = `product-image-${productName}`;
      const prompt = `A minimalist, professional product shot of a "${productName}", which is a ${productDescription}. The product is centered on a soft light gray background (#f3f4f6), with clean, bright studio lighting. High-fidelity, 4k, photorealistic.`;

      generateAndCacheImage(
        cacheKey,
        prompt,
        '1:1',
        (url) => {
          setImageUrl(url);
          setIsLoading(false);
        },
        (err) => {
          setError(err);
          setIsLoading(false);
        }
      );
    }
  }, [isIntersecting, productName, productDescription]);

  return (
    <div ref={imageRef} className={`w-full h-full ${className}`}>
      {imageUrl && !isLoading ? (
        <img src={imageUrl} alt={productName} className="w-full h-full object-cover" />
      ) : error ? (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-center text-red-500 p-4">
          <p>{error}</p>
        </div>
      ) : (
        <div className="w-full h-full bg-gray-200 animate-pulse"></div>
      )}
    </div>
  );
};

export default ProductImage;
