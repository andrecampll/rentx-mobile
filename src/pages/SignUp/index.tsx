import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Title,
  SubTitle,
  FormView,
  AuthOptionsView,
  AuthOptionsText,
  RememberView,
  CheckBox,
  FormViewTitle,
} from './styles';

const SignUp: React.FC = () => {
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
        <FormViewTitle>1. Dados</FormViewTitle>
        <Input name="email" placeholder="Nome" icon="user" />
        <Input name="password" placeholder="E-mail" icon="mail" />
        <Button>Próximo</Button>
      </FormView>
    </Container>
  );
};

export default SignUp;
