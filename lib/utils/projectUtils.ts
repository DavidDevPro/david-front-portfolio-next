import {  ProjectTechnology } from "@/lib/types";
import { iconMapper } from "./iconMapper";
import { ProjectFeature } from "@/lib/types/admin/dashboard";


/**
 * Transforme une liste de technologies en injectant les icônes React à partir de leur nom.
 */
export const enrichTechnologiesWithIcons = (technos: { name: string; icon: string }[]): ProjectTechnology[] => {
    return technos.map((tech) => ({
        name: tech.name,
        icon: iconMapper(tech.icon),
    }));
};

/**
 * Transforme une liste de features en injectant les icônes React à partir de leur nom.
 */
export const enrichFeaturesWithIcons = (features: { name: string; icon: string }[]): ProjectFeature[] => {
    return features.map((feature) => ({
        name: feature.name,
        icon: iconMapper(feature.icon),
    }));
};
