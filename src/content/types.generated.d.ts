declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"dev-diary.md": {
  id: "dev-diary.md",
  slug: "dev-diary",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"emoji.mdx": {
  id: "emoji.mdx",
  slug: "emoji",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"katex-math.mdx": {
  id: "katex-math.mdx",
  slug: "katex-math",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"markdown-syntax.mdx": {
  id: "markdown-syntax.mdx",
  slug: "markdown-syntax",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"post1.mdx": {
  id: "post1.mdx",
  slug: "post1",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"post2.mdx": {
  id: "post2.mdx",
  slug: "post2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"post3.mdx": {
  id: "post3.mdx",
  slug: "post3",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"test2-copy.md": {
  id: "test2-copy.md",
  slug: "test2-copy",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"test2.mdx": {
  id: "test2.mdx",
  slug: "test2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},
"special": {
"about.md": {
  id: "about.md",
  slug: "about",
  body: string,
  collection: "special",
  data: InferEntrySchema<"special">
},
},

	};

	type ContentConfig = typeof import("./config");
}
