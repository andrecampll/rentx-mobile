import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';
import { useLoginMutation } from '../generated/graphql';

interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface AuthState {
  token: string | null | undefined;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  updateUser(user: User): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  const [, login] = useLoginMutation();

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@Rentx:token',
        '@Rentx:user',
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;

        setAuthData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const { data } = await login({ email, password });

    if (data) {
      const { user, token, errors } = data.login;

      if (errors?.length) {
        throw new Error(errors[0].message);
      }

      await AsyncStorage.multiSet([
        ['@Rentx:token', token],
        ['@Rentx:user', JSON.stringify(user)],
      ]);

      api.defaults.headers.authorization = `Bearer ${token}`;

      setAuthData({ token, user });
    } else {
      throw new Error();
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@Rentx:user', '@Rentx:token']);

    setAuthData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    async (user: User) => {
      await AsyncStorage.setItem('@Rentx:user', JSON.stringify(user));

      setAuthData({
        token: authData.token,
        user,
      });
    },
    [setAuthData, authData.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: authData.user, loading, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
