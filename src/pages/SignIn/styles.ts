import styled from 'styled-components/native';
import CheckBoxComponent from '@react-native-community/checkbox';

export const Container = styled.View`
  padding: 32px;
`;

export const Title = styled.Text`
  font-family: 'Archivo-Semibold';
  font-size: 40px;
  line-height: 44px;
  margin-top: 37%;
  color: #3d3d4d;
`;

export const SubTitle = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 15px;
  line-height: 25px;
  color: #7a7a80;
  margin-top: 7%;
`;

export const FormView = styled.View`
  margin-top: 32%;
`;

export const AuthOptionsView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 7%;
`;

export const AuthOptionsText = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 15px;
  line-height: 25px;
  color: #7a7a80;
  margin-left: 12px;
`;

export const RememberView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CheckBox = styled(CheckBoxComponent)``;
