
import React from 'react';
import { Toast,Root } from 'native-base';

//import MenuButton from '../components/MenuButton'
import BgImage from '../assets/background.jpg';
//import { Input,Button } from 'react-native-elements';
import { TextField } from 'react-native-materialui-textfield';
import axios from 'axios'
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class AuthLoading extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
      }
  
    componentWillMount() 
    {
    }
     
    _bootstrapAsync = async () => {

        const userToken = await AsyncStorage.getItem('userToken');
       // await AsyncStorage.multiGet(['userToken', "userEmail", "loggedIn"],(err, data) => {
    
    
         // let userToken = parseInt(data[0][1])
          //{
    
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App':'Auth');
            
             
      }

      
    
    

    
       

  
  

  render() {
    console.log(this.state)


    return (
        <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
      );
      
  }
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    
  backgroundContainer:{
   // flex:1,
    width:'100%',
    height:'100%',
    //justifyContent:"center",
    //alignItems:'center'
},
input: {
  color: 'white',
},
  containerWebview:{
    height: 350,
  },
  text: {
    fontSize: 30,
  }
});

