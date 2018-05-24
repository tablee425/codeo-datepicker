import React from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { MultiSlider, CalendarPicker, YearList} from 'AppComponents'
import moment from 'moment';

export class NewPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      year: "",
      month: "",
      day: "",
      weekday: "",
      sliderOneChanging: false,
      sliderOneValue: [2],
      showDropDown: false,
    };
    this.weekdays = ["שבת", "שישי", "חמישי", "רביעי", "שלישי", "שני", "ראשון"];
    this.months = [
      'דצמבר',
      'נובמבר',
      'אוקטובר',
      'ספטמבר',
      'אוגוסט',
      'יולי',
      'יוני',
      'מאי',
      'אפריל',
      'מרץ',
      'פברואר',
      'ינואר'
    ];
  }

  componentDidMount() {
    this.onDateChange(moment());
    this.refCalPicker.handleOnPressDay(this.props.initialDay);
  }

  onDateChange = date => {
    const year = date.year();
    const month = this.months[date.month()];
    const day = date.date();
    const weekday = this.weekdays[date.day()];
    this.setState({
      selectedStartDate: date,
      year: year,
      month: month,
      day: day,
      weekday: weekday
    });
  };

  onBackYear = () => {
    this.refCalPicker.onBackYear();
    this.setState({ year: this.state.year - 1 })
  };

  onNextYear = () => {
    this.refCalPicker.onNextYear();
    this.setState({ year: this.state.year + 1 })
  };

  handleOnPressPrevious = (year) => {
    this.setState({ year: year })
  };

  handleOnPressNext = (year) => {
    this.setState({ year: year })
  };

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

  onDateDropbox = () => {
    if (this.state.showDropDown) {
      this.setState({ showDropDown: false })
    } else {
      this.setState({ showDropDown: true });
    }
  };

  onSelectYear = (year) => {
    this.refCalPicker.onSetYear(year);
    this.setState({ showDropDown: false, year: year });
  };

  renderRow = (rowData) => {
    const { year } = this.state;
    return (
      <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 30 }} onPress={() => { this.onSelectYear(rowData.name); }}>
        {
          year === rowData.name &&
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
            { rowData.name }
          </Text>
        }
        {
          year !== rowData.name &&
            <Text style={{ fontSize: 20 }}>
              { rowData.name }
            </Text>
        }
      </TouchableOpacity>
    );
  };

  pickedDay = (day, month, year) => {
    this.props.pickedDay(day, month, year);
  };

  render() {
    const { selectedStartDate, year, month, day, weekday, showDropDown } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View>
        <View style={{ backgroundColor: "#add31e", height: 120 }}>
          <Text style={{ color: 'white', fontSize: 23, fontWeight: 'bold', position: 'absolute', bottom: 10, right: 20 }}>
            {weekday}, {day} ב{month}
          </Text>
          <View
            style={{
              position: 'absolute',
              bottom: 50,
              width: Dimensions.get('window').width - 40,
              marginLeft: 20,
              height: 35,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <TouchableOpacity
              style={{
                width: 28,
                height: 35,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={this.onBackYear}
            >
              <Image source={require('./../../assets/back.png')} style={{ width: 12, height: 21 }} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={this.onDateDropbox}>
              <Image source={require('./../../assets/dropdown.png')} style={{ width: 26, height: 13, marginTop: 10 }} resizeMode="stretch" />
              <Text style={{ color: '#eee', fontSize: 22, fontWeight: 'bold', marginLeft: 5 }}>
                { year }
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 28,
                height: 35,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={this.onNextYear}
            >
              <Image source={require('./../../assets/next.png')} style={{ width: 12, height: 21 }} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 20 }}/>
        <CalendarPicker
          ref={(ref) => { this.refCalPicker = ref; }}
          onDateChange={this.onDateChange}
          initialDate={moment(`${this.props.initialYear}/${this.props.initialMonth+1}/${this.props.initialDay}`, 'jYYYY/jM/jD')}
          selectedStartDate={moment(`${this.props.initialYear}/${this.props.initialMonth+1}/${this.props.initialDay}`, 'jYYYY/jM/jD')}
          handleOnPressPrevious={this.handleOnPressPrevious}
          handleOnPressNext={this.handleOnPressNext}
          pickedDay={this.pickedDay}
        />

        <View style={{ flex: 1 }}>
          <MultiSlider
            values={[0, 7]}
            sliderLength={Dimensions.get('window').width - 100}
            min={0}
            max={7}
            step={1}
            allowOverlap
            snapped
            startTime={19}
          />
          <View style={{ flexDirection: 'row', marginTop: 50 }}>
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => { this.props.onCancel(); }}>
              <Text>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => { this.props.onOK(); }}>
              <Text>
                Ok
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {
          showDropDown &&
            <View style={{
              position: 'absolute',
              width: 150,
              height: 200,
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: 'gray',
              marginLeft: Dimensions.get('window').width / 2 - 75,
              marginTop: 80
            }}
            >
              <YearList
                onSelectYear={this.onSelectYear}
                selectedIndex={year}
              />
            </View>
        }
      </View>
    );
  }
}

