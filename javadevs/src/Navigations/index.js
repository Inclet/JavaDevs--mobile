import Welcome from '../Welcome Screen';
import { createAppContainer, createStackNavigator } from 'react-navigation';

const firstPages = createStackNavigator(
  {
    welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null,
      }
    }
  },
  {
    initialRouteName: 'welcome'
  }
);

export default createAppContainer(firstPages);
