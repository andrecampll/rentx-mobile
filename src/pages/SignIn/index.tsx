import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Alert } from 'react-native';
import { useLoginMutation } from '../../generated/graphql';
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

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [, login] = useLoginMutation();

  const formRef = useRef<FormHandles>(null);

  const handleSignIn = useCallback(
    async (formData: SignInFormData) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha é obrigatória'),
        });

        await schema.validate(formData, { abortEarly: false });

        const { data } = await login(formData);

        if (data) {
          const { user, token, errors } = data.login;

          if (errors?.length) {
            throw new Error(errors[0].message);
          }
        } else {
          throw new Error();
        }
      } catch (err) {
        Alert.alert('Erro na autenticação', err.message);
      }
    },
    [login],
  );

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
