import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import ListingItem from './ListingItem';

type Props = {};

const DATA = [
  {
    title: 'Unidentified',
    subtitle: 'Unidentified dog',
    thumbnail:
      'https://img.freepik.com/premium-zdjecie/pies-siedzi-na-lawce-w-parku_357532-13202.jpg?size=626&ext=jpg&ga=GA1.1.1417138760.1704032488&semt=sph',
    address: 'Wiewiórka 1337',
    geolocation: {
      latitude: 51.505,
      longitude: -0.09,
    },
  },

  {
    title: 'Pekinczyk',
    subtitle: 'Subtitle dog 1',
    thumbnail:
      'https://img.freepik.com/premium-zdjecie/pies-siedzi-na-lawce-w-parku_357532-13202.jpg?size=626&ext=jpg&ga=GA1.1.1417138760.1704032488&semt=sph',
    address: 'Wiewiórka 1337',
    geolocation: {
      latitude: 51.505,
      longitude: -0.09,
    },
  },
  {
    title: 'Husky',
    subtitle: 'Subtitle dog 2',
    thumbnail:
      'https://img.freepik.com/premium-zdjecie/pies-siedzi-na-lawce-w-parku_357532-13202.jpg?size=626&ext=jpg&ga=GA1.1.1417138760.1704032488&semt=sph',
    address: 'Wiewiórka 1337',
    geolocation: {
      latitude: 51.505,
      longitude: -0.09,
    },
  },
  {
    title: 'Scrub',
    subtitle: 'Subtitle dog 3',
    thumbnail:
      'https://img.freepik.com/premium-zdjecie/pies-siedzi-na-lawce-w-parku_357532-13202.jpg?size=626&ext=jpg&ga=GA1.1.1417138760.1704032488&semt=sph',
    address: 'Wiewiórka 1337',
    geolocation: {
      latitude: 51.505,
      longitude: -0.09,
    },
  },
  {
    title: 'Akita',
    subtitle: 'Subtitle dog 4',
    thumbnail:
      'https://img.freepik.com/premium-zdjecie/pies-siedzi-na-lawce-w-parku_357532-13202.jpg?size=626&ext=jpg&ga=GA1.1.1417138760.1704032488&semt=sph',
    address: 'Wiewiórka 1337',
    geolocation: {
      latitude: 51.505,
      longitude: -0.09,
    },
  },
];

const Listings = (props: Props) => {
  return (
    <View style={styles.container}>
      <FlashList
        data={DATA}
        renderItem={({item}) => <ListingItem {...item} />}
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 20},
});

export default Listings;
