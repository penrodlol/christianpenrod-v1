import { Occupations } from '@interfaces/occupation';
import { atom } from 'recoil';

export const occupationsState = atom<Occupations | null>({
  key: 'occupations',
  default: null,
});
