import React from 'react';
import { View, Text, FlatList, Dimensions } from "react-native";
import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem/CarItem';

const CarList = () => {
  // console.log(cars);
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <CarItem
              name={item.name}
              tagline={item.tagline}
              taglineCTA={item.taglineCTA}
              image={item.image}
            />
          );
        }}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default CarList;