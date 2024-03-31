import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Shared/Colors'
import { AntDesign } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as Goggle from 'expo-auth-session/providers/google';


export default function Login() {

  WebBrowser.maybeCompleteAuthSession();
  const [request, response, promtAsync] = Goggle.useAuthRequest({
    androidClientId: '767537161180-bk03aelqt8mmeb8e3e0n3cggmrob66b5.apps.googleusercontent.com',
    expoClientId: '767537161180-f8hms69026inphfb7f5lg5cojdc7o7d2.apps.googleusercontent.com',
  });

  return (
    <View>
            <Image source={require('../Assets/Images/login.png')} style={styles.image}/>
      <View style={styles.conteiner}>
            <Text style={styles.welcomeText}>LearnHub'a Hoş Geldiniz</Text>      
            <Text style={{textAlign:'center', marginTop:80, fontSize:20}}>Giriş Yap/Kayıt Ol</Text>
            <TouchableOpacity style={styles.button} onPress={()=>promtAsync()}>
                <AntDesign name="google" size={24} color="white" style={{marginRight:10}}/>
                <Text style={{color:Colors.white}}>Google İle Kayıt Ol</Text>
            </TouchableOpacity>
      </View>

    </View>
  )
} 

const styles = StyleSheet.create({
    conteiner:{
        paddingTop:40,
        top:'-16%',
        marginTop:-20,
        backgroundColor: '#fff',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
    },
    welcomeText:{
        fontSize:35, 
        textAlign:'center', 
        fontWeight:'bold'
    },
    image:{
        top:'-16%'
    },
    button:{
      backgroundColor:Colors.primary,
      padding:10,
      margin:30,
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
    },
})