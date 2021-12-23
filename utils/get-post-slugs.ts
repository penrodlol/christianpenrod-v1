import { Data, Posts, TOC } from '@interfaces/post';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';
import prism from 'remark-prism';

export const POSTS_PATH = join(process.cwd(), 'posts');
export const POSTS_FILE_PATHS = readdirSync(POSTS_PATH);

export function getPostsSlugs(): Posts {
  return POSTS_FILE_PATHS.map((path) => {
    const source = readFileSync(join(POSTS_PATH, path), 'utf8');
    const { data, content } = matter(source);
    return {
      data: {
        ...data,
        toc: data.toc  ? getTOC(content) : null,
      } as Data,
      source: content,
      path: path.replace(/.mdx/i, ''),
    };
  }).filter(({ data }) => data.published);
}

export async function getPostSlug(slug: string) {
  const payload = getPostsSlugs().find(({ path }) => path === slug);
  const scope = payload?.data as Record<string, unknown> | undefined;
  const source = await serialize(payload?.source as string, {
    scope,
    mdxOptions: {
      remarkPlugins: [prism],
    },
  });

  console.log(source.compiledSource);

  return {
    ...payload,
    source,
  };
}

export function getTOC(source: string): TOC {
  const pattern = /^###*\s/;

  return source
    .split('\n')
    .filter((line) => line.match(pattern))
    .map((line) => {
      const label = line.replace(pattern, '');

      return {
        label,
        id: `${label.replace(/ /g, '-').toLowerCase()}`,
      };
    });
}
