import { Feature, Project } from "@/lib/data/common/projects";

export interface ProjectDetailPageProps {
  project: Project;
}

export type ProjectFeatureProps = {
  features: Feature[];
};

export interface ProjectFilterProps {
  onFilterChange: (type: "all" | "integration" | "full-dev") => void;
}

export interface ProjectHeaderProps {
  title: string;
  description: string;
}

export interface ProjectMainProps {
  project: Project;
}

export type ProjectSliderProps = {
  images: string[];
  title: string;
};

export interface ProjectTechnologieProps {
  technologies: { icon: JSX.Element; name: string }[];
}