export type ProjectType = 'website' | 'misc';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: Array<string>;
  type: ProjectType;
  hosted: string;
  github: string;
  preview: string;
}

export type Projects = Array<Project>;
