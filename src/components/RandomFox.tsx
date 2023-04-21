import { useState, useEffect, useRef } from "react";
interface Props {
  image: string;
  alt: string;
  key: string;
}
const RandomFox = (props: Props): JSX.Element => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [source, setSource] = useState<string>("");
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSource(props.image);
        }
      });
    });
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
  }, [props.image]);
  return (
    <a
      href={props.image}
      className="w-full rounded-lg h-full object-cover shadow-lg hover:shadow-gray-500/50 hover:cursor-pointer hover:translate-y-2 transition duration-200"
      target="_blank"
      rel="noreferrer">
      <img
        ref={imageRef}
        className="w-full rounded-lg h-full object-cover shadow-lg hover:shadow-gray-500/50 hover:cursor-pointer bg-gray-300/20"
        src={source}
        alt={props.alt}
      />
    </a>
  );
};
export { RandomFox };
