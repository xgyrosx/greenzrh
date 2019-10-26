import React from 'react';
import { View, Image, Button, Slider } from 'react-native';
import Card from './Card';
import { AppTitle, AppText } from './StyledText';

function Challenge(props) {
  const { status = false } = props;
  return (
    <View style={{
      paddingBottom: 10,
    }}>
      <Card>
        <View style={{
          overflow: 'hidden',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}>
          <Image
            style={{
              flex: 1,
              height: 150,
              width: '100%',
              resizeMode: 'cover'
            }}
            source={props.image}/>
        </View>
        <View style={{
          padding: 10
        }}>
          {props.children}
          <View style={{
            flex: 1,
            flexDirection: 'row',
            // justifyContent: 'flex-end'
          }}>
            {!!status && <View style={{ flex: 1 }}>
              <Slider thumbImage={{ uri: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==`}} minimumValue={0} maximumValue={10} value={status}/>
            </View>}

            {!status && <Button title='Participate'/>}
          </View>
        </View>
      </Card>
    </View>

  )
}

export default function Challenges(props) {
  return  (
    <View>
      <View style={{
        paddingBottom: 10
      }}>
        <AppTitle>Your Challenges</AppTitle>
      </View>
      <Challenge status={7} image={require('../assets/images/biketowork.jpg')}>
        <AppTitle>Bike to work</AppTitle>
        <AppText>Try to bike to work every day for 1 week to help reduce your emissions caused by commuting.</AppText>
      </Challenge>
      <View style={{
        paddingBottom: 10
      }}>
        <AppTitle>New Challenges</AppTitle>
      </View>
      <Challenge image={require('../assets/images/veggieweek.jpg')}>
        <AppTitle>Veggie week</AppTitle>
        <AppText>Try to avoid meat for one week and give veggies a chance to change your nutrition habbits. </AppText>
      </Challenge>
      <Challenge image={require('../assets/images/soda.jpg')}>
        <AppTitle>No soda september</AppTitle>
        <AppText>Try to avoid soda for one month and enjoy the pureness of our pure and clean tap water.</AppText>
      </Challenge>
    </View>
  );
}