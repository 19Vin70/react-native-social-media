import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const initialPostsData = [
  {
    profile: 'https://randomuser.me/api/portraits/men/1.jpg',
    username: 'Kabe Taiijin',
    location: 'Palawan',
    time: 'Now',
    imageUri: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww'
  },
  {
    profile: 'https://randomuser.me/api/portraits/men/10.jpg',
    username: 'Alqasim Xiao',
    location: 'Zamboanga City',
    time: '1 minute ago',
    imageUri: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    profile: 'https://randomuser.me/api/portraits/men/15.jpg',
    username: 'Kabe Bot',
    location: 'Puerto Princesa City',
    time: '2 hours ago',
    imageUri: 'https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.webp?b=1&s=170667a&w=0&k=20&c=iJp6e2C-l2lRmyG3ColHMpXe0QYrPnrfQQc2O6PsYC4='
  },
];

const PostComponent = ({ username, location, imageUri, profile, time }) => {
  return (
    <View style={{ padding: 15, flexDirection: 'column', gap: 15 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <Image source={{ uri: profile }} style={{ width: 40, height: 40, borderRadius: 20, borderColor: '#f00', borderWidth: 2 }} />

          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold', letterSpacing: 0.5 }}>{username}</Text>
            <Text style={{fontSize: 15, color: '#777'}}>{location}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <Text style={{ fontSize: 14, color: '#777' }}>{time}</Text>

          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={18} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Image
          source={{ uri: imageUri }}
          style={{ width: '100%', height: 250, borderRadius: 10 }}
        />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <TouchableOpacity>
            <Ionicons name="heart" size={26} color="#f00" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="paper-plane-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Ionicons name="bookmark" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MultiplePostsComponent = () => {
  const [postsData, setPostsData] = useState(initialPostsData);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setPostsData(initialPostsData);
      setRefreshing(false);
    }, 2000);
  };

  const onScrollEnd = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const paddingToBottom = 20;
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom) {
      onRefresh();
    }
  };

  return (
    <ScrollView
      onScroll={({ nativeEvent }) => onScrollEnd({ nativeEvent })}
      scrollEventThrottle={400}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <View style={{ paddingBottom: 110 }}>
        {postsData.map((postData, index) => (
          <PostComponent
            key={index}
            profile={postData.profile}
            username={postData.username}
            location={postData.location}
            time={postData.time}
            imageUri={postData.imageUri}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default MultiplePostsComponent;
