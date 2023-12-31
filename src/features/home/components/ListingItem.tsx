import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
import Animated, {FadeInLeft, FadeInRight} from 'react-native-reanimated';

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

const LeftContent = (props: {size: number}) => (
  <Avatar.Icon {...props} icon="information-variant" />
);
const AddressContent = (props: {size: number}) => <Avatar.Icon {...props} icon="google-maps" />;

const ListingItem = (props: Props) => {
  const {t} = useTranslation();
  console.log('🚀 ~ file: ListingItem.tsx:11 ~ ListingItem ~ props:', props);
  return (
    <Animated.View entering={FadeInRight} exiting={FadeInLeft} style={{padding: 4}}>
      <Card style={styles.card} mode="elevated" elevation={1}>
        <Card.Cover source={{uri: props.thumbnail}} />
        <Card.Title title={props.title} subtitle={props.subtitle} left={LeftContent} />
        <Card.Title title={t('address')} subtitle={props.address} left={AddressContent} />
      </Card>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {marginBottom: 18},
});

export default ListingItem;
