import type {PostConfigType} from '@types';

export interface PostType {
  slug: string;
  title: string;
  description?: string;
  date: Date;
  image?: string;
  draft?: boolean;
  series?: string;
  content?: string;
}
