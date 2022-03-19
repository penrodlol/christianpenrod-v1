import { Post } from '@models/post';
import dayjs from 'dayjs';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const BASE_POST: Partial<Post> = {
  id: 999,
  title: '---',
  published: dayjs().toString(),
  slug: 'draft',
  toc: true,
  prevPost: { title: 'Prev Draft', slug: 'prev-draft' },
  nextPost: { title: 'Next Draft', slug: 'next-draft' },
};

const URL = `https://${process.env.NEXT_PUBLIC_SUPABASE_DOMAIN}`;

const HANDLERS = (source: any) => [
  rest.get(`${URL}/rest/v1/posts`, (_res, res, ctx) =>
    res(ctx.status(200), ctx.json([{ slug: 'draft' }])),
  ),

  rest.post(`${URL}/rest/v1/rpc/get_post`, (_res, res, ctx) =>
    res(ctx.status(200), ctx.json(BASE_POST)),
  ),

  rest.get(
    `${URL}/storage/v1/object/posts/public/${BASE_POST.slug}.mdx`,
    (_res, res, ctx) =>
      res(
        ctx.status(200),
        ctx.set('Content-Type', 'application/octet-stream'),
        ctx.text(source),
      ),
  ),
];

export async function init() {
  if (typeof window === 'undefined') {
    const path = require('path');
    const fs = require('fs');
    const baseDir = path.join(process.cwd(), 'public/drafts');
    const dir = path.join(baseDir, `${BASE_POST.slug}.mdx`);
    const rawSource = fs.readFileSync(dir);

    setupServer(...HANDLERS(rawSource)).listen();
  }
}
