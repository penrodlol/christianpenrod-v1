import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';
import prism from 'remark-prism';

export interface PostContent {
  source: MDXRemoteSerializeResult;
  toc: Array<string>;
}

export const POSTS_PATH = join(process.cwd(), 'posts');
export const POSTS_FILE_PATHS = readdirSync(POSTS_PATH);

export async function getPostContent(
  slug: string,
  getToc: boolean,
): Promise<PostContent> {
  const rawSource = readFileSync(join(POSTS_PATH, `${slug}.mdx`), 'utf-8');
  const { content } = matter(rawSource);

  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [prism],
    },
  });

  if (!getToc) return { source, toc: [] };

  const pattern = /^###*\s/;
  const toc = rawSource
    .split('\n')
    .filter((line) => line.match(pattern))
    .map((line) => line.replace(pattern, ''));

  return {
    source,
    toc,
  };
}
