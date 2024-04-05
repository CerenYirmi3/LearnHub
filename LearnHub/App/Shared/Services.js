import AsyncStorage from '@react-native-async-storage/async-storage';


const setUserAuth=async()=>{
    await AsyncStorage.setItem('userData',JSON.stringify(value))
}

const getUserAuth=async()=>{
   const value =  await AsyncStorage.getItem('userData');
   return JSON.parse(value)
}

export default{
    setUserAuth,
    getUserAuth
}
