import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons';

const CustomerListItem = (props) => {
  return (
    <View style={styles.box}>
      <View style={styles.heading}>
        <Text style={styles.title}>{props.name}</Text>
        <Feather name="edit" size={24} color="blue" style={styles.icons} />
        <Feather name="trash" size={24} color="black" style={styles.icons} />
      </View>
      <View style={styles.subheading}>
        <Text style={styles.subtitle}>{props.email}</Text>
        <Text style={styles.subtitle}>{props.phone}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fbbbfd',
    padding: 5,
    margin: 10,
    width: 320,
    height: 100,
    flexDirection: 'column'
  },
  heading: {
    flexDirection: 'row',
    padding: 10
  },
  title: {
    fontSize: 22,
    marginRight: 100,
    fontWeight: 'bold',
  },
  icons: {
    paddingHorizontal: 10
  },
  subheading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subtitle: {
    fontSize: 18,
    paddingHorizontal: 32
  }
});

export default CustomerListItem;