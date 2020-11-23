import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import Icon from 'react-native-vector-icons/Feather';
import Carro from '../../assets/carro.png';
import Calendario from '../../assets/calendario.png';
import OnboardingImage from '../../components/OnboardingImage';

const MobileOnboarding: React.FC = () => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#fff',
          image: <OnboardingImage title="01" image={Calendario} />,
          title: `Primeiro,\nescolha \na data`,
          subtitle:
            'Você é quem define um\nperíodo, e nós mostraremos\nos carros disponíveis.',
        },
        {
          backgroundColor: '#fff',
          image: <OnboardingImage title="02" image={Carro} />,
          title: 'Depois,\nescolha o\ncarro',
          subtitle:
            'Vários modelos para você\ndirigir seguro, com conforto\ne segurança.',
        },
      ]}
      containerStyles={{
        alignItems: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20,
      }}
      titleStyles={{
        fontFamily: 'Archivo-Bold',
        fontSize: 40,
        textAlign: 'left',
        color: '#47474D',
      }}
      subTitleStyles={{
        fontFamily: 'Archivo-Regular',
        textAlign: 'left',
        marginTop: 24,
        fontSize: 15,
        lineHeight: 25,
        color: '#7A7A80',
      }}
      nextLabel={<Icon name="chevron-right" size={25} color="#AEAEB3" />}
      bottomBarHighlight={false}
      showSkip={false}
    />
  );
};

export default MobileOnboarding;
