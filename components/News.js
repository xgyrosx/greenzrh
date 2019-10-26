import React from 'react';
import { View, Image } from 'react-native';
import { AppTitle, AppText } from '../components/StyledText';
import Card from './Card';

export default function News(props) {
  return (
    <View
      style={{
        paddingBottom: 10
      }}
    >
      <Card>
        <View
          style={{
            flex: 1,
            flexDirection: "row"
          }}
        >
          <View
            style={{
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              overflow: "hidden"
            }}
          >
            <Image style={{
              width: 120,
              resizeMode: 'cover'
            }} source={props.image} />
          </View>
          <View style={{ padding: 10 }}>
            <AppTitle>{props.title}</AppTitle>
            <AppText>{props.text}</AppText>
          </View>
        </View>
      </Card>
    </View>
  );
}