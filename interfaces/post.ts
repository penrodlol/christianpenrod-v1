import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface Post {
  id: number;
  title: string;
  description: string;
  tags: Array<string>;
  published: string;
  readtime: number;
  slug: string;
  toc: boolean;
  source: MDXRemoteSerializeResult;
  headers?: Array<string>;
  github?: string;
  stackblitz?: string;
}

export type Posts = Array<Post>;

export type Slug = Pick<Post, 'slug'>;

export type Slugs = Array<Slug>;
