import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;
  background: #dc1637;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Archivo-SemiBold';
  color: #fff;
  font-size: 15px;
  line-height: 18px;
`;
