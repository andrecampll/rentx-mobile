import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <Container>
      <Icon name={icon} size={20} color="#7A7A80" />
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#7a7a80"
        {...rest}
      />
    </Container>
  );
};

export default Input;
