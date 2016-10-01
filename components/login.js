import React, { Component } from 'react';
import {Actions, Scene, Modal, Schema, ActionConst} from 'react-native-router-flux';
import Frisbee from 'frisbee';
import { api } from '../components/api';
import TextField from 'react-native-md-textinput';
import Button from 'apsl-react-native-button'
import NavigationBar from 'react-native-navbar';
var Keychain = require('react-native-keychain');
import Spinner from 'react-native-loading-spinner-overlay';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

class Login extends Component{

	constructor(props){
		super(props);
		this.state = {
			login:'',
			password:'',
      visible:false,
		};
	}
	async onLogin() {
      this.setState({visible:true});
	    var token = '032b9bd1059f99f1dcc1';
	    var client_secret='bd37f78fac02347853b90b9ab01652e3b024e02a';
	   	var username = this.state.login;
	   	var password = this.state.password;
        api.auth([username,password]);
	    var res = await api.put('/authorizations/clients/'+token, {
	      body: {"client_secret":client_secret,"scopes": ["repo", "user"], "note": "getting-started"}
	    });
      console.log(res)
	    if(res.status == 200){
              var repo = await api.get('/users/'+this.state.login+'/repos');
              console.log(res);
              repo = repo.body;
              var repositry_name=[];
              for(var i=0;i<repo.length ; i++){
               var repositry = repo[i];
                repositry_name[i] = repositry["name"]
              } 
              console.log(repositry_name)
              this.setState({visible:false});
              Actions.Repository({repositry_name:repositry_name,username:username});
            }  
	    else{
        this.setState({visible:false});
	    	Alert.alert('Please check login credentials')
	    }
  	}
	render(){
		return (
			<View style={{flex:1,marginTop:100}}>
        <Spinner visible={this.state.visible} overlayColor='rgba(0,0,0,0.50)' />
	          <Text style={styles.usernameinput}>UserName</Text>
	            <View style={styles.username}>
	              <TextField
	                highlightColor='rgb(36,36,36)'
	                labelColor='rgb(36,36,36)'
	                value={ this.state.login }
	                inputStyle = {{textAlign : 'center'}}
	                autoCapitalize='none'
	                height={50}
	                onChangeText={ (login) => this.setState({ login: login }) } />
	              </View>
	          <Text style={styles.passwordinput}>Password</Text>
	            <View style={styles.username}>
	              <TextField
	                highlightColor='rgb(36,36,36)'
	                labelColor='black'
	                inputStyle = {{textAlign : 'center'}}
	                secureTextEntry={true}
	                height={50}
	                value={ this.state.password }
	                onChangeText={ (password) => this.setState({ password: password }) } />
	            </View>
		        <View style = {{ justifyContent : 'flex-end' ,padding:30,marginTop:50}}> 
		          <Button style={styles.box} textStyle={{fontSize: 18 , color: 'rgb(204,0,0)' }} onPress={ () => this.onLogin() }>
		            Log In
		          </Button>
		        </View>
      		</View>
			)
	}
}
const styles = StyleSheet.create({
  cont:{
    flex:1,
  },
  image: {
  width: 474/2,
  height: 205/2
  },
  forgotpassword:{
    textAlign:'center',
    color:'rgb(36,36,36)',
    marginTop:24,
    color:'rgb(204,0,0)',
    fontFamily : 'Lato-Regular',
    fontSize : 17
  },
  padd:{
    padding:15,
    flex:1
  },
  usernameinput:{
    textAlign:'center',
    color:'rgb(36,36,36)',
    marginTop:10,
    fontFamily : 'Lato-Regular',
    fontSize : 17
  },
  passwordinput:{
    textAlign:'center',
    color:'rgb(36,36,36)',
    marginTop:24,
    fontFamily : 'Lato-Regular',
    fontSize : 17
  },
  username:{
    marginTop:-35
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  textinput:{
    height: 30,
    borderColor: 'gray',
    borderWidth: 1
  },
  button:{
    color:'red'
  },
   centerText:{
    textAlign: 'center',
  },
    box: {
      flex:1,
      backgroundColor: 'grey',
      borderColor: 'white',
      borderRadius: 20,
      shadowColor: 'gray',
      shadowOpacity: 0.8,
      shadowRadius: 4,
      shadowOffset: {
      height: 2,
      width: 0
    }
  }
});

module.exports=Login;