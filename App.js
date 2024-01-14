// App.js

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import TodoList from './components/todolist';

export default function App() {


  return (
    <View style={styles.container}>
      <TodoList/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  // input: {
  //   height: 40,
  //   borderColor: 'gray',
  //   borderWidth: 1,
  //   marginBottom: 10,
  //   paddingHorizontal: 10,
  // },
  // addButton: {
  //   backgroundColor: 'blue',
  //   padding: 10,
  //   marginBottom: 10,
  //   borderRadius: 5,
  //   alignItems: 'center',
  // },
  // todoItem: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginBottom: 10,
  // },
  // text: {
  //   flex: 1,
  //   fontSize: 16,
  // },
  // completedText: {
  //   flex: 1,
  //   fontSize: 16,
  //   textDecorationLine: 'line-through',
  //   color: 'grey',
  // },
  // completeButton: {
  //   backgroundColor: 'green',
  //   padding: 10,
  //   marginHorizontal: 5,
  //   borderRadius: 5,
  // },
  // deleteButton: {
  //   backgroundColor: 'red',
  //   padding: 10,
  //   marginHorizontal: 5,
  //   borderRadius: 5,
  // },
  // buttonText: {
  //   color: 'white',
  //   textAlign: 'center',
  // },
});
