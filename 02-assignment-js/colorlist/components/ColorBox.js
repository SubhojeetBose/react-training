import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import del from '../assets/delete.png';

const ColorBox = props => {
  const colorStyle = {
    backgroundColor: props.colorCode,
  };

  return (
    <View style= {styles.container}>
      <View style={[styles.box, colorStyle]}>
      </View>
      <TouchableOpacity onPress= {props._onPress} style= {styles.del}>
        <Image source={del} style={styles.del} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    flex: 1
  },
  container: {
    flexDirection: "row"
  },
  del: {
    width: 40,
    height: 40,
    marginHorizontal: 2
  }
});

export default ColorBox;