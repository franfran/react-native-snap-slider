/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SnapSlider from 'react-native-snap-slider';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<{}> {
  sliderOptions = [
      {value: 0, label: 'item A'},
      {value: 1, label: 'item B'},
      {value: 2, label: 'item C'},
      {value: 3, label: 'item D'}
  ];

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.slidingComplete = this.slidingComplete.bind(this);
  }

  getInitialState() {
      return {
          defaultItem: 2
      };
  }

  slidingComplete(itemSelected) {
      console.log("slidingComplete");
      console.log("item selected " + this.refs.slider.state.item);
      console.log("item selected(from callback)" + itemSelected);
      console.log("value " + this.sliderOptions[this.refs.slider.state.item].value);
  }

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                SnapSlider Example!
            </Text>
            <SnapSlider ref="slider" containerStyle={styles.snapsliderContainer} style={styles.snapslider}
                itemWrapperStyle={styles.snapsliderItemWrapper}
                itemStyle={styles.snapsliderItem}
                items={this.sliderOptions}
                labelPosition="bottom"
                defaultItem={this.state.defaultItem}
                onSlidingComplete={this.slidingComplete} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },

    snapsliderContainer: {
        borderWidth: 0,
        backgroundColor: 'transparent'
    },
    snapslider: {
        borderWidth: 0
    },
    snapsliderItemWrapper: {
        borderWidth: 0
    },
    snapsliderItem: {
        borderWidth: 0
    }
});
