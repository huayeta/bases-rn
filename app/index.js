'use strict';

import React from 'react-native';
import NavBar from './navBar.js';

const {
    StyleSheet,
    Dimensions,
    View,
    Text,
    ScrollView,
    Image,
    TextInput,
    TouchableHighlight,
}=React;

const NAV_HEIGHT=59;

class Index extends React.Component {
    constructor() {
        super();
        this.form={};
    }
    changeText(name,val){
        this.form[name]=val;
        // this.forceUpdate();
    }
    submit(){
        let formDate='';
        for(let key of Object.keys(this.form)){
            formDate+=(key+'='+this.form[key]+'&');
        }
        fetch('http://www.53835.com/?m=member&c=index&a=login',{
            method:'POST',
            headers:{
                'Date-Type':'json',
            },
            body:formDate,
        }).then((res)=>res.json())
        .then((res)=>{
            console.log(res);
        })
    }
    render(){
        let {width,height}=Dimensions.get('window');
        let scrollView_height=height-NAV_HEIGHT;
        return(
            <View>
                <NavBar title={{'title':'会员登陆'}} />
                <ScrollView
                    style={[styles.scrollView,{height:scrollView_height}]}
                    >
                    <View style={styles.avatarView}>
                        <Image source={require('./images/login/avatar.jpg')} style={styles.avatar} />
                    </View>
                    <View style={styles.group}>
                        <View style={[styles.item,{'borderStyle':'solid','borderBottomWidth':1,'borderBottomColor':'#f0f0f0'}]}>
                            <View style={{width:40}}><Image source={require('./images/login/icon-user.png')} /></View>
                            <TextInput value={this.form.username} style={styles.textInput} onChangeText={this.changeText.bind(this,'username')}
                                placeholder="请输入您的登陆账号"
                                clearButtonMode="while-editing" />
                        </View>
                        <View style={styles.item}>
                            <View style={{width:40}}><Image source={require('./images/login/icon-password.png')} /></View>
                            <TextInput value={this.form.password} style={styles.textInput} onChangeText={this.changeText.bind(this,'password')}
                                placeholder="请输入您的登陆密码"
                                autoCorrect={false}
                                secureTextEntry={true}
                                clearButtonMode="while-editing"
                                enablesReturnKeyAutomatically={true}
                                onSubmitEditing={this.submit.bind(this)} />
                        </View>
                    </View>
                    <TouchableHighlight  style={styles.button} onPress={this.submit.bind(this)} underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>登陆</Text>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        )
    }
}

let styles=StyleSheet.create({
    scrollView:{
        'backgroundColor':'#f5f5f5',
    },
    avatarView:{
        'justifyContent':'center',
        'alignItems':'center',
        'paddingTop':20,
        'paddingBottom':20,
    },
    avatar:{
        'width':100,
        'height':100,
        'borderRadius':50,
    },
    group:{
        'borderRadius':5,
        'borderStyle':'solid',
        'borderWidth':1,
        'borderColor':'#f0f0f0',
        'backgroundColor':'#fff',
        'marginLeft':15,
        'marginRight':15,
        'marginBottom':15
    },
    item:{
        'paddingLeft':10,
        'paddingRight':10,
        'paddingTop':15,
        'paddingBottom':15,
        'justifyContent':'space-between',
        'alignItems':'center',
        'flexDirection':'row',
    },
    textInput:{
        'flex':1,
        'fontSize':14
    },
    buttonText:{
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button:{
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginLeft:15,
        marginRight:15,
    },
})

module.exports=Index;
