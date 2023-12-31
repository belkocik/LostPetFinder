import React from 'react';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import Container from '@/components/Container';
import Listings from '../components/Listings';

const HomeScreen = () => {
  const {t} = useTranslation();

  return (
    <Container>
      {/* <Text variant="headlineLarge">{t('homeHeading')}</Text> */}
      <Listings />
    </Container>
  );
};

export default HomeScreen;
