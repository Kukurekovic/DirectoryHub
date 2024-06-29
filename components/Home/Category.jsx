import { View, Text } from 'react-native'
import React from 'react'
import {Colors} from './../../constants/Colors'

export default function Category() {
  return (
    <View>
        <View style={{padding:19,  marginTop:10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{
       
        fontSize:20,
        fontFamily:'outfit-bold'
      }}>Category
      </Text>
      <Text style={{color: Colors.PRIMARY, fontFamily: 'outfit-medium'}}>View All</Text>
      </View>
    </View>
  )
}