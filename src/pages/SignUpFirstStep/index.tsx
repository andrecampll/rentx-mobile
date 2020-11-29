import React, { useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Title, SubTitle, FormView, FormViewTitle } from './styles';

const SignUpFirstStep: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);

  const handleSignIn = useCallback((data: any) => {
    console.log(data);
  }, []);

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

      <Form ref={formRef} onSubmit={handleSignIn}>
        <FormView>
          <FormViewTitle>01. Dados</FormViewTitle>
          <Input name="email" placeholder="Nome" icon="user" />
          <Input name="password" placeholder="E-mail" icon="mail" />
          <Button
            background="#dc1637"
            onPress={() => navigation.navigate('SignUpSecondStep')}
          >
            Próximo
          </Button>
        </FormView>
      </Form>
    </Container>
  );
};

export default SignUpFirstStep;
