import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity,
  AsyncStorage,
  AlertIOS,
  PushNotificationIOS,
  StatusBar,
  Alert,
} from 'react-native';
import {Actions} from 'react-native-router-flux'

var Keychain = require('react-native-keychain');

class SplashScreen extends Component {
  constructor(props){
    super(props);
    // this.componentDidMount = this.componentDidMount.bind(this);
  }
 async componentWillMount(){
    var _that = this;
    setTimeout(function(){
      Actions.login();  
      }, 2000);
  }
  render(){
    return(
      <View style={styles.container} >
        <Text style={{fontSize : 48/2,color : 'rgb(242,240,209)',lineHeight : 60/2,textAlign : 'center',fontFamily : 'Lato-Regular'}}>GITHUB</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent : 'center',
    alignItems : 'center',
    marginTop:100/2,
  },
  image: {
    width: 237,
    height: 103,
  },
  text :{
    fontSize : 48/2,
    color : 'rgb(242,240,209)',
    lineHeight : 60/2,
    textAlign : 'center',
    fontFamily : 'Lato-Regular'
  } ,
  textcontainer : {
    marginTop : 100/2,
  }
});

module.exports = SplashScreen;