import React from 'react';
import { StyleSheet, Text, View ,WebView,ImageBackground,AsyncStorage,ActivityIndicator} from 'react-native';
//import MapView from 'react-native-maps';
//import {MapView}from 'expo'


//import MenuButton from '../components/MenuButton'
import BgImage from '../assets/background.jpg';
import { Input,Button } from 'react-native-elements';
import axios from 'axios'

import { TextField } from 'react-native-materialui-textfield'; 
import { Toast,Root } from 'native-base';
//import Toast, {DURATION} from 'react-native-easy-toast'
import Spinner from '../components/Spinner'
   


 
export default class LinksScreen extends React.Component {

  _isMounted = false;
  constructor(props) {
    super(props);

   // this.blur = this.blur.bind(this);
   // this.focus = this.focus.bind(this);
   this.login = this.login.bind(this);
    //this.change = this.change.bind(this);
  // this.renderButton=this.renderButton.bind(this);  
    this.state = {
      email   : '',
      password: '',
      isLoading: false,
      //hidePassword: true, 
      //emailRequired: false,
     // passwordRequired: false,
      isAppReady: false,
      //data:{},
      loggedIn:false
    }
  }   

  

  componentDidMount(){
   
    this._isMounted = true;
  }  
  
  componentWillUnmount() {
    this._isMounted = false;
  }
    //const {navigate} = this.props.navigation;
   // AsyncStorage.multiGet(['user_id', "pincode", "loggedIn"], (err, data) => {
     // this.setState({isAppReady: true})
     // if(data[0][1] != '' && data[0][1] != undefined && data[0][1] != null)
     // {
       // let user_id = parseInt(data[0][1])
       // let token = parseInt(data[1][1])
        //this.props.dispatch(firstLaunchCheck({"loggedIn": true,"token": token, "user_id": user_id}))
       // this.setState({"loggedIn": true,"pincode": token, "user_id": user_id})
       // navigate('Home')
          
     // }
   // });

 // }

   login(){
// <ActivityIndicator />
    if(this.state.email == ''){
      Toast.show({
              text: 'Enter Username!',
              buttonText: 'Okay',
              //type: "danger"
              style: {
                backgroundColor: "red"
               }
       })
      return
    }
    else if(this.state.password == ''){
      Toast.show({
              text: 'Enter Password!',
              buttonText: 'Okay',
              position: 'bottom',
    duration:5000,
             // type: "danger"
             style: {
               backgroundColor: "red"
             }
       })
      return
    }
   
     else 
   this.setState({isLoading: true})
   


   const dataForm=new FormData();

         
   dataForm.append('user_email',this.state.email);
   dataForm.append('user_password',this.state.password);
   //dataForm.append('user_token', '25d55ad283aa400af464c76d713c07ad');

   //dataForm.append('client_id', 'thisAppsClientID');
   
   axios.post('https://eventventure.pk/wedding_service_api/api/update_password',dataForm)
   .then(res => {
     let result = res.data;
     console.log(result);
     if(!result.error){
      this.setState({isLoading: false,email:'',
      password: '',
      })
      const {navigate} = this.props.navigation;
      Toast.show({
        text: result.msg,
        buttonText: 'Okay',
        type: "success"
         });
        // <ActivityIndicator />
      navigate('Home')

     
        }  
        else 
        {
          this.setState({isLoading: false})
          Toast.show({
            text: result.msg,
            buttonText: 'Okay',
            type: "danger"
             })
          
        }
      })
   
   .catch(e => { 
     console.log(e.response); 
   });
   }


  
  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
      
    }

    //return (
      
     // <Button
//onPress={this.login} 
//title="Login" 
//containerStyle={{marginLeft:70,marginRight:70,
  //marginBottom:200 
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
//}}
  //buttonStyle={{borderRadius:30,backgroundColor:'#23e6a5',
  //height:60
//}}
  //onPress={() => {
    //        this.props.navigation.navigate('ProductDetails');
      // }
   // }
///> 

  //  );
  //}

  }
  render() {
    //console.log(this.state)

    return (
      
      this.state.isLoading?
      <View style={{flex:1,marginTop:50,justifyContent:'center',alignItems:'center'}}>

       <ActivityIndicator />

      </View>
      
      
      :
       
      
      
      <ImageBackground source={BgImage} style={styles.backgroundContainer}>

        <View 
        style={{
          //paddingTop:50,
          flex:1,
          //alignItems:'center'
        }}
          >
          <View style={{flex:0.1,marginTop:50,alignItems:'center'}}>
        <Text style={{color:'white',fontSize:30}}>
          PLAN  ME  PERFECT
        </Text>
        <Text style={{color:'#23e6a5',fontSize:20}}>
          Business App 
        </Text>
        <Text style={{color:'white',fontSize:30,marginTop:10}}>
         UPDATE PASSWORD
        </Text>
        </View>
       <View style={{flex:0.1}}>  
      <Root></Root> 
       </View>


    


<View style={{
  flex:0.8,
 // marginBottom:240
  //height:20
  marginTop:5
}}
   >
     
          <TextField
      containerStyle={{
        //marginTop:50
      }}
      inputContainerStyle={{marginLeft:70,marginRight:70}}
            textColor= 'white'
            label='Email'
          
            labelFontSize={20}
            baseColor='#23e6a5'
            tintColor='#23e6a5'
            labelTextStyle={{color:'#23e6a5'}}
            blurOnSubmit={true} 
            value={this.state.email}
            onChangeText={ (email) => this.setState({ email }) }
          /> 
<TextField
      containerStyle={{
        marginTop:50
      }}
      inputContainerStyle={{marginLeft:70,marginRight:70}}
            textColor= 'white'
            
            labelFontSize={20}
            baseColor='#23e6a5'
            tintColor='#23e6a5'
            label='Password'
            blurOnSubmit={true} 
           value={this.state.password}
            onChangeText={ (password) => this.setState({ password }) }
          />
<Button
onPress={this.login}
title="SIGNUP"
containerStyle={{marginLeft:70,marginRight:70,
  marginTop:50
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
  height:60
}} 

 // onPress={() => {

   //         this.props.navigation.navigate('Login');
     //  }
    //}
/>

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
