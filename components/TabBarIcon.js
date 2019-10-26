import React from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";

import Colors from "../constants/Colors";

export default function TabBarIcon(props) {
  const { library, name, focused } = props;

  switch (library) {
    case "MaterialIcons":
      return (
        <MaterialIcons
          name={props.name}
          size={26}
          style={{ marginBottom: -3 }}
          color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      );
    case "MaterialCommunityIcons":
      return (
        <MaterialCommunityIcons
          name={props.name}
          size={26}
          style={{ marginBottom: -3 }}
          color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      );
    default:
    case "Ionicons":
      return (
        <Ionicons
          name={props.name}
          size={26}
          style={{ marginBottom: -3 }}
          color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      );
  }
}
