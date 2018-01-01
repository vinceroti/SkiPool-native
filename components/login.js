import React from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import structure from './styles/_structure';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[structure.center, structure.container]}>
        <FormLabel>Username</FormLabel>
        <FormInput/>
        <FormLabel>Password</FormLabel>
        <FormInput/>
      </View>
    );
  }
}
