import React from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Text } from 'react-native-elements';
import structure from './styles/_structure';
import loginStyle from './styles/_login';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[structure.center, structure.container]}>
        <Text h1 style={[loginStyle.h1, structure.alignCenter]}>SkiPool</Text>
        <View style={{width: '100%'}}>
          <FormLabel>Username</FormLabel>
          <FormInput/>
          <FormLabel>Password</FormLabel>
          <FormInput/>
          <Text onPress={() => Linking.openURL('http://google.com')} style={[structure.alignCenter, structure.marginTop, structure.anchor]}>Create an Account?</Text>
        </View>
      </View>
    );
  }
}
