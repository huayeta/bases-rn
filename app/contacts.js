'use strict';

import React from 'react-native';
import Contacts from 'react-native-contacts';
const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} = React;

class ContactsCom extends React.Component {
    constructor() {
        super();
        this.contacts=new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }
    componentDidMount(){
        console.log(Contacts);
        Contacts.getAll((err,contacts)=>{
            if(err && err.type=='permissionDenied'){
                console.log(err);
            }else{
                console.log(contacts);
                this.contacts=this.contacts.cloneWithRows(contacts);
                this.forceUpdate();
            }
        })

        // let newPerson={
        //     familyName:'朱',
        //     givenName:'辉',
        //     phoneNumbers:[{
        //         label:'mobile',
        //         number:'18703620195'
        //     }]
        // }
        // Contacts.addContact(newPerson,(err)=>{
        //
        // })
    }
    render(){
        return (
            <ListView
              dataSource={this.contacts}
              renderRow={this.renderItem.bind(this)}
            />
        )
    }
    renderItem(item){
        return(
            <Text style={styles.item}>{item.familyName}{item.givenName}</Text>
        )
    }
}

let styles=StyleSheet.create({
    item:{
        'lineHeight':30,
        'height':30,
        'marginLeft':15,
        'marginRight':15,
        'borderBottomWidth':5,
        'borderBottomColor':'#000000',
        'borderStyle':'solid'
    }
});

module.exports=ContactsCom;
