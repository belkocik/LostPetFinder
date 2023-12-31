import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import {Avatar, Card, Text} from 'react-native-paper';

type Props = {
  title: string;
  subtitle: string;
  thumbnail: string;
  address: string;
  geolocation: {
    latitude: number;
    longitude: number;
  };
};

const LeftContent = props => <Avatar.Icon {...props} icon="information-variant" />;
const AddressContent = props => <Avatar.Icon {...props} icon="google-maps" />;

const ListingItem = (props: Props) => {
  const {t} = useTranslation();
  console.log('🚀 ~ file: ListingItem.tsx:11 ~ ListingItem ~ props:', props);
  return (
    <Card style={{marginBottom: 18}}>
      <Card.Cover source={{uri: props.thumbnail}} />
      <Card.Title title={props.title} subtitle={props.subtitle} left={LeftContent} />
      <Card.Title title={t('address')} subtitle={props.address} left={AddressContent} />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {flex: 1, marginBottom: 10, padding: 10, height: 200, width: 200},
  thumbnail: {width: '100%', height: 150},
  cardInfoSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ListingItem;
