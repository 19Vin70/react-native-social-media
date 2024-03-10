import { View, Text } from 'react-native'
import React from 'react'

const SearchScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
      <Text style={{fontSize: 25, letterSpacing: 2, fontWeight: 'bold'}}>Search</Text>
    </View>
  )
}

export default SearchScreen