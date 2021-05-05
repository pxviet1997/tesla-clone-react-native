import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function CarItem() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('./assets/images/ModelS.jpeg')}
      />
      <View style={styles.carContainer}>
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subTitle}>Starting at $69,420</Text>
        </View>
      </View>

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
  carContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {
    // backgroundColor: 'red',
    marginTop: '30%',
    width: '100%',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: '500',

  },
  subTitle: {
    fontSize: 16,
    color: '#5c5e62'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute'
  }
});
