import React from 'react';
import { Text, View, Alert } from 'react-native';
import MapView from 'react-native-maps';
import styles from './components/styles/_view';

export default class App extends React.Component {
  constructor(props) {
     super(props);

     this.state = {
       latitude: null,
       longitude: null,
       error: null,
       map: <Text>Retrieving your location</Text>
     };
   }

   componentDidMount() {
     navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
           map: <MapView
             style={styles.map}
             initialRegion={{
               latitude: position.coords.latitude,
               longitude: position.coords.longitude,
               latitudeDelta: 0.0922,
               longitudeDelta: 0.0421,
             }}
           />
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
          <Text style={styles.text}>Yo boi Vince is building out an app</Text>
          {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        </View>
      </View>
    );
  }
}
