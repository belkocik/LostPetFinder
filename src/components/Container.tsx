import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: FC<ContainerProps> = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Container;
