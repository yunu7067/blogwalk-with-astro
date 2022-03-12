import type {PostConfigType} from '@types';

export interface PostType {
  id: string;
  title: string;
  date: string;
  post: PostConfigType;
  content?: string;
  rest?: unknown[];
}
