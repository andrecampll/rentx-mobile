import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ButtonProps {
  background: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  max-width: 100%;
  min-width: 156px;
  height: 56px;
  background: ${props => props.background};
  align-items: center;
  justify-content: center;
  margin-top: 9%;
`;

export const ButtonText = styled.Text`
  font-family: 'Archivo-SemiBold';
  color: #fff;
  font-size: 15px;
  line-height: 18px;
`;
