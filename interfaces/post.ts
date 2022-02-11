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
  prevPost: PaginatedPost;
  nextPost: PaginatedPost;
  headers?: Array<string>;
  github?: string;
  stackblitz?: string;
}

export type Posts = Array<Post>;

export type PaginatedPost = Pick<Post, 'title' | 'slug'> | null;

export type Slug = Pick<Post, 'slug'>;

export type Slugs = Array<Slug>;
