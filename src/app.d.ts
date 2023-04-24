type ImageItem = Array<{ id: string; url: string }>;
type NativeType = ImgHTMLAttributes<HTMLImageElement>;
type LazyImageProps = {
  alt: string;
  key: string;
  onLazyLoad?: (node: HTMLImageElement) => void;
};
type Props = LazyImageProps & NativeType;
