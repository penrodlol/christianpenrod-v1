export type ProjectType = 'website' | 'misc';

export interface Project<T = string> {
  id: string;
  title: string;
  description: T;
  tags: Array<string>;
  type: ProjectType;
  hosted: string;
  github: string;
  preview: string;
}

export type Projects<T = string> = Array<Project<T>>;
