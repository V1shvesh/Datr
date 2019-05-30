import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

const settingsStyle = StyleSheet.create({
  settingsView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default class extends Component {

  static navigationOptions() {
		return {
			title: 'Settings',
		};
	}

  render() {
    return (
      <View style={settingsStyle.settingsView}>
      </View>
    );
  }
}