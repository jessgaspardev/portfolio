import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    loader: file("src/content/projects.json"),
    schema: z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
        href: z.string().url()
    })
})

export const collections = { projects };