import AsyncStorage from '@react-native-community/async-storage';

export async function getUserToken() {
  try {
    return await AsyncStorage.getItem('userToken');
  } catch(e) {
    console.error(e);
    return false;
  }
}

export async function setUserToken(value) {
  try {
    return await AsyncStorage.setItem('userToken', value);
  } catch(e) {
    console.error(e);
    return false;
  }
}

export async function removeUserToken() {
  return await AsyncStorage.removeItem('userToken');
}