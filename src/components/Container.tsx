import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: FC<ContainerProps> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Container;
