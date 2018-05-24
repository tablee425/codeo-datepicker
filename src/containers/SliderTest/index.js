import React from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MultiSlider, CalendarPicker, NewPicker } from 'AppComponents'
import moment from 'moment';

class SliderTest extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      sliderOneChanging: false,
      sliderOneValue: [2],
      multiSliderValue: [1, 4],
      showNewPicker: false,
      pickedDay: moment().date(),
      pickedMonth: moment().month(),
      pickedYear: moment().year(),
    };
    this.prePickDay = moment().date();
    this.prePickMonth = moment().month();
    this.prePickYear = moment().year();
  }

  componentDidMount() {
  }

  sliderOneValuesChangeStart = () => {
    this.setState({
      sliderOneChanging: true,
    });
  };

  sliderOneValuesChange = (values) => {
    let newValues = [0];
    newValues[0] = values[0];
    this.setState({
      sliderOneValue: newValues,
    });
  };

  sliderOneValuesChangeFinish = () => {
    this.setState({
      sliderOneChanging: false,
    });
  };

  multiSliderValuesChange = (values) => {
    this.setState({
      multiSliderValue: values,
    });
  };

  onTest = () => {
    this.setState({
      showNewPicker: true
    });
  };

  onOK = () => {
    this.setState({
      showNewPicker: false,
      pickedDay: this.prePickDay,
      pickedMonth: this.prePickMonth,
      pickedYear: this.prePickYear
    });
  };

  onCancel = () => {
    this.setState({
      showNewPicker: false
    });
  };

  pickedDay = (day, month, year) => {
    this.prePickDay = day;
    this.prePickMonth = month;
    this.prePickYear = year;
  };

  render() {
    const {
      showNewPicker,
      pickedDay,
      pickedMonth,
      pickedYear
    } = this.state;
    let displayTime = `${pickedYear}.${pickedMonth + 1}.${pickedDay}`;
    return (
      <View style={styles.container}>
        {
          !showNewPicker &&
            <TouchableOpacity onPress={this.onTest}>
              <Text>
                Picked Day - {displayTime}
              </Text>
              <Text>
                DatePicker and MultiSlider Test
              </Text>
            </TouchableOpacity>
        }
        {
          showNewPicker &&
            <NewPicker
              onOK={this.onOK}
              onCancel={this.onCancel}
              pickedDay={this.pickedDay}
              initialDay={pickedDay}
              initialMonth={pickedMonth}
              initialYear={pickedYear}
            />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliders: {
    margin: 20,
    width: 280,
  },
  text: {
    alignSelf: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
  },
  sliderOne: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default SliderTest;
