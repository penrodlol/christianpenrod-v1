export type ProjectType = 'website' | 'misc';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: Array<string>;
  type: ProjectType;
  preview?: string;
  hosted?: string;
  github?: string;
}

export type Projects = Array<Project>;
