import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function WelcomeHeader() {

    //const{userData, setUserData} = useContext(AuthContext);

  return (
    <View style={styles.container}>

        <View>
            <Text style={styles.text}>Selam</Text>
            {/*<Text>{userData?.name}</Text>*/
            <Text style={styles.text}>kullanıcı</Text>} 
            <Text>sa</Text>     
        </View>

        {/*<Image source={{uri:userData?.picture}} style={{width:40, height:40, borderRadius:100}}/>*/
        <Image source={require('../Assets/Images/login.png')} style={{width:40, height:40, borderRadius:100}}/> }
        

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    text:{
        verticalAlign:'top'
    }
})

