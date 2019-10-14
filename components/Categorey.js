import React from 'react';
import { Image,StyleSheet, Text, View ,WebView,ImageBackground,FlatList,TouchableOpacity,ScrollView,ActivityIndicator} from 'react-native';
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


export default class Categorey extends React.Component {
  state={

    categorey:{},
    isLoading:true,
    images:[

      require("../assets/no_dp.png"),
      require("../assets/mgh.png"),

    ],
   
 }
 
   renderItem=({item})=>
   {
    
    return(
      
            <TouchableOpacity

      onPress={() => this.props.navigation.navigate("Product", {item:item.services.map((data) => {
        return (
          data.servicet_title
      )
        })}
      )}
      >
         
    <View style={{paddingTop:12,marginTop:24,marginLeft:60,flex:1,flexDirection:'row'}}>
       
    <Image style={{marginRight:24,width:50,height:50}} source={this.state.images[1]}
    
    />

            <Text style={{justifyContent:'center',alignItems:'center',marginTop:30,fontSize:18}}>
            {item.category_title}

      </Text>
    </View>
    </TouchableOpacity>

    )

    }

    
   componentWillMount(){

    axios.get("https://eventventure.pk/wedding_service_api/api/cats_and_services",
   //{
     //  category_id:this.props.navigation.getParam('category_id', 'NO-ID')
    



   //}

   //,
   
   {
       headers: {
         'Content-Type': 'application/json',
     }
     },
   
 )
 .then(response => [this.setState({categorey:response.data.categories,
  isLoading:false
})])
 validateStatus: (status) => {
   return true; }

  // console.log("RESPONSE RECEIVED: ", res);
 
// .catch((err) => {
  // console.log("AXIOS ERROR: ", err);
 //}
 

}

avatarImage(name) {
  switch (name) {
    case "../assets/mgh.png":
      return require("../assets/mgh.png");
    case "../assets/no_dp.png": 
      return require("../assets/no_dp.png");
    case "../assets/mgh.png":
      return require("../assets/mgh.png");
    case "../assets/mgh.png":
      return require("../assets/mgh.png");
    case "../assets/mgh.png":
      return require("../assets/mgh.png");
    case "../assets/mgh.png":
      return require("../assets/mgh.png");
    case "../assets/mgh.png":
      return require("../assets/mgh.png");
    case "../assets/mgh.png":
      return require("../assets/mgh.png");
    case "../assets/no_dp.png":
      return require("../assets/no_dp.png");
    default:
      return require("../assets/mgh.png");
  }
}


  render() {
    console.log(this.state)
    

    return (
    
      

      this.state.isLoading?
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>


<BallIndicator color='#23e6a5'/>
      </View>
      :
      
     <View>
      <Text style={{marginLeft:15,fontSize:22,color:'grey',marginTop:8}}>
          Select Categorey
      </Text>

      <ScrollView>        
      <FlatList
            data={this.state.categorey}
                
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />


</ScrollView>
     </View>
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
