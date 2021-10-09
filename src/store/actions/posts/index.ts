import { createActions } from 'turp/action';
import { IGlobal } from '../..';
import { IPosts } from '../../feature/posts/types';

const create = createActions<IGlobal, IPosts[]>();

const actions = create({
  field: 'posts',
  actions: ({ fieldActions }) => ({
    addNewPost(post: IPosts) {
      const { fieldData, fieldDispatch } = fieldActions;
      const posts = fieldData();

      fieldDispatch([post, ...posts]);
    },
    removePost(id: number) {
      const { fieldData, fieldDispatch } = fieldActions;
      const posts = fieldData();

      fieldDispatch(posts.filter(p => p?.id !== id));
    },
  }),
});

export const { removePost, addNewPost } = actions;
