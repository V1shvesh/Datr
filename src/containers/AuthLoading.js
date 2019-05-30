import React, { Component } from "react";
import {
	Text,
	View,
} from 'react-native';
import * as firebase from "firebase";

export default class AuthLoading extends Component {
  constructor(props) {
    super(props);
    firebase
      .auth()
      .onAuthStateChanged(user => this.props.navigation.navigate(user ? 'App' : 'Auth'))
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading...</Text>
      </View>
    );
  }
}