import { Feature, Project } from "@/lib/data/common/projects";

export interface ProjectTechnologieProps {
  technologies: { icon: JSX.Element; name: string }[];
}

export type ProjectSliderProps = {
  images: string[];
  title: string;
};

export interface ProjectMainProps {
  project: Project;
}

export interface ProjectHeaderProps {
  title: string;
  description: string;
}

export interface ProjectFilterProps {
  onFilterChange: (type: "all" | "integration" | "full-dev") => void;
}

export type ProjectFeatureProps = {
  features: Feature[];
};

export interface ProjectDetailPageProps {
  project: Project;
}