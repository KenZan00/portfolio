import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const projectCollection = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        image: z.string(),
        tech: z.array(z.string()),
        description: z.string(),
        github: z.url(),
    })
})

export const collections = { projectCollection };