import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Shared/Colors';

export default function SearchBar() {
  return (
    <View style={{}}>
        <FontAwesome name="search" size={24} color={Colors.gray} />
        <TextInput  placeholder='Ara' />
    </View>
  )
}


const styles= StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#fff',
        padding:10
    }
})