import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface TOCItem {
  id: string;
  label: string;
}

export type TOC = Array<TOCItem>;

export interface Data {
  id: string;
  title: string;
  description: string;
  published: boolean;
  publishedOn: string;
  readTime: number;
  toc?: TOC;
  github?: string;
  stackblitz?: string;
}

export interface Post<T = MDXRemoteSerializeResult> {
  data: Data;
  path: string;
  source: T;
}

export type Posts = Array<Post<string>>;
