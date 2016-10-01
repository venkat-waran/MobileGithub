import React, { Component } from 'react';
import {Actions, Scene, Modal, Schema, ActionConst} from 'react-native-router-flux';
import Frisbee from 'frisbee';
import { api } from '../components/api';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  LinkingIOS,
  TouchableOpacity,
  WebView,
  ListView,
  Linking,
  ScrollView,
  Alert,
} from 'react-native';

class Repository extends Component{
	constructor(props){
		super(props);
     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		 this.state = {
      username:props.username,
      dataSource: ds.cloneWithRows(props.repositry_name),
      visible:false,
	    };
  	}
 async commit(repositry_name){
    this.setState({visible:true})
    var commits_result = await api.get("/repos/"+this.state.username+"/"+repositry_name+"/commits");
    commits_result = commits_result["body"]
    var commit_data = [];
    for (var i=0; (i < commits_result.length && i <=10); i ++){
     commit_data[i] = commits_result[i].commit.message;
     //console.log("Commit message "+commit_data["commit"]["message"])
    }
    console.log(commit_data);
    this.setState({visible:false})
    Actions.commit_data({commit_data:commit_data});
  }

  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
      return (
        <View
          key={`${sectionID}-${rowID}`}
          style={{
            height: adjacentRowHighlighted ? 8 : 1,
            backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
          }}
        />
      );
  }

	render(){
		return (
      <View style={{flex:1}}>
        <ScrollView>
          <Spinner visible={this.state.visible} overlayColor='rgba(0,0,0,0.50)' />
            <ListView
              style={styles.container}
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <TouchableOpacity onPress={()=> this.commit(rowData)}><View style={{flex:1}}><Text style={{fontSize:20,color:'black'}}>{rowData}</Text></View></TouchableOpacity>}
              renderSeparator={this._renderSeparator}
            />
        </ScrollView>
      </View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 0,
    marginTop:80,
    marginBottom:100
  }
});

module.exports=Repository;