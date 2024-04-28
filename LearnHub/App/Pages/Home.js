import { View, Text, Button, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import Services from '../Shared/Services'
import { AuthContext } from '../Context/AuthContext'
import WelcomeHeader from '../Components/WelcomeHeader'
import SearchBar from '../Components/SearchBar'

//yorum satırları google proglemi çözüldüğü zaman kaldırılacaktır.


export default function Home() {

  //const{userData, setUserData} = useContext(AuthContext);

  return (
    <ScrollView style={{padding:20, paddingTop:50}}>
        <WelcomeHeader/>
        <SearchBar/>
        <Slider/>
        <VideoCourseList/>
        <CourseList type={'basic'} />
        <CourseList type={'advance'} />
        <View style={{height:100}}> 
          
        </View>
    </ScrollView>
  )
}


//Çoğu yorum satırı google sing in problemi çözüldüğünde kullanılacak.