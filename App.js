import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarItem from './components/CarItem/CarItem';
import CarList from './components/CarList/CarList';

export default function App() {
  return (
    <View style={styles.container}>
      <CarList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
