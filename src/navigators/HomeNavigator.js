import { createDrawerNavigator } from 'react-navigation';

import Settings from '../containers/Settings';
import Home from '../containers/Home';

export default createDrawerNavigator({
  Home,
  Settings,
});
