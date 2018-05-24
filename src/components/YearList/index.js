import React, { Component } from 'react'
import { Text, ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native'

export class YearList extends Component {
  componentWillMount() {
    let names = [];
    for (let i = 0; i < 60; i++) {
      const yearStr = 1980 + i;
      names.push({ name: yearStr})
    }
    this.setState({ names: names });
  }
  state = {
    names: [
    ]
  };
  alertItemName = (item) => {
    this.props.onSelectYear(item.name);
  };

  componentDidMount() {
    setTimeout(() => {
      this.refScroll.scrollTo({x:0, y:(this.props.selectedIndex - 1980) * 30, animated: true})
    }, 100)
  }

  handleScroll = (event: Object) => {
    console.log(event.nativeEvent.contentOffset.y);
  };

  render() {
    return (
      <ScrollView
        ref={(ref) => {this.refScroll = ref;}}
        onScroll={this.handleScroll}
      >
        {
          this.state.names.map((item, index) => (
            <TouchableOpacity
              key = {index}
              style = {styles.container}
              onPress = {() => this.alertItemName(item)}>

              <Text style = {index === (this.props.selectedIndex - 1980) ? styles.textbold : styles.text}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    height: 30
  },
  text: {
    color: '#4f603c',
    fontSize: 20
  },
  textbold: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  }
});