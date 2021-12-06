export interface Article {
  id: string;
  title: string;
  description: string;
  published: string;
  tags: Array<string>;
}

export type Articles = Array<Article>;
