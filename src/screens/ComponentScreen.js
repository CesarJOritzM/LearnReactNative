import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentScreen = () => {
  const myName = 'Cesar Ortiz';
  return (
    <View>
      <Text style={styles.title}>Getting started whit react native!!!</Text>;
      <Text style={styles.fullName}>My name is {myName}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },
  fullName: {
    fontSize: 20,
  },
});
export default ComponentScreen;
