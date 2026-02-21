import { defineCollection, z } from "astro:content";

const article = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  })
});

export const collections = { article };