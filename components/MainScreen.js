import React from 'react';
import { StyleSheet, Text, View ,WebView,ImageBackground} from 'react-native';
//import MapView from 'react-native-maps';
//import {MapView}from 'expo'

//import MenuButton from '../components/MenuButton'
import BgImage from '../assets/background.jpg';
import { Input,Button } from 'react-native-elements';



export default class LinksScreen extends React.Component {
  render() {

    return (
      
      <ImageBackground source={BgImage} style={styles.backgroundContainer}>

      <View style={styles.container}>
        <View style={{paddingTop:50,flex:1,alignItems:'center'}}>
        <Text style={{color:'white',fontSize:30}}>
          PLAN  ME  PERFECT
        </Text>
        <Text style={{color:'#23e6a5',fontSize:20}}>
          Business App 
        </Text>
        
        </View>

        <View style={{
  flex:1,
  //marginBottom:240
  //height:20
}}
   >
  
<Button

title="LOGIN"
containerStyle={{marginLeft:90,marginRight:90,marginTop:120 
//  marginBottom:120
 // height:60,
  //flexDirection: 'row',
  //flex:1,
  //justifyContent: 'center',
  //alignItems: 'center',
  //marginBottom:40,
  //width:250,
  //borderWidth:8,
  //borderBottomLeftRadius:21,
  //borderBottomWidth:4,
  //borderRightColor:'white',
  //borderRadius:30,
  //borderBottomStartRadius:21,
  
  //borderColor:'white',
 // borderTopRightRadius:5,
//  marginTop:40
}}
  buttonStyle={{borderRadius:30,backgroundColor:'#23e6a5',
  height:65
}}
  onPress={() => {
            this.props.navigation.navigate('Login') ;
       }
    }
/> 


        
     
<Button
title="SIGN UP" 
containerStyle={{marginLeft:90,marginRight:90,marginTop:90,
//marginBottom:110 ,
//marginTop:50,
//margin:200,
  //height:60,
  //flexDirection: 'row',
  //justifyContent: 'center',
  //alignItems: 'center',
  
  //marginEnd:150,
  //width:250,
  borderWidth:1,
  //borderBottomLeftRadius:21,
  //borderBottomWidth:4,
  //borderRightColor:'white',
  borderRadius:30,
  //borderBottomStartRadius:21,
  
  borderColor:'white',
 // borderTopRightRadius:5,
//  marginTop:40
}}
  buttonStyle={{borderRadius:30,backgroundColor:'transparent',height:60}}
  onPress={() => {
            this.props.navigation.navigate('signup');
      }
    }
/>
</View>
<View style={{
  marginTop:289,flex:1,alignItems:'center'}}>
        <Text style={{color:'white',fontSize:17}}>
          I agree With Terms and Condition
        </Text>
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
    flex:1,
    width:null,
    height:null,
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
