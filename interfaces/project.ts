export type Tag = 'website' | 'misc';

export interface Tool {
  id: string;
  name: string;
  url: string;
}

export type Tools = Array<Tool>;

export interface Project {
  id: string;
  title: string;
  description: string;
  tools: Tools;
  tag: Tag;
  preview?: string;
  hosted?: string;
  github?: string;
}

export type Projects = Array<Project>;
