import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    updatedDate: z.date().optional(),
    description: z.string(),
    ogImage: z.string().optional(),
    relatedSlugs: z.array(z.string()).optional(),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleHtml: z.string().optional(),
    date: z.date(),
    updatedDate: z.date().optional(),
    newsText: z.string(),
    description: z.string(),
    ogImage: z.string().optional(),
    imageLink: z.string().optional(),
  }),
});

const shop = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    price: z.string(),
    priceNote: z.string().optional(),
    status: z.enum(['available', 'soldout']).default('available'),
    date: z.date(),
    description: z.string(),
    heroImage: z.string(),
    ogImage: z.string().optional(),
    stripeLink: z.string().optional(),
    purchaseNote: z.string().optional(),
    images: z.array(z.object({ file: z.string(), alt: z.string() })).optional(),
  }),
});

export const collections = { blog, news, shop };
