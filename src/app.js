import { Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SplashScreen from './containers/splashScreen';
import AppConfig from './config/appConfig';
import SliderTest from './containers/SliderTest';

Text.defaultProps = {
  allowFontScaling: false,
};

TextInput.defaultProps = {
  fontFamily: AppConfig.fontFamily
};

export const Hebrew = StackNavigator({
  initialRouteName: { screen: SliderTest },
  splashScreen: { screen: SplashScreen },
  sliderTestScreen: { screen: SliderTest }
}, {
  headerMode: 'none'
});
