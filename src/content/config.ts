import {z, defineCollection} from 'astro:content';

const special = defineCollection({
  schema: {
    title: z.string().optional(),
    description: z.string().optional(),
  },
});

const blog = defineCollection({
  schema: {
    title: z.string(),
    description: z.string().default(''),
    /** ex. "2022-02-30" or "2022-02-30T01:23:45.678Z" */
    publishDate: z.date(),
    /** default : `true` */
    toc: z.boolean().default(true),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    series: z.string().optional(),
    comments: z.boolean().default(true),
  },
});

export const collections = {
  blog: blog,
  special: special,
};
