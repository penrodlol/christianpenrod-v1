import { SvgName } from '@components/Svg';

export type Tag = 'website' | 'script';

export interface Tool {
  id: string;
  name: SvgName;
  url: string;
}

export type Tools = Array<Tool>;

export interface External {
  hosted?: string;
  github?: string;
  stackblitz?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tools: Tools;
  preview?: string;
  external?: External;
}

export type Projects = Array<Project>;

export type ProjectsDTO = Record<Tag, Projects>;
