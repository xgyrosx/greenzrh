import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import Events from '../components/Events';
import { AppTitle } from '../components/StyledText';

export default function EventScreen(props) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
    }}>
      <ScrollView
        contentContainerStyle={{
          padding: 10,
        }}>

        <SafeAreaView>
          <AppTitle>Events</AppTitle>
          <Events/>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}


EventScreen.navigationOptions = {
  header: null,
};