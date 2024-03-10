import { View, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

const HeaderComponent = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch('https://randomuser.me/api/portraits/men/1.jpg').then(res => res.url),
      fetch('https://randomuser.me/api/portraits/men/2.jpg').then(res => res.url),
      fetch('https://randomuser.me/api/portraits/men/3.jpg').then(res => res.url),
      fetch('https://randomuser.me/api/portraits/men/4.jpg').then(res => res.url),
      fetch('https://randomuser.me/api/portraits/men/5.jpg').then(res => res.url),
      fetch('https://randomuser.me/api/portraits/men/6.jpg').then(res => res.url),
      fetch('https://randomuser.me/api/portraits/men/7.jpg').then(res => res.url),
      fetch('https://randomuser.me/api/portraits/men/8.jpg').then(res => res.url),
      fetch('https://randomuser.me/api/portraits/men/9.jpg').then(res => res.url),
    ]).then(imageUrls => {
      setImages(imageUrls);
    }).catch(error => {
      console.error("Error fetching images:", error);
    });
  }, []);

  return (
    <View style={{ paddingTop: 15, paddingHorizontal: 15, paddingBottom: 10 }}>
      <ScrollView horizontal={true}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
          {images.map((imageUrl, index) => (
            <Image key={index} source={{ uri: imageUrl }} style={{ width: 70, height: 70, borderRadius: 35, borderColor: '#f00', borderWidth: 2 }} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HeaderComponent;
