
import { StatusBar } from 'expo-status-bar';
import {StyleSheet,Button, Text,View,TextInput, Alert} from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect } from 'react';

export default function App() {
  const [username,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [savedUser,setSavedUser]=useState('');
  
  const Store = async () => {
   try {
      await AsyncStorage.setItem("userName",username)
      await AsyncStorage.setItem("userPass",password)
      Alert.alert("Success data saved");
     } 
     catch (error) {
     Alert.alert("data not saved ")
   }}
   
  const GetStoreData=async()=>{
   try{
    const savedUser=await AsyncStorage.getItem("userName");
    const savedPass= await AsyncStorage.getItem("userPass");
    if(savedUser !== null) setUserName(savedUser)
    if(savedPass !== null ) setPassword(savedPass)
      Alert.alert("saved data succesfullly");
      console.log("success",savedUser,savedPass);
    }catch(e){
     Alert.alert("not getting")
   }
   }
 
   useEffect(()=>{
      GetStoreData();
    },[])
 
  return (
    <View style={styles.container}>
      <Text>Login Form</Text>
      
    <TextInput style={styles.input} placeholder="Username" onChangeText={setUserName} value={username}  />
     <TextInput style={styles.input} placeholder="Password" secureTextEntry= {true} onChangeText={setPassword} value={password}  />
     <Button style={styles.button} title='Login'   onPress={GetStoreData}/>

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
  input:{
   height:30,
   margin:12,
   width:80,
   padding:10,
   borderWidth:1,
  },
  button:{
  }
});
