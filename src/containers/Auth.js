import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import * as firebase from 'firebase';

import Button from '../components/Button';

const authStyles = StyleSheet.create({
  authView: {
    flex: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'flex-start',
    paddingTop: 100,
    paddingHorizontal: 40,
  },
  authInput: {
    width: 320,
    height: 40,
    marginBottom: 40,
    paddingLeft: 10,
    fontSize: 18,
    backgroundColor: '#ccc9',
    borderRadius: 5,
  },
  authBtn: {
    alignSelf: 'center',
    width: 150,
    marginVertical: 15,
  },
});

export default class extends Component {
  static navigationOptions() {
    return {
      title: 'LogIn | SignUp',
    };
  }

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      logInLoading: false,
      signInLoading: false,
    };
    this.logInAction = this.logInAction.bind(this);
    this.signInAction = this.signInAction.bind(this);
  }

  logInAction() {
    const { email, password } = this.state;

    if (email === '' || password === '') {
      // TODO: Handle this case
      console.warn('Empty');
      return;
    }

    this.setState({ logInLoading: true }, () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => console.warn(error));
    });
  }

  signInAction() {
    const { email, password } = this.state;
    if (email === '' || password === '') {
      // TODO: Handle this case
      console.warn('Empty');
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => console.warn(firebase.auth().currentUser))
      .catch((error) => {
        console.warn(error);
      });
  }

  render() {
    const {
      logInLoading,
      signInLoading,
    } = this.state;
    return (
      <View
        style={authStyles.authView}
      >
        <Text>Email</Text>
        <TextInput
          style={authStyles.authInput}
          onChangeText={email => this.setState({ email })}
        />
        <Text>Password</Text>
        <TextInput
          style={authStyles.authInput}
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={password => this.setState({ password })}
        />
        <Button
          title="Log In"
          loading={logInLoading}
          style={authStyles.authBtn}
          onPress={this.logInAction}
        />
        <Button
          title="Sign In"
          loading={signInLoading}
          style={authStyles.authBtn}
          onPress={this.signInAction}
        />
      </View>
    );
  }
}
