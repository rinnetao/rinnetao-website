import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    ogImage: z.string().optional(),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleHtml: z.string().optional(),
    date: z.date(),
    newsText: z.string(),
    description: z.string(),
    ogImage: z.string().optional(),
  }),
});

export const collections = { blog, news };
