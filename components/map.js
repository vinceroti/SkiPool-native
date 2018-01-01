import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import MapView from 'react-native-maps';
import mapStyles from './styles/_map';
import structure from './styles/_structure';

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: '',
      longitude: '',
      error: '',
      map:         <ActivityIndicator size="large" color="#0000ff" />,
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
      const map = <MapView style={mapStyles.map} region={currentPosition}>
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
      <View style={mapStyles.view}>
        <View style={structure.center}>
          { this.state.map }
        </View>
        <View>
          <Text style={mapStyles.text}>Stuff will go here</Text>
          {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        </View>
      </View>
    );
  }
}
