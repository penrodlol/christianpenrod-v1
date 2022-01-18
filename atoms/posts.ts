import { Posts } from '@interfaces/post';
import { atom, selector } from 'recoil';

export interface PostsState {
  recents: Posts | null;
  all: Posts | null;
}

export const postsState = atom<PostsState>({
  key: 'posts',
  default: {
    recents: null,
    all: null,
  },
});

export const postsSelector = selector<PostsState>({
  key: 'postsSelector',
  get: ({ get }) => {
    const state = get(postsState);

    return {
      recents: state.recents,
      all: state.all,
    };
  },
});
