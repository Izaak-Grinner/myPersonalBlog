import { defineCollection, z } from "astro:content";

const article = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
  })
});

export const collections = { article };