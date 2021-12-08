export interface Article {
  id: string;
  title: string;
  description: string;
  published: string;
  tag: string;
}

export type Articles = Array<Article>;
