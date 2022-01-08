import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface Post {
  id: string;
  title: string;
  description: string;
  tags: Array<string>;
  published: string;
  readTime: number;
  slug: string;
  source: MDXRemoteSerializeResult;
  showToc: boolean;
  toc: Array<string>;
  github?: string;
  stackblitz?: string;
}

export type Posts = Array<Post>;
