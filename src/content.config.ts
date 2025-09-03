import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';

const goods = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { goods };