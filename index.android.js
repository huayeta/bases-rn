/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React,{Component} from 'react-native';
const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

class yst extends Component {
    constructor() {
        super();
    }
    render(){
        return (
            <View>
                <Text>1111</Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('yst', () => yst);
