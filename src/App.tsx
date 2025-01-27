import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as URQLProvider, createClient } from 'urql';
import { Provider as ReduxProvider } from 'react-redux';
import Routes from './routes';
import store from './store';
// import AppProvider from './hooks';

const client = createClient({ url: 'http://localhost:3333/graphql' });

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      {/* <AppProvider> */}
      <URQLProvider value={client}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </URQLProvider>
      {/* </AppProvider> */}
    </ReduxProvider>
  );
};

export default App;
