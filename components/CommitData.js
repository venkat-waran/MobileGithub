import React, { Component } from 'react';
import {Actions, Scene, Modal, Schema, ActionConst} from 'react-native-router-flux';
import Frisbee from 'frisbee';
import { api } from '../components/api';
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

class CommitData extends Component{
	constructor(props){
		super(props);
     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		 this.state = {
      username:props.username,
      dataSource: ds.cloneWithRows(props.commit_data),
	    };
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
          <ListView
            style={styles.container}
            dataSource={this.state.dataSource}
            renderRow={(rowData) =><View style={{flex:1}}><Text style={{fontSize:16,marginTop:5,color:'black'}}>{rowData}</Text></View>}
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
    marginBottom:0
  }
});

module.exports=CommitData;