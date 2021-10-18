import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import Constants from 'expo-constants';
import back from './assets/back.png';

// You can import from local files
import ProductCard from './components/ProductCard';

const PRODUCTS = [
    {
      key: "1",
      title: 'V Neck shirt - Green',
      price: '$24.99',
      src:
        'https://training.pyther.com/fashion-images/0001_fashion_image.jpg',
    },
    {
      key: "2",
      title: 'V Neck Polo Shirt',
      price: '$24.99',
      src:
        'https://training.pyther.com/fashion-images/0002_fashion_image.jpg',
    },
    {
      key: "3",
      title: 'V Neck shirt - Red',
      price: '$24.99',
      src:
        'https://training.pyther.com/fashion-images/0003_fashion_image.jpg',
    },
    {
      key: "4",
      title: 'V Neck shirt - Lime',
      price: '$24.99',
      src:
        'https://training.pyther.com/fashion-images/0004_fashion_image.jpg',
    },
    {
      key: "5",
      title: 'V Neck shirt - Pink',
      price: '$24.99',
      src:
        'https://training.pyther.com/fashion-images/0005_fashion_image.jpg',
    },
    {
      key: "6",
      title: 'V Neck shirt - Green',
      price: '$24.99',
      src:
        'https://training.pyther.com/fashion-images/0006_fashion_image.jpg',
    },
    {
      key: "7",
      title: 'V Neck shirt - Brown',
      price: '$24.99',
      src:
        'https://training.pyther.com/fashion-images/0007_fashion_image.jpg',
    },
    {
      key: "8",
      title: 'Round Neck shirt - White',
      price: '$24.99',
      src:
        'https://training.pyther.com/fashion-images/0008_fashion_image.jpg',
    },
    {
      key: "9",
      title: 'Round Neck shirt - Pink',
      price: '$24.99',
      src:
        'https://training.pyther.com/fashion-images/0009_fashion_image.jpg',
    },
    {
      key: "10",
      title: 'Round Neck shirt - Lime',
      price: '$24.99',
      src:
        'https://training.pyther.com/fashion-images/0010_fashion_image.jpg',
    },
    {
      key:"11",
      title: 'Round Neck shirt - Orange',
      price: '$24.99',
      src:
        'https://training.pyther.com/fashion-images/0011_fashion_image.jpg',
    },
    {
      key: "12",
      title: 'V Neck shirt - Lime',
      price: '$24.99',
      src:
        'https://training.pyther.com/fashion-images/0012_fashion_image.jpg',
    },
    {
      key: "13",
      title: 'V Neck shirt - Lime',
      price: '$24.99',
      src:
        'https://training.pyther.com/fashion-images/0013_fashion_image.jpg',
    },
    {
      key: "14",
      title: 'V Neck shirt - Lime',
      price: '$24.99',
      src:
        'https://training.pyther.com/fashion-images/0014_fashion_image.jpg',
    },
    {
      key: "15",
      title: 'V Neck shirt - Lime',
      price: '$24.99',
      src:
        'https://training.pyther.com/fashion-images/0015_fashion_image.jpg',
    },
    {
      key: "16",
      title: 'V Neck shirt - Lime',
      price: '$24.99',
      src:
        'https://training.pyther.com/fashion-images/0016_fashion_image.jpg',
    },
  ];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={back} style={styles.backButton} />
      </View>
      <FlatList 
          data= {PRODUCTS}
          numColumns= {2}
          style= {{alignItems: "center"}}
          renderItem= {({item}) => 
            <View style= {styles.productCard}>
              <ProductCard src= {item.src} title= {item.title} price= {item.price} />
            </View>
          }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6f8',
    padding: 8,
    justifyContent: 'flex-start'
  },
  header: {
    flexDirection: "row", 
    marginTop: 24
  },
  backButton: {
    width: 28,
    height: 28,
    margin: 20
  },
  productCard: {
    padding: 10
  }
});
