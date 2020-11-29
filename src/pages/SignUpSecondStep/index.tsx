import React, { useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Title, SubTitle, FormView, FormViewTitle } from './styles';

const SignUpSecondStep: React.FC = () => {
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
          <FormViewTitle>02. Senha</FormViewTitle>
          <Input name="password" placeholder="Senha" icon="lock" />
          <Input name="password" placeholder="Repetir Senha" icon="lock" />
          <Button
            background="#dc1637"
            onPress={() =>
              navigation.navigate('SuccessPage', { CreateAccount: true })
            }
          >
            Cadastrar
          </Button>
        </FormView>
      </Form>
    </Container>
  );
};

export default SignUpSecondStep;
