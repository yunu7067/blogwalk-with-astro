export interface PostConfigType {
  /** Using KaTeX */
  math: boolean;
  /** Using mermaid */
  mermaid: boolean;
  /** Using table of content */
  toc: boolean;
  /** Using readingTime */
  readingTime: boolean;
  /** Using license sign */
  license: {
    enable: boolean;
    default: string;
  };
}
