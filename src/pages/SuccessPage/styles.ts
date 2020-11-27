import styled from 'styled-components/native';

export const Container = styled.View`
  background: #1b1b1f;
  flex: 1;
  padding: 96px 0;
  align-items: center;
`;

export const Background = styled.Image`
  width: 100%;
  height: 37%;
`;

export const SuccessIconContainer = styled.View`
  border: 2px;
  border-color: #29292e;
  border-width: 10px;
  padding: 10px 6px;
  border-radius: 3px;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
`;

export const ActionTitle = styled.Text`
  font-family: 'Archivo-Semibold';
  font-size: 30px;
  line-height: 33px;
  color: #e1e1e6;
  margin-top: 46px;
`;

export const ActionDescription = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #a8a8b3;
  margin-top: 16px;
`;

export const Button = styled.TouchableOpacity`
  background: #29292e;
  padding: 19px 25px;
  margin-top: auto;
`;

export const ButtonText = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
`;
