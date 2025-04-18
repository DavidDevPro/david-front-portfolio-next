import { z } from "zod";

// Schémas des éléments communs
const SectionSchema = z.object({
    id: z.number(),
    title: z.string(),
    content: z.string(),
});

const ImageSchema = z.object({
    id: z.number(),
    src: z.string(),
    description: z.string(),
});

const StatsSchema = z.object({
    duration: z.string(),
    periode: z.string(),
    performance: z.number(),
});

const MetadataItemSchema = z.object({
    id: z.number(),
    name: z.string(),
    icon: z.string(),
    visible: z.boolean(),
});

const ProjectSchema = z.object({
    id: z.number(),
    slug: z.string(),
    title: z.string(),
    type_id: z.number(),
    tag_id: z.number().nullable(),
    image: z.string(),
    description: z.string(),
    visible: z.boolean(),
    technology_ids: z.array(z.number()),
    feature_ids: z.array(z.number()),
    sections: z.array(SectionSchema),
    images: z.array(ImageSchema),
    stats: StatsSchema,
    created_at: z.string(),
    updated_at: z.string(),
    published_at: z.string().nullable(),
});

const MetadataSchema = z.object({
    technologies: z.array(MetadataItemSchema),
    features: z.array(MetadataItemSchema),
    types: z.array(MetadataItemSchema.omit({ icon: true })),
    tags: z.array(MetadataItemSchema.omit({ icon: true })),
});

export const AdminDashboardResponseSchema = z.object({
    success: z.boolean(),
    data: z.object({
        projects: z.array(ProjectSchema),
        metadata: MetadataSchema,
    }),
});

export type AdminDashboardResponse = z.infer<typeof AdminDashboardResponseSchema>;
