import { createStore } from 'turp';

import { posts } from './feature/posts';
import { IPosts } from './feature/posts/types';

export interface IUser {
  name: string;
  age: number;
  state: string;
}

const store = createStore({
  stateInitial: {
    posts,
    user: {
      name: 'Mateus Conceição',
      age: 26,
      estado: 'São Paulo',
    },
  },
  logging: e => console.log(e),
});

export type IGlobal = {
  posts: IPosts[];
  user: IUser;
};

export { store };
