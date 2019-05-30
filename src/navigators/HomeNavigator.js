import { createStackNavigator } from 'react-navigation';

import Details from '../containers/Details';
import Home from '../containers/Home';

export default createStackNavigator({
	Home,
	Details,
});