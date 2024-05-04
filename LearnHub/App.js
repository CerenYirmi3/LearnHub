import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Pages/Login';
import { AuthContext } from './App/Context/AuthContext';
import { useEffect, useState } from 'react';
import Home from './App/Pages/Home';
import Services from './App/Shared/Services';
import Colors from './App/Shared/Colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

//yorum satırları google proglemi çözüldüğü zaman kaldırılacaktır.

const Stack = createNativeStackNavigator();


export default function App() {
  
  /*const[userData, setUserData] = useState();
  useEffect(()=>{
    Services.getUserAuth().then(resp => {
      console.log(resp);
      if(resp){
        setUserData(resp)
      }
      else{
        setUserData(null)
      }
    })
  })*/


  return (
    <View style={styles.container}>

      <NavigationContainer >
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
});
