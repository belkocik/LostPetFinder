import {StyleSheet, View} from 'react-native';
import React from 'react';
import {IconButton, Searchbar, Surface, Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

type Props = {};

const HomeHeader = (_props: Props) => {
  const {t} = useTranslation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeIconFilter, setActiveIconFilter] = React.useState('all');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  const handleFilter = (filterValue: string) => {
    setActiveIconFilter(filterValue);
  };

  return (
    <Surface style={styles.header}>
      <Searchbar
        placeholder={t('search')}
        onChangeText={onChangeSearch}
        value={searchQuery}
        mode="bar"
      />
      <View style={styles.filterIconsContainer}>
        <View style={styles.iconsContainer}>
          <View style={styles.iconContainer}>
            <IconButton
              icon="all-inclusive"
              size={28}
              mode={activeIconFilter === 'all' ? 'contained-tonal' : 'outlined'}
              onPress={() => handleFilter('all')}
            />
            <Text>{t('all')}</Text>
          </View>
          <View style={styles.iconContainer}>
            <IconButton
              icon="dog"
              size={28}
              mode={activeIconFilter === 'dogs' ? 'contained-tonal' : 'outlined'}
              onPress={() => handleFilter('dogs')}
            />
            <Text>{t('dogs')}</Text>
          </View>
          <View style={styles.iconContainer}>
            <IconButton
              icon="cat"
              size={28}
              mode={activeIconFilter === 'cats' ? 'contained-tonal' : 'outlined'}
              onPress={() => handleFilter('cats')}
            />
            <Text>{t('cats')}</Text>
          </View>
        </View>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 6,
    padding: 20,
  },
  filterIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 12,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default HomeHeader;
