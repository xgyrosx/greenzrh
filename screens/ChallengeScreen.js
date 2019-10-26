import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import Challenges from '../components/Challenges';
import { AppTitle } from '../components/StyledText';

export default function ChallengeScreen(props) {
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
          <Challenges/>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

ChallengeScreen.navigationOptions = {
  header: null,
};
