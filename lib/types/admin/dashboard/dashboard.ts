export interface Section {
    id: number;
    title: string;
    content: string;
}

export interface Image {
    id: number;
    src: string;
    description: string;
}

export interface Stats {
    duration: string;
    periode: string;
    performance: number;
}

export interface Project {
    id: number;
    slug: string;
    title: string;
    type_id: number;
    tag_id: number | null;
    image: string;
    description: string;
    visible: boolean;
    technology_ids: number[];
    feature_ids: number[];
    sections: Section[];
    images: Image[];
    stats: Stats;
    created_at?: string;
    updated_at?: string;
    published_at?: string | null;
}

export interface Metadata {
    technologies: MetadataItemWithIcon[];
    features: MetadataItemWithIcon[];
    types: MetadataItemWithoutIcon[];
    tags: MetadataItemWithoutIcon[];
}
export interface MetadataItemWithIcon {
    id: number;
    name: string;
    icon: string;
    visible: boolean;
}

export interface MetadataItemWithoutIcon {
    id: number;
    name: string;
    visible: boolean;
}
export interface AdminDashboardData {
    projects: Project[];
    metadata: Metadata;
}

export interface EnrichedProject {
    id: number;
    slug: string;
    title: string;
    image: string;
    description: string;
    visible: boolean;
    technologies: { name: string; icon: JSX.Element }[];
    features: { name: string; icon: JSX.Element }[];
    sections: Section[];
    images: Image[];
    stats: Stats;
    type?: MetadataItemWithoutIcon | null;
    tag?: MetadataItemWithoutIcon | null;
    created_at?: string;
    updated_at?: string;
    published_at?: string | null;
}

export type ProjectFeature = {
    name: string;
    icon: JSX.Element;
};
export interface ProjectFeaturesProps {
    features: ProjectFeature[];
}