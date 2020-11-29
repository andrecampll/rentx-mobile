import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Union from '../../assets/Union.png';

import Button from '../../components/Button';

import {
  Container,
  Title,
  TitleView,
  SubTitle,
  ActionsView,
  ActionButton,
  ActionsText,
  EnterView,
  UnionImage,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <UnionImage source={Union} />

      <TitleView>
        <Title>
          Seja
          {'\n'}
          Bem-vindo(a)
        </Title>
        <SubTitle>O que você deseja fazer?</SubTitle>
      </TitleView>

      <ActionsView>
        <EnterView>
          <Button
            background="#dc1637"
            onPress={() =>
              navigation.navigate('AuthRoutes', { screen: 'SignIn' })
            }
          >
            Login
          </Button>
          <Button
            background="#29292E"
            onPress={() =>
              navigation.navigate('AuthRoutes', { screen: 'SignUpRoutes' })
            }
          >
            Cadastro
          </Button>
        </EnterView>
        <Button background="transparent" onPress={() => navigation.goBack()}>
          Voltar
        </Button>
      </ActionsView>
    </Container>
  );
};

export default Home;
