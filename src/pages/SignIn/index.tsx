import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
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
} from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSignIn = useCallback((data: any) => {
    console.log(data);
  }, []);

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

      <Form ref={formRef} onSubmit={handleSignIn}>
        <FormView>
          <Input name="email" placeholder="E-mail" icon="mail" />
          <Input name="password" placeholder="Senha" icon="lock" />
          <AuthOptionsView>
            <RememberView>
              <CheckBox
                boxType="square"
                lineWidth={1}
                onCheckColor="#000"
                onTintColor="#000"
              />
              <AuthOptionsText>Lembrar-me</AuthOptionsText>
            </RememberView>

            <AuthOptionsText>Esqueci minha senha</AuthOptionsText>
          </AuthOptionsView>
          <Button
            background="#dc1637"
            onPress={() => {
              formRef.current?.submitForm();
            }}
          >
            Entrar
          </Button>
        </FormView>
      </Form>
    </Container>
  );
};

export default SignIn;
