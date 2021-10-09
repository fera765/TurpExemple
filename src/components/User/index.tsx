import React from 'react';

import { useSelect, useSend } from 'turp';
import { IGlobal, IUser } from '../../store';

import {
  Container,
  BoxUser,
  Avatar,
  NameUser,
  UpdateUser,
  Update,
} from './styles';

const User: React.FC = () => {
  const user = useSelect<IGlobal, IUser>(item => item.user);
  const updateUser = useSend<IGlobal, number>();

  const handleUpdateUser = () => {
    updateUser(() => {
      return 29;
    }, 'user.age');
  };

  return (
    <Container>
      <BoxUser>
        <Avatar
          alt="Mateus Conceição"
          src="https://avatars.githubusercontent.com/u/35400150?v=4"
        />

        <NameUser>
          {user.name}, idade: {user.age}
        </NameUser>
      </BoxUser>

      <UpdateUser>
        <Update type="button" onClick={handleUpdateUser}>
          Atualizar user
        </Update>
      </UpdateUser>
    </Container>
  );
};

export { User };
