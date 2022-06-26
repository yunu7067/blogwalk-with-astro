import type {MarkdownContent} from 'astro';

export interface SeriesMetadata {
  /** 같은 시리즈는 이름이 완전하게 동일해야합니다. */
  seriesName: string;
  /** 숫자가 작을 수록 앞에 위치합니다. */
  priority: number;
}

export interface PostMetadata {
  title: string;
  publishDate: string;
  description: string;
  /** 파일명 혹은 확장자에 대문자가 포함되 있으면 오류가 발생할 수도 있습니다. */
  heroImage?: string;
  tags: string[];
  series?: SeriesMetadata;
}

export type PostContent = MarkdownContent<PostMetadata>;
