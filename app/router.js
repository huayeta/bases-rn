'use strict';

import React from 'react-native';
import Index from './index.js';
const renderScene=(router,navigator)=>{
    let Component=null;
    switch (router.name) {
        case 'index':
            Component=Index;
            break;
        default:
            Component=Index;
    }
    return <Component natigator={navigator} />
}

module.exports=renderScene;
