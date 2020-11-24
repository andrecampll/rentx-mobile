import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Union from '../../assets/Union.png';

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
          <ActionButton
            buttonType="login"
            onPress={() => navigation.navigate('SignIn')}
          >
            <ActionsText>Login</ActionsText>
          </ActionButton>
          <ActionButton
            buttonType="register"
            onPress={() => navigation.navigate('SignUp')}
          >
            <ActionsText>Cadastro</ActionsText>
          </ActionButton>
        </EnterView>
        <ActionButton buttonType="back" onPress={() => navigation.goBack()}>
          <ActionsText>Voltar</ActionsText>
        </ActionButton>
      </ActionsView>
    </Container>
  );
};

export default Home;
