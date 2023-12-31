import React from 'react';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import Container from '@/components/Container';

const HomeScreen = () => {
  const {t} = useTranslation();

  return (
    <Container>
      <Text variant="headlineLarge">{t('homeHeading')}</Text>
    </Container>
  );
};

export default HomeScreen;
