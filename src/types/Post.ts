export interface PostMetadataProps {
  title: string;
  description?: string;
  date: string;
  image?: string;
  draft?: boolean;
  series?: string;
  tags?: string[];
}
export type Post = {
  slug: string;
  meta: PostMetadataProps;
  content: string;
};
