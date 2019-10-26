import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import Questions from '../components/Questions';

export default function HomeScreen() {
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
          <Questions/>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
