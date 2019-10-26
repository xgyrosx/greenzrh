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
              height: 5,
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
        <Event>
          <AppTitle>Samstag, 02. November</AppTitle>
          <AppText>Circular Economy Meetup</AppText>
          <AppText>Location: Impact Hub, Viadukt</AppText>
        </Event>
        <Event>
          <AppTitle>Donnerstag, 07. November</AppTitle>
          <AppText>Pantalk: Sustainable Investment</AppText>
          <AppText>Location: Auer Salon</AppText>
        </Event>
        <Event>
          <AppTitle>Freitag, 08. November</AppTitle>
          <AppText>Velo-Friitig</AppText>
          <AppText>Location: Sihlquai 125, 8004 Zürich</AppText>
        </Event>
        <Event>
          <AppTitle>Samstag, 09. November</AppTitle>
          <AppText>Workshop on sustainable cooking</AppText>
          <AppText>Location: Impact Hub, Viadukt</AppText>
        </Event>
        <Event>
          <AppTitle>Monat, 11. November</AppTitle>
          <AppText>Workshop on sustainable cooking</AppText>
          <AppText>Location: Impact Hub, Viadukt</AppText>
        </Event>
      </View>
    </View>
  );
}
