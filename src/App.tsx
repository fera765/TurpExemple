import React from 'react';
import { TurpProvider } from 'turp';

import { Posts } from './components/Posts';
import { User } from './components/User';
import { store } from './store';

import { Container } from './styles';

const App: React.FC = () => {
  return (
    <TurpProvider store={store}>
      <Container>
        <User />
        <Posts />
      </Container>
    </TurpProvider>
  );
};

export default App;
