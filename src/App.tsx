import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, createClient } from 'urql';
import AuthRoutes from './routes';

const client = createClient({ url: 'http://localhost:3333' });

const App: React.FC = () => {
  return (
    <Provider value={client}>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
