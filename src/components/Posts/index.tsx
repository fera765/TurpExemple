import React from 'react';
import { useSelect } from 'turp';
import { IGlobal } from '../../store';
import { IPosts } from '../../store/feature/posts/types';

import { removePost, addNewPost } from '../../store/actions/posts';

import {
  Container,
  AddNewPost,
  Post,
  Title,
  RemovePost,
  Comment,
  CommentTitle,
} from './styles';

const Posts: React.FC = () => {
  const posts = useSelect<IGlobal, IPosts[]>(item => item.posts);

  return (
    <Container>
      <AddNewPost
        type="button"
        onClick={() => {
          const id = Math.random();
          addNewPost({
            id,
            title: `Javascript ${id}`,
            active: true,
            comments: [
              {
                id: 2,
                text: 'Topzera',
                user: {
                  name: 'Java',
                },
              },
            ],
          });
        }}
      >
        Adicionar novo Post
      </AddNewPost>
      {posts.map(item => (
        <Post key={item.id}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Title>{item.title}</Title>

            <RemovePost onClick={() => removePost(item.id)}>Deletar</RemovePost>
          </div>

          {item.comments.map(comment => (
            <Comment key={comment.id}>
              <CommentTitle> {`> ${comment.text}`}</CommentTitle>
            </Comment>
          ))}
        </Post>
      ))}
    </Container>
  );
};

export { Posts };
