
import React from 'react';
import { StyleSheet, Text, View ,WebView,ImageBackground,BackHandler,ScrollView,TouchableOpacity,ActivityIndicator
} from 'react-native';
import { Toast,Root } from 'native-base';

//import MenuButton from '../components/MenuButton'
import BgImage from '../assets/background.jpg';
import { Input,Button } from 'react-native-elements';
import { TextField } from 'react-native-materialui-textfield';
import axios from 'axios'




export default class LinksScreen extends React.Component {
  
  constructor(props) {
    super(props);
      this.state = {
        Brandname: '',
        email   : '',
       // username: '',
        password: '', 
        mobile: '',
       // profile: '',
        isLoading: false,
        pickerResult: null,
        hidePassword: true,
        msg:null, 
        products:{}

      }
      
      //this.update = this.update.bind(this)
     // this.change = this.change.bind(this);
     // this.changePassword = this.changePassword.bind(this);
     this.login = this.login.bind(this);
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
      
     
  
    componentWillMount() 
    {
    }
  
    handleBackButtonClick() {
      this.props.navigation.navigate('Login');
      return true;
    }



    
  login(){

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
   dataForm.append('user_type', 'vendors');
   //dataForm.append('client_id', 'thisAppsClientID');
   
   axios.post('https://eventventure.pk/wedding_service_api/api/sign_up',dataForm)
   .then(res => {
     let result = res.data;
     console.log(result);
     if(!result.error){
      this.setState({isLoading: false})
      const {navigate} = this.props.navigation;
      Toast.show({
        text: result.msg,
        buttonText: 'Okay',
        type: "success"
         })
      navigate('Login')

     
        }  
        else 
        {
          this.setState({isLoading: false})
          Toast.show({
            text: result.msg,
            buttonText: 'Okay',
            type: "danger"
             })
         // this.setState({isLoading: false})
        }
      })
   
   .catch(e => { 
     console.log(e.response); 
   });
  }
//          this.setState({isLoading: true,msg:responseJson.msg})
  //        this.setState({"loggedIn": true,"token": responseJson.data.token, "user_id": responseJson.data.user_id})
         
    //     this.props.navigation.navigate('Login');
         // try {
           // AsyncStorage.multiSet([['user_id', responseJson.user_id.toString()], ["token",responseJson.pincode], ["loggedIn", "true"]], (err, data) => {
          //  });
         // } catch (error) {
            // Error saving data
       //   }
           
          //this.props.dispatch(firstLaunchCheck({"loggedIn": true,"token": responseJson.data.token, "user_id": responseJson.data.user_id}))
         // this.setState
         // .then(response => [this.setState({products:response.data.data.products,

         // this.props.navigation.navigate('Login')
     // return
        
      //
        //else {
          //Toast.show({
            //  text: responseJson.error,
              //buttonText: 'Okay',
             // type: "danger"
      // })
        //  this.setState({isLoading: false})
       // }
     // })
     // .catch((error) =>{
       // this.setState({isLoading: false})
       // console.error(error);
      //});

    // 
  
  

  render() {
    console.log(this.state)


    return (

      this.state.isLoading?
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

       <ActivityIndicator />

      </View>
      
      
      :

      <Root>
      
    
      <ImageBackground source={BgImage} style={styles.backgroundContainer}>
<ScrollView style={{flex: 1}}>
   

        <View style={{paddingTop:50,flex:1,alignItems:'center'}}>
        <Text style={{color:'white',fontSize:30}}>
          CREATE  YOUR
        </Text>
        <Text style={{color:'white',fontSize:30}}>
       Account
        </Text>
        <Text style={{color:'#23e6a5',fontSize:20}}>
          Grow your business with Plan Me 
         </Text>
         <Text style={{color:'#23e6a5',fontSize:20,marginTop:10}}>
          for free 
         </Text>
        
         
        
        </View>

        
<View style={{
  flex:1,
  marginBottom:240
  //height:20
}}
   >
     
          <TextField
      containerStyle={{marginTop:50}}
      inputContainerStyle={{marginLeft:70,marginRight:70}}
            textColor= 'white'
            label='Brand Name'
            labelFontSize={20}
            baseColor='#23e6a5'
            tintColor='#23e6a5'
           //s titleFontSize={{fontSize:28}}
            //labelTextStyle={{color:'green'}}
            value={this.state.Brandname}
            onChangeText={ (Brandname) => this.setState({ Brandname }) }
          />
          
          <TextField
      containerStyle={{marginTop:50}}
      inputContainerStyle={{marginLeft:70,marginRight:70}}
            textColor= 'white'
            label='Email'
            labelFontSize={20}
            baseColor='#23e6a5'
            tintColor='#23e6a5'
           //s titleFontSize={{fontSize:28}}
            //labelTextStyle={{color:'green'}}
            value={this.state.email}
            onChangeText={ (email) => this.setState({ email }) }
          />
          
          <TextField
      containerStyle={{marginTop:50}}
      inputContainerStyle={{marginLeft:70,marginRight:70}}
            textColor= 'white'
            label='Phone'
            labelFontSize={20}
            baseColor='#23e6a5'
            tintColor='#23e6a5'
           //s titleFontSize={{fontSize:28}}
            //labelTextStyle={{color:'green'}}
            value={this.state.mobile}
          onChangeText={ (mobile) => this.setState({ mobile }) }
          />
          
          <TextField
      containerStyle={{marginTop:50}}
      inputContainerStyle={{marginLeft:70,marginRight:70}}
            textColor= 'white'
            label='Password'
            labelFontSize={20}
            baseColor='#23e6a5'
            tintColor='#23e6a5'
           //s titleFontSize={{fontSize:28}}
            //labelTextStyle={{color:'green'}}
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
></Button> 
</View>



</ScrollView>   
         </ImageBackground>
         </Root>
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

