import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import Services from '../Shared/Services'
import { AuthContext } from '../Context/AuthContext'
import WelcomeHeader from '../Components/WelcomeHeader'

export default function Home() {

  //const{userData, setUserData} = useContext(AuthContext);

  return (
    <View>
        {/**/<WelcomeHeader/>}
    </View>
  )
}


//Çoğu yorum satırı google sing in problemi çözüldüğünde kullanılacak.