import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ChallengeScreen from "../screens/ChallengeScreen";
import EventScreen from "../screens/EventScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EnvironmentScreen from "../screens/EnvironmentScreen";
import Colors from "../constants/Colors";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      library="MaterialCommunityIcons"
      focused={focused}
      name={Platform.OS === "ios" ? "home" : "home"}
    />
  ),
  tabBarOptions: {
    activeTintColor: Colors.tabIconSelected,
    inactiveTintColor: Colors.tabIconDefault,
  }
};

HomeStack.path = "";

const ChallengeStack = createStackNavigator(
  {
    Challenges: ChallengeScreen
  },
  config
);

ChallengeStack.navigationOptions = {
  tabBarLabel: "Challenges",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      library="MaterialCommunityIcons"
      focused={focused}
      name={Platform.OS === "ios" ? "dumbbell" : "dumbbell"}
    />
  ),
  tabBarOptions: {
    activeTintColor: Colors.tabIconSelected,
    inactiveTintColor: Colors.tabIconDefault,
  }
};

ChallengeStack.path = "";

const EventStack = createStackNavigator(
  {
    Events: EventScreen
  },
  config
);

EventStack.navigationOptions = {
  tabBarLabel: "Events",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      library="MaterialIcons"
      focused={focused}
      name={Platform.OS === "ios" ? "event" : "event"}
    />
  ),
  tabBarOptions: {
    activeTintColor: Colors.tabIconSelected,
    inactiveTintColor: Colors.tabIconDefault,
  }
};

EventStack.path = "";

const EnvironmentStack = createStackNavigator(
  {
    Environment: EnvironmentScreen
  },
  config
);

EnvironmentStack.navigationOptions = {
  tabBarLabel: "Environment",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      library="MaterialIcons"
      focused={focused}
      name={Platform.OS === "ios" ? "location-on" : "location-on"}
    />
  ),
  tabBarOptions: {
    activeTintColor: Colors.tabIconSelected,
    inactiveTintColor: Colors.tabIconDefault,
  }
};

EnvironmentStack.path = "";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: "My Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      library="MaterialIcons"
      focused={focused}
      name={Platform.OS === "ios" ? "tag-faces" : "tag-faces"}
    />
  ),
  tabBarOptions: {
    activeTintColor: Colors.tabIconSelected,
    inactiveTintColor: Colors.tabIconDefault,
  }
};

ProfileStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ChallengeStack,
  EnvironmentStack,
  EventStack,
  ProfileStack
});

tabNavigator.path = "";

export default tabNavigator;
