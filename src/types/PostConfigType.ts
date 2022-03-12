export interface PostConfigType {
  math: boolean;
  mermaid: boolean;
  toc: boolean;
  readingTime: boolean;
  license: {
    enable: boolean;
    default: string;
  };
}
