import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Button,
} from 'react-native';
import Questions from '../components/Questions';
import { AppTitle } from '../components/StyledText'
import News from '../components/News';
import Question from '../components/Question';
import { AppText } from './EnvironmentScreen';

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
          <View style={{ paddingBottom: 10 }}>
            <AppTitle>Daily Tips</AppTitle>
          </View>
          <Questions/>
          <View style={{ paddingBottom: 10 }}>
            <AppTitle>News</AppTitle>
          </View>
          <Question
            image={require('../assets/images/gewobag.jpg')}>
            <AppTitle>Reuse Serverheat to heat apartments</AppTitle>
            <AppText>EWZ distributes waste heat to 611 apartments in Zürich Altstetten from its server farms. Waste heat is 80% CO2 free! These 611 apartments save 1120 Tons of CO₂ per year compared to using fossil fuels.</AppText>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Button title='read more'/>
            </View>
          </Question>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
