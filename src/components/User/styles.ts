import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 100%;
  padding: 10px;
  background: #cccccc;
  border-radius: 10px 10px 0 0;

  display: flex;

  flex-direction: column;
`;

export const BoxUser = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;

  border-radius: 100%;
`;

export const NameUser = styled.strong`
  margin-left: 12px;
`;

export const UpdateUser = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Update = styled.button`
  width: 180px;
  margin-top: 20px;
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
