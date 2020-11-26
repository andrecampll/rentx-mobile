import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: {
          backgroundColor: '#fff',
        },
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <Icon name="chevron-left" color="#AEAEB3" size={30} />
        ),
        headerTitle: '',
      }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
