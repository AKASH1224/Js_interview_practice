

import { StatusBar } from 'expo-status-bar';
import {StyleSheet,Button, Text,View, Alert} from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect } from 'react';

export default function App() {
  const[user,setUser]=useState('');
 
  const setData = async()=>{
     await AsyncStorage.setItem("user","Akash Deep")
     Alert.alert("Success");
     console.log("Data Saved");
   }
  
   const getData = async() =>{
    const name =await AsyncStorage.getItem("user")
    setUser(name)
    Alert.alert(name)
   }
   const removeData = async () => {
    await AsyncStorage.removeItem("user")
    setUser('')
    
   }
   useEffect(()=>{
     getData();
   },[])
  return (
    <View style={styles.container}>
      <Text>AsyncStorage{user}</Text>
      <Button style={styles.button} title='SetData' onPress={setData}></Button>
      <Button style={styles.button} title='getData'   onPress={getData}></Button>
      <Button style={styles.button} title='RemoveData'   onPress={removeData}></Button>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
  }
});
