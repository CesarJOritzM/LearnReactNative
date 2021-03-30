import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentScreen = () => {
  return <Text style={styles.TextStyle}>This is a component Screen</Text>;
};
const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 30,
  },
});
export default ComponentScreen;
