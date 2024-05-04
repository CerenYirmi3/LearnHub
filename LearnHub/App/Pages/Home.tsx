import { View, Text, Button, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import Services from '../Shared/Services'
import { AuthContext } from '../Context/AuthContext'
import WelcomeHeader from '../Components/WelcomeHeader'
import SearchBar from '../Components/SearchBar'
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';


//yorum satırları google proglemi çözüldüğü zaman kaldırılacaktır.

interface RouterProps{
  navigation: NavigationProp <any, any>;
}

export default function Home( {navigation} : RouterProps) {

  //const{userData, setUserData} = useContext(AuthContext);

  return (
    <ScrollView style={{padding:20, paddingTop:50}}>
        <WelcomeHeader/>
        <SearchBar/>
        <View style={{height:100}}> 
          <Button onPress={() => navigation.navigate('Page')} title='başka sayfata git'/>
          <Button onPress={() => FIREBASE_AUTH.signOut()} title='Çıkış Yap'/>
        </View>
    </ScrollView>
  )
}


//Çoğu yorum satırı google sing in problemi çözüldüğünde kullanılacak.