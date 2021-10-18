import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import back from './assets/back.png';

// You can import from local files
import ColorBox from './components/ColorBox';
import ColorPicker from './components/ColorPicker';

const COLORS = [
  "#ed5199",
  "#ff8d69",
  "#68b5f6",
  "#21ba45",
  "#c9c9c9",
  "#3d3a3a"
]


export default function App() {
  const [showTickList, setshowTickList] = useState(new Array(60).fill(false));
  const [colorList, setColorList] = useState([])
  
  // There is some issue in scrollView part, when i'm filling the whole page, after that, if i try to delete from middle, it breaks the state, ie, no state change happens after that

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={back} style={styles.backButton} />
        <Text style={styles.headerText}>
          Color List
        </Text>
      </View>
      <ScrollView>
        <FlatList 
          data= {colorList}
          keyExtractor= {item => item}
          renderItem= {({item, index}) => 
            <View style= {styles.colorBox}>
              <ColorBox 
                colorCode= {item}
                _onPress= {() => _onDeletePress(setshowTickList, setColorList, index)}
              />
            </View>
          }
        />
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          ADD ROWS
        </Text>
        <FlatList 
          data= {COLORS} 
          keyExtractor= {item => item}
          horizontal
          style= {{justifyContent: "center"}}
          renderItem= {({item, index}) => 
            <View style= {styles.colorPicker}>
              <ColorPicker 
                colorCode= {item} 
                showTick= {showTickList[index]} 
                _onPress= {() => _onCreatePress(showTickList, setshowTickList, index, colorList, setColorList)}
              />
            </View>
          }
        />
      </View>
    </View>
  );
}

const _onCreatePress = (showTickList, setshowTickList, index, colorList, setColorList) => {
  if(!setshowTickList[index]) {
    const newList= new Array(60).fill(false)
    newList[index] = true
    setshowTickList(newList)
  }

  setColorList((oldList) => [...oldList, COLORS[index]]);
}

const _onDeletePress = (setshowTickList, setColorList, index) => {
  const newList= new Array(60).fill(false)
  setshowTickList(newList)

  setColorList((oldList) => {
        oldList.splice(index, 1);
        return [...oldList];
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 8
  },
  headerText: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  footerText: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#7f7f7f'
  },
  footer: {
    justifyContent: "flex-end",
    flexDirection: "column"
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
  colorPicker: {
    paddingHorizontal: 8
  },
  colorBox: {
    paddingVertical: 8
  }
});
