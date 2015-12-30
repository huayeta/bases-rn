// 添加了statusBarStyle
'use strict';

import React from 'react-native';
import NavtigationBar from 'react-native-navbar';

class NavBar extends React.Component {
    constructor() {
        super();
    }

    render(){
        let defaultConfigs={
            title:{
                title:'默认页面',
                tintColor:'#fff',
            },
            style:{
                'backgroundColor':'black',
            },
            statusBar:{
                'style':'light-content',
                'showAnimation':'slide',
                'hidden':false,
            },
            statusBarStyle:{
                'backgroundColor':'black',
            },
            navBarContainerStyle:{
                'paddingBottom':0
            }
        }
        for(let key of Object.keys(this.props)){
            Object.assign(defaultConfigs[key],this.props[key]);
        }
        return(
            <NavtigationBar
                {...defaultConfigs}
                 />
        )
    }
}



module.exports=NavBar;
