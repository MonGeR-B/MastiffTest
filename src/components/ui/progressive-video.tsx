'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface ProgressiveVideoProps {
  src: string;
  poster?: string;
  fallbackImage?: string;
  className?: string;
  style?: React.CSSProperties;
  muted?: boolean;
  loop?: boolean;
  autoPlay?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  onError?: (error: any) => void;
  priority?: boolean; // Control loading priority
  preload?: 'none' | 'metadata' | 'auto'; // Control preload behavior
  captionSrc?: string; // VTT caption file
  captionLabel?: string; // Caption label
}

export default function ProgressiveVideo({
  src,
  poster,
  fallbackImage,
  className = '',
  style = {},
  muted = true,
  loop = true,
  autoPlay = true,
  playsInline = true,
  controls = false,
  onError,
  priority = false, // Default: lazy load
  preload = 'none', // Default: don't preload for performance
  captionSrc,
  captionLabel = 'English',
}: ProgressiveVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority); // Load immediately if priority
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // If priority, load immediately
    if (priority) {
      setShouldLoad(true);
      return;
    }

    // Otherwise, use Intersection Observer for lazy loading
    if (!observerRef.current && videoRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !shouldLoad) {
              setShouldLoad(true);
              // Disconnect once loaded
              if (observerRef.current) {
                observerRef.current.disconnect();
              }
            }
          });
        },
        {
          rootMargin: '100px', // Start loading 100px before entering viewport
          threshold: 0.1,
        }
      );

      observerRef.current.observe(videoRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority, shouldLoad]);

  const handleError = (error: any) => {
    setHasError(true);
    if (onError) {
      onError(error);
    }
  };

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  // Show fallback image if error or while loading
  if (hasError && fallbackImage) {
    return (
      <div className={`relative ${className}`} style={style}>
        <Image
          src={fallbackImage}
          alt="Video fallback"
          fill
          className="object-cover"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={style}>
      {/* Poster/Placeholder while video loads */}
      {!isLoaded && poster && (
        <Image
          src={poster}
          alt="Video poster"
          fill
          className="object-cover"
          priority={priority}
        />
      )}

      {/* Video element - only render src when shouldLoad is true */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted={muted}
        loop={loop}
        autoPlay={autoPlay && shouldLoad} // Only autoplay when loaded
        playsInline={playsInline}
        controls={controls}
        poster={poster}
        preload={preload} // Respect preload setting
        onLoadedData={handleLoadedData}
        onError={handleError}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        {shouldLoad && <source src={src} type="video/mp4" />}
        {captionSrc && (
          <track
            kind="captions"
            src={captionSrc}
            srcLang="en"
            label={captionLabel}
          />
        )}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}