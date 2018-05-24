import React from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';

class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <View/>
    );
  }
}

export default SplashScreen;
