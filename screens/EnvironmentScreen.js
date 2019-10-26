import React from "react";
import MapView, { Marker } from "react-native-maps";
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image
} from "react-native";
import Card from '../components/Card';

export default function EnvironmentScreen() {
  return (
    <View style={{ flex: 1, borderWidth: 0 }}>
      <View style={{ height: 400 }}>
        <MapView style={styles.mapStyle} initialRegion={this.state.region}>
          {this.state.markers.map((marker, index) => {
            return (
              <MapView.Marker
                key={index}
                coordinate={marker.coordinate}
                image={require("../assets/icons/leaf.png")}
              ></MapView.Marker>
            );
          })}
        </MapView>
      </View>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView contentContainerStyle={{ padding: 10 }}>
          <Environment
            image={require("../assets/images/aessbar.jpg")}
            title="Ässbar"
            text="Stüssihofstatt 6, 8001 Zürich"
            desc="Food from yesterday"
          />
          <Environment
            image={require("../assets/images/saftlade.jpg")}
            title="Saftlade"
            text="Münstergasse 31, 8001 Zürich"
            desc="Fresh juices"
          />
          <Environment
            image={require("../assets/images/bergundtal.jpg")}
            title="Berg und Tal"
            text="Limmatstrasse 231, 8005 Zürich"
            desc="Sustainable products"
          />
          <Environment
            image={require("../assets/images/soeder.jpg")}
            title="Soeder"
            text="Ankerstrasse 124, 8004 Zürich"
            desc="Local products"
          />
        </ScrollView>
      </View>
    </View>
  );
}

EnvironmentScreen.navigationOptions = {
  header: null
};

export function Environment(props) {
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
            <Image style={{ height: 100, width: 120 }} source={props.image} />
          </View>
          <View style={{ padding: 10 }}>
            <AppTitle>{props.title}</AppTitle>
            <AppText>{props.text}</AppText>
            <AppDesc>{props.desc}</AppDesc>
          </View>
        </View>
      </Card>
    </View>
  );
}

export function MonoText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}

export function AppTitle(props) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        { fontSize: 24, fontWeight: "900", paddingBottom: 6 }
      ]}
    />
  );
}

export function AppText(props) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        { fontSize: 16, fontWeight: "400", paddingBottom: 6 }
      ]}
    />
  );
}

export function AppDesc(props) {
  return (
    <Text
      {...props}
      style={[props.style, { fontSize: 14, fontWeight: "200", paddingTop: 2 }]}
    />
  );
}

state = {
  markers: [
    {
      coordinate: {
        latitude: 47.37266,
        longitude: 8.543785
      },
      title: "Ässbar",
      description: "Ässe vo gester"
    },
    {
      coordinate: {
        latitude: 47.38784,
        longitude: 8.526353
      },
      title: "Berg und Tal Marktladen",
      description: "Local food for everyone"
    },
    {
      coordinate: {
        latitude: 47.376864,
        longitude: 8.528795
      },
      title: "Soeder",
      description: "Local food for everyone"
    },
    {
      coordinate: {
        latitude: 47.373655,
        longitude: 8.541871
      },
      title: "Marktlücke",
      description: "Local supplies for everyone"
    },
    {
      coordinate: {
        latitude: 47.371826,
        longitude: 8.543666
      },
      title: "Saftlade",
      description: "Local supplies for everyone"
    },
    {
      coordinate: {
        latitude: 47.373609,
        longitude: 8.54366
      },
      title: "Rrrevolve",
      description: "Reduce, Reuse, Recycle"
    },
    {
      coordinate: {
        latitude: 47.375627,
        longitude: 8.539796
      },
      title: "Hiltl Dachterraasse",
      description: "Reduce, Reuse, Recycle"
    }
  ],
  region: {
    latitude: 47.369,
    longitude: 8.54,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.0221
  }
};

const styles = StyleSheet.create({
  container: {
    height: 500,
    paddingTop: 0,
    backgroundColor: "#fff"
  },
  container2: {
    height: 400,
    backgroundColor: "#fff"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
