import React from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps';
import styles from './components/styles/_view';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.view}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
        <View>
          <Text style={styles.text}>Yo boi Vince is building out an app</Text>
        </View>
      </View>
    );
  }
}
