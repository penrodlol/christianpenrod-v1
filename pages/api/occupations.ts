import { Occupations } from '@interfaces/occupation.interface';
import type { NextApiRequest, NextApiResponse } from 'next';
import occupations from '../../public/data/occupations.json';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Occupations>,
) {
  res.status(200).json(occupations);
}
