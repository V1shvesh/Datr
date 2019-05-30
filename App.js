import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import * as firebase from "firebase";

import AppNavigator from './src/navigators/AppNavigator';
import firebaseConfig from './firebaseConfig';

const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component {
  render() {
    firebase.initializeApp(firebaseConfig);
    return (
      <AppContainer/>
    );
  }
}