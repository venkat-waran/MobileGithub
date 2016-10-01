/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {Actions, Scene, Modal, Schema, ActionConst} from 'react-native-router-flux';
import { Router, Reducer } from 'react-native-router-flux';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Frisbee from 'frisbee';
import { scenes } from './components/scenes';
//import { api } from 'api';

class mobileGithub extends Component {
  
  constructor(props) {
    super(props);
  }
  // async login() {
  //   var token = '032b9bd1059f99f1dcc1';
  //   var client_secret='bd37f78fac02347853b90b9ab01652e3b024e02a';
  //   var res = await fetch('https://github.com/login/oauth/authorize?client_id=032b9bd1059f99f1dcc1' , {
  //     method: 'GET',
  //     // headers: {
  //     //    'Accept': 'application/vnd.github.v3+json'
  //     // },
  //   })
  //   console.log(res)
  //   if(res.status == 200 ){
  //     Actions.
  //   }
  // }

  render() {
    return (
      <Router scenes={ scenes } />
    );
  }
}

const styles = StyleSheet.create({
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('mobileGithub', () => mobileGithub);
