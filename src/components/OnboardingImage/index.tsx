import React from 'react';
import { Image, Text, View } from 'react-native';
import Calendario from '../../assets/calendario.png';

import { Container, Title } from './styles';

const OnboardingImage: React.FC = () => {
  return (
    <Container>
      <Image source={Calendario} />
      <Title>01</Title>
    </Container>
  );
};

export default OnboardingImage;
