import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from '_components/baseApp';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: App
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
