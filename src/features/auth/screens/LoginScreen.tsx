import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {useForm, Controller} from 'react-hook-form';

type Props = {};

const LoginScreen = (_props: Props) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <TextInput
          label={t('email')}
          // value={text}
          // onChangeText={text => setText(text)}
        />
        <Text>{t('title')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingLeft: 10, paddingRight: 10},
  inputsContainer: {flex: 1, marginTop: 20},
});

export default LoginScreen;
