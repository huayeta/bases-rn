/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
import renderScene from './app/router.js';
const {
  AppRegistry,
  Navigator
} = React;

class yst extends React.Component {
    constructor() {
        super();
    }
    configureScene(){
        return Navigator.SceneConfigs.FloatFromRight;
    }
    render(){
        return (
            <Navigator
                initialRoute={{name:'index'}}
                configureScene={this.configureScene.bind(this)}
                renderScene={renderScene}
                />
        )
    }
}

AppRegistry.registerComponent('yst', () => yst);
