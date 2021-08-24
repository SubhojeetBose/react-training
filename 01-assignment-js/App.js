import React, {useState, useEffect} from 'react';
import { Text, View, Button } from 'react-native';

const YourApp = () => {
  const [count, setCount] = useState(1);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if(timer !== 0) {
      console.log(timer)
      let clock = setTimeout(() => setCount(count + 1), 1000);
      setTimer(clock)
    }
  }, [count, timer]);

  return (
    <View style={{ display: "flex", flexDirection: "column", flex: 1, alignItems: "center", top: 260}}>
      <Text style={{fontSize: 23}}>Counter</Text>
      <Text style={{fontSize: 21}}>{count}</Text>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 200}}>
        <Button onPress={() => st(count, setCount, timer, setTimer)} title="Start"/>
        <View style={{marginLeft: 40}}>
          <Button onPress={() => rt(setCount)} title="Reset"/>
        </View>
        <View style={{marginLeft: 40}}>
          <Button onPress={() => stp(timer)} title="Stop"/>
        </View>
      </View>
    </View>
  );
}

const st= (count, setCount, timer, setTimer) => {
  if(timer === 0) {
    console.log("insider");
    let clock = setTimeout(() => setCount(count + 1), 1000);
    setTimer(clock);
  }
}

const rt= (setCount) => {
  setCount(1)
}

const stp= (timer) => {
  clearTimeout(timer)
}

export default YourApp;