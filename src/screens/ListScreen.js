import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'friend#1', age: 20 },
    { name: 'friend#2', age: 21 },
    { name: 'friend#3', age: 22 },
    { name: 'friend#4', age: 23 },
    { name: 'friend#5', age: 24 },
    { name: 'friend#6', age: 25 },
    { name: 'friend#7', age: 26 },
    { name: 'friend#8', age: 27 },
    { name: 'friend#9', age: 28 },
    { name: 'friend#10', age: 29 },
    { name: 'friend#11', age: 30 },
    { name: 'friend#12', age: 31 },
  ];
  return (
    <View>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={style.textStyle}>
              {item.name} - age:{item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};
const style = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
