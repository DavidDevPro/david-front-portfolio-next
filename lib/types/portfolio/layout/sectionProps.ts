import { ReactNode } from "react";

export interface SectionProps {
  title?: string;
  subtitle?: string;
  paragraph?: string; 
  children: ReactNode;
  className?: string;
  id?: string;
}
