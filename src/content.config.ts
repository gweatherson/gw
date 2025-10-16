import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';

const goods = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().transform((date) => new Date(date)),
    permalink: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const writing = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().transform((date) => new Date(date)),
    permalink: z.string(),
  }),
});

export const collections = { goods, writing };