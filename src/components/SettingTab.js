import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const settingTabstyles = StyleSheet.create({
  settingTabView: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 1,
    backgroundColor: '#ffffff',
  },
});

export default (props) => {
  const { title, onPress } = props;
  return (
    <TouchableOpacity
      style={settingTabstyles.settingTabView}
      onPress={onPress}
    >
      <Text>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
