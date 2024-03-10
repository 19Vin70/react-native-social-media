import { View, Text } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
      <Text style={{fontSize: 25, letterSpacing: 2, fontWeight: 'bold'}}>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen