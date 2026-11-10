import React, { useState } from 'react';

interface BouquetImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

/**
 * Изображение букета с поддержкой формата 4:5, ленивой загрузки
 * и мягкой серо-бежевой заглушки при ошибке загрузки или отсутствии фото.
 */
export const BouquetImage: React.FC<BouquetImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[4/5]',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative w-full ${aspectRatio} overflow-hidden bg-[#F0ECE4] select-none ${className}`}
    >
      {!hasError && src ? (
        <>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onError={() => setHasError(true)}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#F0ECE4]">
              <span className="font-serif italic text-xs tracking-wider text-[#1F1F1F]/40 px-4 text-center">
                {alt}
              </span>
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#EFEBE3]">
          <div className="w-10 h-10 mb-3 rounded-full border border-[#D9D1C5] flex items-center justify-center">
            <span className="font-serif text-sm italic text-[#1F1F1F]/40">f</span>
          </div>
          <span className="font-serif text-base tracking-wide text-[#1F1F1F]/70 line-clamp-2">
            {alt}
          </span>
          <span className="mt-1 text-[11px] tracking-wider uppercase text-[#1F1F1F]/40">
            Фото подготавливается
          </span>
        </div>
      )}
    </div>
  );
};
