import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';

const btnStyle = StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: '#256eff',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: '#eeeeee',
    fontSize: 16,
  },
});

export default (props) => {
  const {
    title,
    style,
    textStyle,
    onPress,
    loading,
  } = props;

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([btnStyle.btn, style])}
      onPress={onPress}
    >
      {
        loading
          ? <ActivityIndicator size="small" color="#6cd4ff" />
          : <Text style={[btnStyle.text, textStyle]}>{title}</Text>
      }
    </TouchableOpacity>
  );
};
