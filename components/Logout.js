import React from 'react';
import { TouchableWithoutFeedback,Image,StyleSheet, Text, View ,WebView,ImageBackground,FlatList,TouchableOpacity,ScrollView,ActivityIndicator,AsyncStorage} from 'react-native';
//import MapView from 'react-native-maps';
//import {MapView}from 'expo'


//import MenuButton from '../components/MenuButton'
import BgImage from '../assets/background.jpg';
import { Input,Button } from 'react-native-elements';
import axios from 'axios';

//import { ScrollView } from 'react-native-gesture-handler';

import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';


export default class Logout extends React.Component {
    constructor(props){
        super(props)
        this.logout = this.logout.bind(this) 
      }
  
    
   componentWillMount(){

}
logout(){
  //_signOutAsync = async () => {
     AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  
    //let data  = {loggedIn: false}
   // this.props.dispatch(firstLaunchCheck(data))
    //try {
      //AsyncStorage.multiSet([['user_id', ""], ["pincode",""], ["loggedIn", ""]], (err, data) => {
      //});
    //} catch (error) {
      // Error saving data
    //}
    //const {navigate} = this.props.navigation;
    //navigate('Login')
  }
  logout(){
    //_signOutAsync = async () => {
       AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    
      //let data  = {loggedIn: false}
     // this.props.dispatch(firstLaunchCheck(data))
      //try {
        //AsyncStorage.multiSet([['user_id', ""], ["pincode",""], ["loggedIn", ""]], (err, data) => {
        //});
      //} catch (error) {
        // Error saving data
      //}
      //const {navigate} = this.props.navigation;
      //navigate('Login')
    }
  

  render() {
    console.log(this.state)
    

    return (
      
        
      <ImageBackground source={BgImage} style={styles.backgroundContainer}>
       

         <View style={{flex:1}}>


         <View style={{flex:0.7}}>


       


</View>

<View style={{flex:0.3}}>


   <TouchableWithoutFeedback
       onPress={() => {
        this.props.navigation.navigate('Update');
  }
}
        >

              <View style={{flexDirection: 'row',flex:1}}>
            <View style={{flex: 0.2,marginRight:0,paddingLeft:10}}>
            <Image source={require('../assets/ic_password.png')}
              resizeMode={'contain'}   /* <= changed  */
              style={{top: 30, height: 45,paddingRight:5,marginRight:10}} />
            </View>
        
           <View style={{flex:0.8,top: 40, height: 45,paddingRight:5,marginRight:10}}>
          <Text style={{fontSize:20}}>
              Change Password
           </Text>
           </View>
         </View>
          </TouchableWithoutFeedback>




          <TouchableWithoutFeedback
        onPress={this.logout}
        >

              <View style={{flexDirection: 'row',flex:1}}>
            <View style={{flex: 0.2,marginRight:0,paddingLeft:15}}>
            <Image source={require('../assets/ic_logout.png')}
              resizeMode={'contain'}   /* <= changed  */
              style={{top: 30, height: 45,paddingRight:5,marginRight:10}} />
            </View>
        
           <View style={{flex:0.8,top: 40, height: 45,paddingRight:5,marginRight:10}}>
          <Text style={{fontSize:20}}>
              Logout
           </Text>
           </View>
         </View>
          </TouchableWithoutFeedback>



       


         </View>
         </View>
      

       </ImageBackground>
      
      );
      
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
    
  backgroundContainer:{
    // flex:1,
     width:'100%',
     height:'66%',
     //justifyContent:"center",
     //alignItems:'center'
 
},
  containerWebview:{
    height: 350,
  },
  text: {
    fontSize: 30,
  }
});


