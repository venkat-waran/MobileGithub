import React, { Component } from 'react';
import {Actions, Scene, Modal, Schema, ActionConst} from 'react-native-router-flux';
import Login from './login';
import Repository from './Repository';
import SplashScreen from './splashscreen';
import CommitData from './CommitData';
var ReactNative = require('react-native');
var {
  View,
  Text,
  Image
} = ReactNative;

export let scenes = Actions.create(
  <Scene key='root'>
  	<Scene key='splashscreen' component={SplashScreen} hideNavBar/>
    <Scene key='login' component={Login} hideNavBar/>
    <Scene key='Repository' 
    	component={Repository} 
    	hideNavBar={false} 
      titleStyle = {{ color : 'white'}}
    	navigationBarStyle ={{ backgroundColor : 'rgb(140,13,50)', height: 74}}
    	title='Repository'
    	hideBackImage/>
    <Scene key='commit_data' 
      component={CommitData} 
      hideNavBar={false}
      titleStyle = {{ color : 'white'}}
      leftButtonIconStyle={{ width: 10, height: 20 }}
      backTitle = "Back" 
      backButtonImage = {require('./backIcon.png')}
      backButtonTextStyle  = {{color : 'white' ,marginLeft : 6}}
      navigationBarStyle ={{ backgroundColor : 'rgb(140,13,50)', height: 74}}
      title='Commits'
      hideBackImage/>
  </Scene>
);