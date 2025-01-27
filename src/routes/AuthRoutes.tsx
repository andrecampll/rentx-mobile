import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import SignIn from '../pages/SignIn';
import SignUpRoutes from './SignUpRoutes';

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
          <Icon
            name="chevron-left"
            color="#AEAEB3"
            size={22}
            style={{
              marginLeft: 28,
            }}
          />
        ),
        headerTitle: '',
      }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUpRoutes" component={SignUpRoutes} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
