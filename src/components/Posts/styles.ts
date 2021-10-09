import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 16px;
  width: 100%;
`;

export const AddNewPost = styled.button`
  width: 180px;
  background: #999;
  border-radius: 10px;
  padding: 10px;

  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  border: none;

  cursor: pointer;
`;

export const Post = styled.div`
  border-bottom: 1px solid #9159c1;
`;

export const Title = styled.h1`
  color: #9159c1;
`;

export const RemovePost = styled.div`
  color: #000;
  font-size: 18px;
  cursor: pointer;
`;

export const Comment = styled.div`
  width: 100%;
  height: 100%;

  background: #c1c1c1;
  border-radius: 8px;
  padding: 4px;
  margin-bottom: 8px;
`;
export const CommentTitle = styled.h3`
  color: #000;
`;
