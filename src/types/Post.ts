export interface PostDataProps {
  title: string;
  description?: string;
  date: string;
  image?: string;
  draft?: boolean;
  slug?: string;
  series?: string;
  tags?: string[];
}
export interface PostContentProps {
  content: string;
}
export type Post = PostDataProps & PostContentProps;
