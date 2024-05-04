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
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import page from './App/Pages/Page';


//yorum satırları google proglemi çözüldüğü zaman kaldırılacaktır.

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout(){
  return(
    <InsideStack.Navigator>
      <InsideStack.Screen name='HomePage' component={Home} options={{headerShown: false}}/>
      <InsideStack.Screen name='Page' component={page} options={{headerShown: false}}/>
    </InsideStack.Navigator>
  )
}

export default function App() {
  {/*const[userData, setUserData] = useState();
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
  })*/}

  const[user, setUser] = useState<import('firebase/auth').User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
    console.log('user', user);
    setUser(user);
    });
  }, []);

  return (
    <View style={styles.container}>

      <NavigationContainer >
        <Stack.Navigator initialRouteName='Login'>
          {user ?
              (<Stack.Screen name='Inside' component={InsideLayout} options={{headerShown: false}}/>) : 
              (<Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>)}
          
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
