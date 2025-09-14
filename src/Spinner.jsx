import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { colors } from './global/colors';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.blue} />
      <Text style={styles.subtitle}>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
      marginTop: 8,
      fontSize: 20,
      color: colors.black,
      fontFamily: 'Space-Mono-Bold'
    }
});

export default Spinner;