import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Title, SubTitle, FormView, FormViewTitle } from './styles';

const SignUpSecondStep: React.FC = () => {
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
        <FormViewTitle>02. Senha</FormViewTitle>
        <Input name="password" placeholder="Senha" icon="lock" />
        <Input name="password" placeholder="Repetir Senha" icon="lock" />
        <Button
          onPress={() =>
            navigation.navigate('SuccessPage', { CreateAccount: true })
          }
        >
          Cadastrar
        </Button>
      </FormView>
    </Container>
  );
};

export default SignUpSecondStep;
