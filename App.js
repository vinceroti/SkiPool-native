import React from 'react';
import { Text, View, Alert } from 'react-native';
import MapView from 'react-native-maps';
import styles from './components/styles/_view';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: '',
      longitude: '',
      error: '',
      map: <Text>Retrieving your location</Text>,
      currentPosition: ''
    };
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const currentPosition = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0221,
      }

      const map = <MapView style={styles.map} region={currentPosition}>

      <MapView.Marker
        coordinate={currentPosition}
        title={"Your Location"}
      />
      </MapView>

      this.setState({
        map: map,
        currentPosition: currentPosition
      });
    },
    (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
   }


  render() {
    return (
      <View>
        <View style={styles.view}>
          { this.state.map }
        </View>
        <View>
          <Text style={styles.text}>Stuff will go here</Text>
          {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        </View>
      </View>
    );
  }
}
