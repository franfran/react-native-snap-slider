/**
 * Sample Snap Slider App
 */
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
    slidingComplete() {
        console.log("slidingComplete");
        console.log("item selected " + this.refs.slider.state.item);
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
        borderWidth: 0,
        backgroundColor: 'transparent',
    },
    snapslider: {
        borderWidth: 0,
    },
    snapsliderItemWrapper: {
        borderWidth: 0,
    },
    snapsliderItem: {
        borderWidth: 0,
    }
});
AppRegistry.registerComponent('snapslider', () => snapslider);
