import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ActionButtonProps {
  buttonType: 'login' | 'register' | 'back';
}

export const UnionImage = styled.Image`
  margin-top: 130px;
`;

export const Container = styled.View`
  background: #1b1b1f;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 50px 40px;
  margin: auto 0;
`;

export const TitleView = styled.View``;

export const Title = styled.Text`
  color: #fff;
  font-family: 'Archivo-Regular';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 44px;
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #dedee3;
  margin-top: 16px;
`;

export const ActionsView = styled.View`
  margin: 0 auto;
  width: 100%;
`;

export const EnterView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 43px;
`;

export const ActionButton = styled(RectButton)<ActionButtonProps>`
  background: ${props =>
    props.buttonType === 'login'
      ? '#DC1637'
      : props.buttonType === 'register'
      ? '#29292E'
      : 'transparent'};
  padding: 19px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  max-width: ${props => (props.buttonType === 'back' ? 'auto' : '157px')};
`;

export const ActionsText = styled.Text`
  font-family: 'Archivo-Regular';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-align: center;

  color: #e1e1e6;
`;
