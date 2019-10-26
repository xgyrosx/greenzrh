import React, { useState } from "react";
import { View, Image } from "react-native";
import { AppTitle, AppText } from "./StyledText";
// import { Event } from "./Event";
import Card from "./Card";

function Event(props) {
  return (
    <View style={{ paddingBottom: 10 }}>
      <Card>
        <View
          style={{
            overflow: "hidden",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8
          }}
        >
          <Image
            style={{
              flex: 1,
              height: 50,
              width: "100%",
              resizeMode: "cover"
            }}
            source={props.image}
          />
        </View>
        <View
          style={{
            padding: 10
          }}
        >
          {props.children}
        </View>
      </Card>
    </View>
  );
}

export default function Events(props) {
  return (
    <View>
      <View
        style={{
          paddingBottom: 10
        }}
      >
        <Event>
          <AppTitle>Samstag, 26. Oktober</AppTitle>
          <AppText>Climate Strike</AppText>
          <AppText>Location: Bürkliplatz, Zürich</AppText>
        </Event>
        <Event>
          <AppTitle>Montag, 28. Oktober</AppTitle>
          <AppText>Panel Discussion</AppText>
          <AppText>Location: Auer & Co., Sihlquai 131</AppText>
        </Event>
        <Event>
          <AppTitle>Donnerstag, 31. Oktober</AppTitle>
          <AppText>Workshop on sustainable cooking</AppText>
          <AppText>Location: Impact Hub, Viadukt</AppText>
        </Event>
      </View>
    </View>
  );
}
