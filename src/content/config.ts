import { z, defineCollection, reference } from 'astro:content';

const postCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        isDraft: z.boolean().default(false),

        title: z.string(),
        description: z.string(),
        author: z.string().default('Roberto Mora'),

        cover: z.object({
            image: image().refine((img) => img.width >= 1080, {
                message: "Cover image must be at least 1080 pixels wide!",
            }),
            alt: z.string(),
        }),

        badge: z.string().optional(),
        categories: z.array(reference('categories')).default([]),
        tags: z.array(z.string()).default([]),

        publishDate: z.date(),
        updatedDate: z.date().optional(),
    })
});

const categoryCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        description: z.string(),
    })
});

export const collections = {
    'posts': postCollection,
    'categories': categoryCollection
};