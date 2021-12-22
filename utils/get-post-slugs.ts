import { Data, Posts } from '@interfaces/post';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';

export const POSTS_PATH = join(process.cwd(), 'posts');
export const POSTS_FILE_PATHS = readdirSync(POSTS_PATH);

export function getPostsSlugs(): Posts {
  return POSTS_FILE_PATHS.map((path) => {
    const source = readFileSync(join(POSTS_PATH, path), 'utf8');
    const { data, content } = matter(source);

    return {
      data: data as Data,
      source: content,
      path: path.replace(/.mdx/i, ''),
    };
  }).filter(({ data }) => data.published);
}

export async function getPostSlug(slug: string) {
  const payload = getPostsSlugs().find(({ path }) => path === slug);
  const scope = payload?.data as Record<string, unknown> | undefined;
  const source = await serialize(payload?.source as string, { scope });

  return {
    ...payload,
    source,
  };
}
