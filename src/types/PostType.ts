import type {MarkdownContent} from 'astro';

export interface PostMetadata {
  title: string;
  publishDate: string;
  description: string;
  tags: string[];
}

export type PostContent = MarkdownContent<PostMetadata>;
