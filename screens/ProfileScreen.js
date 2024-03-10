import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View style={ {gap: 20} }>
      <View style={ {
        flexDirection: 'row',
        alignItems: 'flex-end',
      }}>
        <Image source={ { uri: 'https://randomuser.me/api/portraits/men/1.jpg' } } style={ {
          width: 120,
          height: 120,
          borderRadius: 120 / 2,
          marginTop: 100,
          marginLeft: 20,
          borderColor: '#f00',
          borderWidth: 2
        } } />
        <Image source={ { uri: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWl8ZW58MHx8MHx8fDA%3D' } } style={ {
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          width: '100%',
          height: 170,
          zIndex: -1,
        }} />
        <Text style={ {
          marginBottom: 15,
          fontSize: 23,
          fontWeight: 'bold',
          letterSpacing: 1
        }}>Kabe Taiijin</Text>
      </View>

      <View style={ {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}>
        <TouchableOpacity style={ {
          backgroundColor: '#ccc',
          padding: 10,
        }}>
          <Text style={ {
            fontSize: 12,
            letterSpacing: 1,
            fontWeight: 'bold',
            color: '#f00'
          } }>500K Followers</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ {
          backgroundColor: '#ccc',
          padding: 10,
        }}>
          <Text style={ {
            fontSize: 12,
            letterSpacing: 1,
            fontWeight: 'bold',
            color: '#f00'
          } }>200K Following</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ {
          backgroundColor: '#ccc',
          padding: 10,
        }}>
          <Text style={ {
            fontSize: 12,
            letterSpacing: 1,
            fontWeight: 'bold',
            color: '#f00'
          } }>1M Cuteness</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProfileScreen