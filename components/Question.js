import React from 'react';
import { View, Image } from 'react-native';
import Card from './Card';

export default function Question(props) {
  return (
    <View style={{
      paddingBottom:10
    }}>
      <Card>
        <View style={{
          overflow: 'hidden',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}>
          <Image
            style={{
              flex: 1,
              height: 150,
              width: '100%',
              resizeMode: 'cover'
            }}
            source={props.image}/>
        </View>
        <View style={{
          padding: 10
        }}>
          {props.children}
        </View>
      </Card>
    </View>
  );
}