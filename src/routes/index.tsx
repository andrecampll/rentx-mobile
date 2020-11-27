import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../pages/Onboarding';
import Home from '../pages/Home';
import AuthRoutes from './AuthRoutes';
import SuccessPage from '../pages/SuccessPage';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
      <Stack.Screen name="SuccessPage" component={SuccessPage} />
    </Stack.Navigator>
  );
};

export default Routes;
