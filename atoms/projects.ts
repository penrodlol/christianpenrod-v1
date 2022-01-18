import { Projects, Tag } from '@interfaces/project';
import { atom, selector } from 'recoil';

export const projectsState = atom<Projects | null>({
  key: 'projects',
  default: null,
});

export const projectsSelector = selector<{ [tag in Tag]: Projects | null }>({
  key: 'projectsSelector',
  get: ({ get }) => {
    const state = get(projectsState);
    const website: Projects = [];
    const misc: Projects = [];

    state?.forEach((project) => {
      if (project.tag === 'website') website.push(project);
      else misc.push(project);
    });

    return {
      website,
      misc,
    };
  },
});
