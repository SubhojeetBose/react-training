import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ColorPicker = props => {
  const colorStyle = {
    backgroundColor: props.colorCode,
  };

  return (
      <TouchableOpacity onPress= {props._onPress} style= {[styles.box, colorStyle]}>
          {props.showTick && <Text style={styles.tick}>
            ✔
          </Text>}     
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 20,
    height: 32,
    justifyContent: 'center',
    width: 32
  },
  tick: {
    color: '#ffffff',
    fontSize: 16,
  }
});

export default ColorPicker;