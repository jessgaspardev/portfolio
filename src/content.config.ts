import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    loader: glob({pattern: "src/content/blog/**/*.md"}),
    schema: z.object({
        title: z.string().max(50),
        slug: z.string(),
        category: z.enum(["Now", "Astro", "Personal"]),
        publishedDate: z.date(),
        description: z.string().max(200),
        isDraft: z.boolean()
    })
})

export const collections = { blog };