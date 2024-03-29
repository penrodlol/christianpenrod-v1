import { Post } from '@models/post';
import dayjs from 'dayjs';
import { Feed, FeedOptions } from 'feed';
import { writeFileSync } from 'fs';
import { supabase } from './supabase';

(async () => {
  supabase
    .from<Post>('posts')
    .select('*')
    .order('published', { ascending: false })
    .then(({ data }) => {
      if (!data) return;

      const author: FeedOptions['author'] = {
        name: 'Christian Penrod',
        email: 'christian@penrod.contact',
        link: 'https://twitter.com/penrodlol',
      };

      const feed = new Feed({
        id: 'https://christianpenrod.com/blog',
        title: 'Christian Penrod Blog',
        link: 'https://christianpenrod.com/blog',
        description: 'Posts about front-end web development.',
        copyright: `All rights reserved ${dayjs().year()}, Christian Penrod`,
        language: 'en',
        author,
      });

      data.forEach((post) => {
        feed.addItem({
          title: post.title,
          id: `https://christianpenrod.com/blog/${post.slug}`,
          link: `https://christianpenrod.com/blog/${post.slug}`,
          description: post.description,
          author: [author],
          date: dayjs(post.published).toDate(),
          category: post.tags.map((tag) => ({ name: tag })),
          content: `
            <strong>
              <a href="https://christianpenrod.com/blog/${post.slug}" target="_blank">Keep Reading</a>
            </strong>
          `,
        });
      });

      writeFileSync('./public/rss.xml', feed.rss2());
    });
})();
