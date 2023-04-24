import { useState, useEffect, useRef } from "react";
import { ImgHTMLAttributes } from "react";
const LazyImage = ({ src, alt, onLazyLoad, ...props }: Props): JSX.Element => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [currentSource, setCurrentSource] = useState<string | undefined>("");
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSource(src);
          if (onLazyLoad !== undefined) {
            onLazyLoad(imageRef.current!);
            observer.unobserve(imageRef.current!);
            return;
          }
        }
      });
    });
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    return () => observer.disconnect();
  }, [src]);
  return (
    <img
      ref={imageRef}
      className="w-full rounded-lg h-full object-cover shadow-lg hover:shadow-gray-500/50 hover:cursor-pointer bg-gray-300/20"
      src={currentSource}
      alt={alt}
      onClick={props.onClick}
    />
  );
};
export { LazyImage };
