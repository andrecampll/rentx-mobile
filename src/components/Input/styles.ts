import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  background: #f2f2fa;
  margin-bottom: 8px;
  padding: 0 16px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: 'Archivo-Regular';
  font-size: 16px;
  line-height: 18px;
  color: #7a7a80;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
