import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import UnionBackground from '../../assets/UnionDark.png';

import {
  Container,
  Background,
  SuccessIconContainer,
  Content,
  ActionTitle,
  ActionDescription,
  Button,
  ButtonText,
} from './styles';

interface ISuccessPageProps {
  route: {
    params: {
      CreateAccount?: boolean;
      UpdatedProfile?: boolean;
      SuccessOperation?: boolean;
    };
  };
}

const SuccessPage: React.FC<ISuccessPageProps> = ({ route }) => {
  const { CreateAccount, UpdatedProfile, SuccessOperation } = route.params;

  return (
    <Container>
      <Background source={UnionBackground} />
      <Content>
        <SuccessIconContainer>
          <Icon name="check" color="#03B352" size={45} />
        </SuccessIconContainer>
        <ActionTitle>Conta Criada!</ActionTitle>
        <ActionDescription>
          Agora é só fazer login
          {'\n'} e aproveitar.
        </ActionDescription>
      </Content>
      <Button>
        <ButtonText>Ok</ButtonText>
      </Button>
    </Container>
  );
};

export default SuccessPage;
