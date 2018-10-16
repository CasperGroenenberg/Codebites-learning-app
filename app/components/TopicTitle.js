import React, { Component } from 'react';
import { Font } from 'expo';
import { Actions } from 'react-native-router-flux';
import { Text, View,  TouchableNativeFeedback, TouchableOpacity, StyleSheet } from 'react-native';

export default class TopicTitle extends Component {
    state = {
        fontLoaded: false,
    }

    componentDidMount() {
        this.loadFonts();
    }

    async loadFonts(){
        try {
          await Font.loadAsync({
            'montserrat-regular': require('../assets/fonts/Montserrat-Regular.ttf'),
            'montserrat-light': require('../assets/fonts/Montserrat-Light.ttf'),
            'montserrat-medium': require('../assets/fonts/Montserrat-Medium.ttf'),
            'montserrat-semibold': require('../assets/fonts/Montserrat-SemiBold.ttf')
          });
        }
        catch(e) {
          Log.error(e);
        }
        finally {
          this.setState({fontLoaded: true});
        }
    }

    render() {
        return (
            <View style={styles.item}>
               { this.state.fontLoaded ? (
                    <TouchableOpacity onPress={() => Actions.domainview({ topic: this.props.topic }) }>
                        <Text style={styles.titleText}>{this.props.topic.title}</Text>
                        <Text style={styles.titleInfo}>{this.props.topic.tutorialcount} tutorials</Text>
                    </TouchableOpacity>
                ) : null }
            </View>
          )
    }
};


    const styles = StyleSheet.create({
        item: {
            borderBottomColor: '#dedede',
            borderBottomWidth: 1
        },
        titleText: {
            fontFamily: 'Roboto',
            fontSize: 27,
            color: '#2395E8'
        },
        titleInfo: {
            fontFamily: 'montserrat-regular',
            fontSize: 17,
            color: '#9e9e9e'
        }
    });
  
