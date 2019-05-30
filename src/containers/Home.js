import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 60,
    marginBottom: 20,
    color: '#000',
  },
});

export default class extends Component {
  static navigationOptions() {
    return {
      title: 'Home',
    };
  }

  render() {
    return (
      <View style={homeStyles.container}>
        <Text
          style={homeStyles.title}
        >
          Datr
        </Text>
      </View>
    );
  }
}
