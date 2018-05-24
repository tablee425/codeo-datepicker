import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default {
  width,
  height,
  statusBarHeight: 20,
  navBarHeight: 80,
  heightOutBar: (height - 127),
  tabBar: {
    height: 60,
    tabLabelMarginBottom: 7
  },
  calendarWidth: width - 30,
  calendarHeight: 375
};
