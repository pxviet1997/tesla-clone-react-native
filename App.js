import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarItem from './components/CarItem/CarItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name='Model S'
        tagLine='Order Online For'
        tagLineCTA='Touchless Delivery'
        image={require('./assets/images/ModelS.jpeg')}
      />
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
