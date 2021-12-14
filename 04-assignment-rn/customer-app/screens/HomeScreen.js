import React, {useState, useCallback, useEffect} from 'react';
import { TextInput, View, StyleSheet, Text, TouchableOpacity, Alert, FlatList } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomerListItem from '../components/CustomerListItem'

const Drawer = createDrawerNavigator();

// Was not able to keep these component in other js files, dont know the reason, when put in separate file it was not rendering
function AddCustomerScreen({navigation}){     

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState(0)
  const [address, setAddress] = useState('')

  const _onAddCustomer = useCallback (async () => {
    if(!name || !email || !phone || !address) {
      Alert.alert('Please enter all the fields')
      return
    }
    const newCustomer = {
      name, email, phone, address
    }
    navigation.navigate('Customers', newCustomer)
  }, [name, email, phone, address])

  return (
    <View style={styles.container}>
      <TextInput style={styles.box} placeholder="Name" onChangeText={setName}/>
      <TextInput style={styles.box} placeholder="Email" onChangeText={setEmail}/>
      <TextInput style={styles.box} placeholder="PhoneNumber" onChangeText={setPhone} keyboardType="numeric" />
      <TextInput style={styles.box} placeholder="Address" onChangeText={setAddress}/>
      <TouchableOpacity onPress= {() => {_onAddCustomer()}} style= {styles.submit}>
        <Text>
          Submit
        </ Text>
      </ TouchableOpacity>
    </View>
  )
}

// not rendering
function CustomerListScreen({navigation, route}) {
    const newCustomer = route.params ? route.params.newCustomer : undefined
    const [customerList, setCustomerList] = useState([])

    const fetchCustomers = useCallback(async () => {
        const result = await fetch ('https://nodeapi.pyther.com/customer')

        console.log(result)

        if(result.ok()) {
          const customers = await result.json()
          setCustomerList(customers)
        }
    }, [])
    
    useEffect(() => {
      fetchCustomers()
    }, [])

    console.log(customerList)

    return (
      <View>
        <View style= {{flex: 0.95}}>
          <FlatList 
            data= {customerList}
            keyExtractor= {item => item}
            renderItem= {({item, index}) => 
              <View style= {styles.colorBox}>
                <CustomerListItem 
                  name={item.name}
                  email={item.email}
                  phone={item.phone}
                />
              </View>
            }
          />
      </View>
      </View>
    )
}

export default function HomeScreen() {
  return (
    <NavigationContainer independent='true'>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Customers" component={CustomerListScreen} />
        <Drawer.Screen name="Add Customers" component={AddCustomerScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  box: {
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 5,
    margin: 10,
    width: 300,
    height: 50
  },
  submit: {
    backgroundColor: '#01aae5',
    borderRadius: 10,
    padding: 5,
    margin: 10,
    width: 90,
    alignItems: 'center'
  }
});