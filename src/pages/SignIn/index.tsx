import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Title, SubTitle, FormView } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Title>
        Estamos
        {'\n'}
        quase lá.
      </Title>
      <SubTitle>
        Faça seu login para começar
        {'\n'}
        uma experiência incrível
      </SubTitle>

      <FormView>
        <Input name="email" placeholder="E-mail" icon="mail" />
        <Input name="password" placeholder="Senha" icon="lock" />
        <Button>Entrar</Button>
      </FormView>
    </Container>
  );
};

export default SignIn;
