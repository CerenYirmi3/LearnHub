import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, Button } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Colors from '../Shared/Colors'
import { AntDesign } from '@expo/vector-icons';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import * as WebBrowser from 'expo-web-browser';
import * as Goggle from 'expo-auth-session/providers/google';
import Services from '../Shared/Services';


//yorum satırları google proglemi çözüldüğü zaman kaldırılacaktır.

export default function Login() {
 
  {/* WebBrowser.maybeCompleteAuthSession();
  const [accessToken, setAccessToken] = useState();
  const [userInfo,setUserInfo] = useState();
  const [userData, setUserData] = useContext();
  const [request, response, promtAsync] = Goggle.useAuthRequest({
    androidClientId: '767537161180-bk03aelqt8mmeb8e3e0n3cggmrob66b5.apps.googleusercontent.com',
    expoClientId: '767537161180-413rv4j1gnagukogqrnn898replos78p.apps.googleusercontent.com',
    iosClienId: '767537161180-bk03aelqt8mmeb8e3e0n3cggmrob66b5.apps.googleusercontent.com2
  });

  useEffect(()=>{
    if(response?.type =='success')
    {
      setAccessToken(response.authentication.accessToken);
      console.log(response.authentication.accessToken);
      getUserData();
    }
  },[response])

  const getUserData=async()=>{
    try {
        const resp = await fetch(
          "https://www.googleapis.com/userinfo/v2/me",
          {
            headers: { Authorization: `Bearer ${response.authentication.accessToken}` },
          }
        );
  
        const user = await resp.json();
        console.log("User Details = ",user) 
        setUserInfo(user); 
        setUserData(user);
        await Services.setUserAuth(user)
        await Services.setUserAuth(user);
      } catch (error) {
      }
  }*/}

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try{
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response)
      alert('Giriş başarılı');
    }
    catch (error){
      console.log(error);
      alert('Giriş başarısız: ' + error);
    }
    finally{
      setLoading(false);
    }
  }

  
  const signUp = async () => {
    setLoading(true);
    try{
      const response = await createUserWithEmailAndPassword(auth, email, password)
      console.log(response)
      alert('Kayıt İşlemi Başarılı');
    }
    catch (error){
      console.log(error);
      alert('Kayıt İşlemi Başarısız: ' + error);
    }
    finally{
      setLoading(false);
    }
  }

  return (
    <View>
      <Image source={require('../Assets/Images/login.png')}/>
      <View style={styles.container}>
            <Text style={styles.welcomeText}>LearnHub'a Hoş Geldiniz</Text>      
            <Text style={{textAlign:'center', marginTop:80, fontSize:20}}>Giriş Yap/Kayıt Ol</Text>
            <TextInput style={styles.email} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)} value={email}></TextInput>
            <TextInput style={styles.password} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)} value={password} secureTextEntry={true}></TextInput>
            
            {loading ? <ActivityIndicator/> : 
              <>
                <Button title='Giriş Yap' onPress={signIn}/>
                <Button title='Kayıt Ol' onPress={signUp}/>
              </>}

            <TouchableOpacity style={styles.button}>
                <AntDesign name="google" size={24} color="white" style={{marginRight:10}}/>
                <Text style={{color:Colors.white}}>Google İle Kayıt Ol</Text>
            </TouchableOpacity>
      </View>
    </View>
  )
} 

const styles = StyleSheet.create({
  container:{
      paddingTop:40,
      marginTop:-25,
      backgroundColor:'#fff',
      borderTopRightRadius:30,
      borderTopLeftRadius:30
  },
  welcomeText:{
      fontSize:35,
      textAlign:'center',
      fontWeight:'bold' 
  },
  button:{
      backgroundColor:Colors.primary,
      padding:10,
      margin:30,
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10
  },
  email:{
    borderColor:Colors.primary,
    borderWidth:1,
    borderRadius:10,
    marginTop:20,
    marginLeft:30,
    marginRight:30,
    padding:10,
    backgroundColor:Colors.white
  },
  password:{
    borderColor:Colors.primary,
    borderWidth:1,
    borderRadius:10,
    marginTop:10,
    marginLeft:30,
    marginRight:30,
    padding:10,
    backgroundColor:Colors.white,
  }
})
