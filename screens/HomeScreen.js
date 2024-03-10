import { View } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/StoriesComponent';
import PostComponent from '../components/PostComponent';

const HomeScreen = () => {
  return (
    <View>
          <HeaderComponent />
          <PostComponent />
    </View>
  )
}

export default HomeScreen