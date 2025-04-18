
export interface ImageProps {
  src: string;
  description: string;
}
export interface ImageFullScreenViewProps {
  images: ImageProps[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
  title: string;
}
export interface ImageSliderProps {
  images: ImageProps[];
  currentIndex: number;
  isMobile: boolean;
  title: string;
  onNext: () => void;
  onPrev: () => void;
  onToggleFullScreen: () => void;
  onSelect: (index: number) => void;
}