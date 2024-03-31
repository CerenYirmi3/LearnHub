import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../Shared/Colors'
import { AntDesign } from '@expo/vector-icons';

export default function Login() {
  return (
    <View>
            <Image source={require('../Assets/Images/login.png')} style={styles.image}/>
      <View style={styles.conteiner}>
            <Text style={styles.welcomeText}>LearnHub'a Hoş Geldiniz</Text>      
            <Text style={{textAlign:'center', marginTop:80, fontSize:20}}>Giriş Yap/Kayıt Ol</Text>
            <View style={styles.button}>
                <AntDesign name="google" size={24} color="white" style={{marginRight:10}}/>
                <Text style={{color:Colors.white}}>Google İle Kayıt Ol</Text>
            </View>
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