# react-native-snap-slider
Provide snap control for Slider

[![npm version](http://img.shields.io/npm/v/react-native-snap-slider.svg?style=flat-square)](https://npmjs.org/package/react-native-snap-slider "View this project on npm")
[![npm downloads](http://img.shields.io/npm/dm/react-native-snap-slider.svg?style=flat-square)](https://npmjs.org/package/react-native-snap-slider "View this project on npm")
[![npm licence](http://img.shields.io/npm/l/react-native-snap-slider.svg?style=flat-square)](https://npmjs.org/package/react-native-snap-slider "View this project on npm")


Originally, this project was created to add snap control for SliderIOS.

The newly updated Slider component already provide similar function by the ["step" Props](https://facebook.github.io/react-native/docs/slider.html#content)

This component can have different "step" values and labels.


![Demo](https://github.com/franfran/react-native-snap-slider/wiki/images/screenshot.gif)

## Install

Install the package:

```bash
$ npm i react-native-snap-slider --save
```

## Usage

```javascript
'use strict';

var React = require('react-native');
var SnapSlider = require('react-native-snap-slider');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} = React;

var snapslider = React.createClass({
    sliderOptions: [
        {value: 0, label: 'item A'},
        {value: 1, label: 'item B'},
        {value: 2, label: 'item C'},
        {value: 3, label: 'item D'},
    ],
    getInitialState() {
        return {
            defaultItem: 2,
        };
    },
    slidingComplete(itemSelected) {
        console.log("slidingComplete");
        console.log("item selected " + this.refs.slider.state.item);
        console.log("item selected(from callback)" + itemSelected);
        console.log("value " + this.sliderOptions[this.refs.slider.state.item].value);
    },
    render: function() {
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
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    snapsliderContainer: {
    },
    snapslider: {
    },
    snapsliderItemWrapper: {
    },
    snapsliderItem: {
    }
});
AppRegistry.registerComponent('snapslider', () => snapslider);
```

## Props

Prop                  | Type     | Optional | Default                   | Description
--------------------- | -------- | -------- | ------------------------- | -----------
containerStyle        | [style](http://facebook.github.io/react-native/docs/view.html#style)    | Yes      |                           | The style for the slider container
style                 | [style](http://facebook.github.io/react-native/docs/view.html#style)    | Yes      |                           | Style for the slider, append to the [SliderIOS](https://facebook.github.io/react-native/docs/sliderios.html)  style
itemWrapperStyle      | [style](http://facebook.github.io/react-native/docs/view.html#style)    | Yes      |                           | Style for the items label container
itemStyle            | [style](http://facebook.github.io/react-native/docs/view.html#style)    | Yes      |                           | Style for the individual item
items    | Array    | No      |                           | Item list, in JSON Array [{value: 0, label: 'Item A'}...{}]
defaultItem    | Number    | No      |                    | The default item in slider, first item is 0
labelPosition    | String    | "bottom"      |                    | The label position, "bottom" or "top"

## Example

Running the example:

```bash
$ cd Example/snapslider
$ npm install
```

Open the ios/snapslider.xcodeproj with Xcode

## License

MIT.
