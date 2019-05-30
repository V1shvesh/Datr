import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const settingTabstyles = StyleSheet.create({
  settingTabView: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    marginVertical: 1,
    backgroundColor: '#ffffff',
  },
});

export default () => (
  <View style={settingTabstyles.settingTabView}>
    <Text> Settings </Text>
  </View>
);
