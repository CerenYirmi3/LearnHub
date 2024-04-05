import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import Services from '../Shared/Services'
import { AuthContext } from '../Context/AuthContext'
import WelcomeHeader from '../Components/WelcomeHeader'
import SearchBar from '../Components/SearchBar'

//yorum satırları google proglemi çözüldüğü zaman kaldırılacaktır.


export default function Home() {

  //const{userData, setUserData} = useContext(AuthContext);

  return (
    <View style={{padding:20}}>
        {/**/<WelcomeHeader/>}
        <SearchBar/>
    </View>
  )
}


//Çoğu yorum satırı google sing in problemi çözüldüğünde kullanılacak.