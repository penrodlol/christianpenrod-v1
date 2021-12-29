export interface TOCItem {
  id: string;
  label: string;
}

export type TOC = Array<TOCItem>;

export interface Data {
  id: string;
  title: string;
  description: string;
  tags: Array<string>;
  published: boolean;
  publishedOn: string;
  readTime: number;
  toc?: TOC;
  github?: string;
  stackblitz?: string;
}

export interface Post<T = unknown> {
  data: Data;
  path: string;
  source: T;
}

export type Posts = Array<Post<string>>;
