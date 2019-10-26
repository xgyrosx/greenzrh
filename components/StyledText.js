import React from 'react';
import { Text } from 'react-native';

export function MonoText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}

export function AppTitle(props) {
  return (
    <Text {...props} style={[props.style, { fontSize: 24, fontWeight: '900', paddingBottom: 6 }]}/>
  );
}

export function AppText(props) {
  return (
    <Text {...props} style={[props.style, { fontSize: 16, fontWeight: '400', paddingBottom: 6 }]}/>
  );
}
