import React, {useState, useEffect} from 'react';
import { Text, View, Button } from 'react-native';

const YourApp = () => {
  const [count, setCount] = useState(1);
  const [isTimerStop, setIsTimerStop] = useState(true);
  let timer;

  useEffect(() => {
    if(!isTimerStop) {
      let clock = setTimeout(() => setCount(count + 1), 1000);
      this.timer = clock;
    }
  }, [count, timer, isTimerStop]);

  return (
    <View style={{ display: "flex", flexDirection: "column", flex: 1, alignItems: "center", top: 260}}>
      <Text style={{fontSize: 23}}>Counter</Text>
      <Text style={{fontSize: 21}}>{count}</Text>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 200}}>
        <Button onPress={() => st(count, setCount, isTimerStop, setIsTimerStop)} title="Start"/>
        <View style={{marginLeft: 40}}>
          <Button onPress={() => rt(setCount)} title="Reset"/>
        </View>
        <View style={{marginLeft: 40}}>
          <Button onPress={() => stp(setIsTimerStop)} title="Stop"/>
        </View>
      </View>
    </View>
  );
}

const st= (count, setCount, isTimerStop, setIsTimerStop) => {
  if(isTimerStop) {
    setIsTimerStop(false);
    let clock = setTimeout(() => setCount(count + 1), 1000);
    this.timer = clock;
  }
}

const rt= (setCount) => {
  clearTimeout(this.timer);
  setCount(1);
}

const stp= (setIsTimerStop) => {
  clearTimeout(this.timer);
  setIsTimerStop(true);
}

export default YourApp;