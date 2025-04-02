export interface Technology {
  name: string;
  icon: JSX.Element;
}

export interface TechnologiesUsedProps {
  technologies: Technology[];
}

export interface TechnologiesUsedComponentProps extends TechnologiesUsedProps {
  className?: string;
  gradientClassNames?: string;
}