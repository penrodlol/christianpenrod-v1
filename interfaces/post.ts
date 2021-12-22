import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface Data {
  id: string;
  title: string;
  published: boolean;
  publishedOn: string;
  readTime: number;
}

export interface Post<T = MDXRemoteSerializeResult> {
  data: Data;
  path: string;
  source: T;
}

export type Posts = Array<Post<string>>;
