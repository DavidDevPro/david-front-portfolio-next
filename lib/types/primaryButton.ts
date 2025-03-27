export interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  gap?: string;
  px?: string;
  py?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  shadow?: string;
  rounded?: string;
}