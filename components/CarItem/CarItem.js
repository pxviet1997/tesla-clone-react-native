import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton/StyledButton';
import styles from './styles';

const CarItem = ({ name, tagline, taglineCTA, image }) => {
  console.log(tagline);
  return (
    <View style={styles.carContainer}>

      <ImageBackground
        style={styles.image}
        source={image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type='primary'
          content='Custom Order'
          onPress={() => console.log('Custom Order was pressed.')} />
        <StyledButton
          type='secondary'
          content='Existing Inventory'
          onPress={() => console.log('Existing Inventory was pressed')} />

      </View>

    </View>

  );
}

export default CarItem;