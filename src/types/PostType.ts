interface PostType {
  id: string;
  title: string;
  date: string;
  content?: string;
  rest?: unknown[];
}

export type {PostType};
