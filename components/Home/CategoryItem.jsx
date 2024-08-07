import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function CategoryItem({category, onCategoryPress}) {
  return (
    <TouchableOpacity onPress={() => onCategoryPress(category)}>
      <View style={{ alignItems: 'center', marginRight: 15 }}>
        <View style={{
          padding: 15,
          backgroundColor: Colors.ICON_BG,
          borderRadius: 99,
        }}>
          <Image 
            source={{uri: category.icon}}
            style={{
              width: 40,
              height: 40,
              alignSelf: 'center',
            }}
          />
        </View>
        <Text style={{
          fontSize: 12,
          fontFamily: 'outfit-medium',
          textAlign: 'center',
          marginTop: 5
        }}>{category.name}</Text>
      </View>
    </TouchableOpacity>
  )
}


