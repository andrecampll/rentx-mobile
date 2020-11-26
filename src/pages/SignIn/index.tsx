import React from 'react';
import Input from '../../components/Input';

import { Container, Title, SubTitle } from './styles';

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
      <Input />
    </Container>
  );
};

export default SignIn;
