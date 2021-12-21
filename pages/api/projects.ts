import { ProjectsDTO } from '@interfaces/project';
import type { NextApiRequest, NextApiResponse } from 'next';
import projects from '../../public/data/projects.json';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ProjectsDTO>,
) {
  res.status(200).json(projects as unknown as ProjectsDTO);
}
