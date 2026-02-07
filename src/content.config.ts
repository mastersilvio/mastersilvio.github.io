import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    published: z.boolean().optional().default(true),
    tags: z.array(z.string()).optional().default([]),
    lang: z.enum(["pt", "en"]).default("pt"),
    translation_key: z.string().optional(),
    date: z.coerce.date().optional(),
    description: z.string().optional().default(""),
  }),
});

export const collections = { blog };
