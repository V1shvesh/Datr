import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
} from 'react-native';
import * as firebase from 'firebase';

export default class extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;

    firebase
      .auth()
      .onAuthStateChanged(user => navigation.navigate(user ? 'App' : 'Auth'));
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="small" color="#256eff" />
      </View>
    );
  }
}
