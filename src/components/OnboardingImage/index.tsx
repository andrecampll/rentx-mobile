import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';

import { Container, Title } from './styles';

interface OnboardingProps {
  title: string;
  image: ImageSourcePropType;
}

const OnboardingImage: React.FC<OnboardingProps> = ({ title, image }) => {
  return (
    <Container>
      <Image source={image} />
      <Title>{title}</Title>
    </Container>
  );
};

export default OnboardingImage;
