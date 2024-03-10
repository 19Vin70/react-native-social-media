import { View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

const SearchScreen = () => {
  const imageUrls = [
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg',
    'https://randomuser.me/api/portraits/men/3.jpg',
    'https://randomuser.me/api/portraits/men/4.jpg',
    'https://randomuser.me/api/portraits/men/5.jpg',
    'https://randomuser.me/api/portraits/men/6.jpg',
    'https://randomuser.me/api/portraits/men/7.jpg',
    'https://randomuser.me/api/portraits/men/8.jpg',
    'https://randomuser.me/api/portraits/men/9.jpg',
    'https://randomuser.me/api/portraits/men/10.jpg',
    'https://randomuser.me/api/portraits/men/11.jpg',
    'https://randomuser.me/api/portraits/men/12.jpg',
    'https://randomuser.me/api/portraits/men/13.jpg',
    'https://randomuser.me/api/portraits/men/14.jpg',
    'https://randomuser.me/api/portraits/men/15.jpg',
    'https://randomuser.me/api/portraits/men/16.jpg',
    'https://randomuser.me/api/portraits/men/17.jpg',
    'https://randomuser.me/api/portraits/men/18.jpg',
  ];

  return (
    <ScrollView style={{padding: 10}}>
      <View style={ {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 10,
      }}>
        <TextInput style={ {
          padding: 5,
          paddingHorizontal: 10,
          width: '90%',
          fontSize: 16,
          letterSpacing: .5
        } } placeholder='Search' />

        <TouchableOpacity>
          <Ionicons name='search' size={24} color='#000' />
        </TouchableOpacity>
      </View>

      <View style={ {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 10,
        paddingBottom: 30
      } }>
        {imageUrls.map((imageUrl, index) => (
          <TouchableOpacity>
            <Image key={index} source={{ uri: imageUrl }} style={ {
              width: 105,
              height: 105,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: '#141414'
            }} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

export default SearchScreen
