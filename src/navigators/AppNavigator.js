import { createSwitchNavigator } from 'react-navigation';


import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import AuthLoading from '../containers/AuthLoading';

export default createSwitchNavigator({
  App: HomeNavigator,
  Auth: AuthNavigator,
  AuthLoading,
}, {
  initialRouteName: 'AuthLoading',
});
