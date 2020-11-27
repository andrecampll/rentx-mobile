import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Title, SubTitle, FormView, FormViewTitle } from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>
        Crie sua
        {'\n'}
        conta.
      </Title>
      <SubTitle>
        Faça seu cadastro de
        {'\n'}
        forma rápido e fácil.
      </SubTitle>

      <FormView>
        <FormViewTitle>01. Dados</FormViewTitle>
        <Input name="email" placeholder="Nome" icon="user" />
        <Input name="password" placeholder="E-mail" icon="mail" />
        <Button
          onPress={() =>
            navigation.navigate('SuccessPage', { CreateAccount: true })
          }
        >
          Próximo
        </Button>
      </FormView>
    </Container>
  );
};

export default SignUp;
