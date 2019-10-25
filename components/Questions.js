import React, { useState } from 'react';
import { View, Slider } from 'react-native';
import { AppTitle, AppText } from './StyledText';
import Question from './Question';
import * as math from 'mathjs/dist/math';

export default function Questions(props) {
  const [meatConsumption, setMeatConsumption] = useState(0);
  const [coffeeConsumption, setCoffeeConsumption] = useState(0);
  const [showerLength, setShowerLength] = useState(0);

  return (
    <View>
      <View style={{
        paddingBottom:10
      }}>
        <Question
          image={require("../assets/images/meat.jpg")}>
          <AppTitle>
            How much meat do you eat on daily base? {math.bignumber(meatConsumption).toFixed(0)}g
          </AppTitle>
          <Slider
            value={meatConsumption}
            minimumValue={0}
            maximumValue={500}
            onValueChange={(e) => setMeatConsumption(e)}
          />
          <AppText>
            Did you know that you could save
            <AppText style={{ color: '#f00', }}>{` ${math.bignumber(meatConsumption * 13.3 / 2).toFixed(0)}g `}</AppText>
            of CO2 and
            <AppText style={{ color: '#00f' }}>{` ${math.bignumber(meatConsumption * 16 / 2).toFixed(0)}L `}</AppText>
            of Water by eating only half of it?
          </AppText>
        </Question>
      </View>
      <View style={{
        paddingBottom:10
      }}>
        <Question
          image={require("../assets/images/coffee.jpg")}>
          <AppTitle>
            How many cups of coffee do you drink per day? {math.bignumber(coffeeConsumption).toFixed(0)}
          </AppTitle>
          <Slider
            value={coffeeConsumption}
            minimumValue={0}
            maximumValue={12}
            onValueChange={(e) => setCoffeeConsumption(e)}
          />
          <AppText>
            Did you know that those {math.bignumber(coffeeConsumption).toFixed(0)} cups of coffe need
            <AppText style={{ color: '#00f', }}>{` ${math.bignumber(coffeeConsumption * 140).toFixed(0)}L `}</AppText>
            of water to produce?
          </AppText>
        </Question>
      </View>
      <View style={{
        paddingBottom:10
      }}>
        <Question
          image={require("../assets/images/showering.jpg")}>
          <AppTitle>
            How long do you shower? {math.bignumber(showerLength).toFixed(0)} mins
          </AppTitle>
          <Slider
            value={showerLength}
            minimumValue={0}
            maximumValue={45}
            onValueChange={(e) => setShowerLength(e)}
          />
          <AppText>
            Did you know that those {math.bignumber(showerLength).toFixed(0)} minutes of showering cause
            <AppText style={{ color: '#f00', }}>{` ${math.bignumber(showerLength * 225).toFixed(0)}g `}</AppText>
            of CO2?
          </AppText>
        </Question>
      </View>
    </View>
  );
}