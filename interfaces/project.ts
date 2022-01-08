import { SvgName } from '@components/Svg';

export type Tag = 'WEBSITE' | 'MISC';

export interface Tool {
  id: string;
  name: SvgName;
  url: string;
}

export type Tools = Array<Tool>;

export interface External {
  hosted?: string;
  github?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tools: Tools;
  tag: Tag;
  preview?: string;
  external?: External;
}

export type Projects = Array<Project>;
