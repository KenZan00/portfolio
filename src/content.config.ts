import { defineCollection } from 'astro:content';
import { glob } from "astro/loaders";
import { z } from 'astro/zod';

const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        image: z.string(),
        tech: z.array(z.string()),
        description: z.string(),
        github: z.url(),
    })
})

export const collections = { projects }; 