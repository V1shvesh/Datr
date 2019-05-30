import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';

import SettingTab from '../components/SettingTab';

const settingsStyle = StyleSheet.create({
  settingsView: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
    backgroundColor: '#cccccc',
  },
});

export default class extends Component {
  static navigationOptions() {
    return {
      title: 'Settings',
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={settingsStyle.settingsView}>
        <SettingTab title="Account" />
        <SettingTab title="Notifications" />
        <SettingTab
          title="Log Out"
          onPress={() => {
            firebase
              .auth()
              .signOut()
              .then(() => navigation.navigate('AuthLoading'));
          }}
        />
      </View>
    );
  }
}
