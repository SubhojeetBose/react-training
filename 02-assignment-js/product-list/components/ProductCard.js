import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ProductCard = (props) => {
  console.log(props.src)
  return (
    <View style={styles.product}>
      <Image source={{ uri: props.src }} style={styles.image}/>
      <View style={styles.description}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>{props.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    backgroundColor: 'white',
    borderRadius: 12,
    height: 200,
    aspectRatio: 0.8
  },
  price: {
    fontWeight: 'bold',
    color: '#515d6e'
  },
  title: {
    fontFamily: 'Roboto'
  },
  description: {
    marginTop: 10,
    marginLeft: 12
  },
  image: {
    height: 140,
    aspectRatio: 0.8,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 8
  }
});

export default ProductCard;
