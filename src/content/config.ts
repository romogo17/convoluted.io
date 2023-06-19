import { z, defineCollection, reference } from 'astro:content';

const postCollection = defineCollection({
    type: 'content',
    schema: z.object({
        isDraft: z.boolean().default(false),

        title: z.string(),
        description: z.string(),
        author: z.string().default('Roberto Mora'),
        image: z.object({
            src: z.string(),
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