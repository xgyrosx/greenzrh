import React from 'react';
import { View } from 'react-native';

export default function Card(props) {
  return (
    <View style={{
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 2,
      }}>
      {props.children}
    </View>
  )
}