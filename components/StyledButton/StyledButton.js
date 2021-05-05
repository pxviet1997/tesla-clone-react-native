import React from 'react';
import { Pressable, View, Text } from "react-native";
import styles from './styles';

const StyledButton = ({ type, onPress, content }) => {

  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={onPress}
      >
        {/* <Text>{props.label}</Text> */}
        <Text style={[styles.text, { color: textColor }]}>
          {content}
        </Text>
      </Pressable>
    </View>
  );
}

export default StyledButton;