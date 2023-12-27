import React from 'react';
import {Searchbar, Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import Container from '@/components/Container';

const HomeScreen = () => {
  const {t} = useTranslation();
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <Container>
      {/* <Text variant="headlineLarge">{t('homeHeading')}</Text> */}
      <Searchbar placeholder={t('search')} onChangeText={onChangeSearch} value={searchQuery} />
    </Container>
  );
};

export default HomeScreen;
