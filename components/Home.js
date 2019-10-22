
import React from 'react';
import { StyleSheet, View ,WebView,ImageBackground,AsyncStorage,Dimensions,Text} from 'react-native';
import MenuButton from '../components/MenuButton'
//import MapView from 'react-native-maps';
//import {MapView}from 'expo';
import {Image,Tooltip, registerCustomIconType} from 'react-native-elements'
import { Container, Header, Left, Body, Right,  Title,Content, CardItem,Icon} from 'native-base';
import { Card, ListItem, Button} from 'react-native-elements'


//import MenuButton from '../components/MenuButton'
import BgImage from '../assets/background.jpg';
import { Input} from 'react-native-elements';
import { TextField } from 'react-native-materialui-textfield'; 
import ImagePickerExample from '../components/Image';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';



 
export default class LinksScreen extends React.Component {
  
  _bootstrapAsync = async () => {
   // const userEmail = await AsyncStorage.getItem('user_email');
   await AsyncStorage.multiGet(['userToken', "userEmail", "loggedIn"],(err, data) => {
    
    
    let userEmail = parseInt(data[1][1])
    {<Text>
    usama
    </Text>
    }
  }
   )
  }
  onLayout(e) {
    const {nativeEvent: {layout: {height}}} = e;
    this.height = height;
    this.forceUpdate();
  }

  render() {
    const screenHeight = Dimensions.get('window').height
    const {height: heightOfDeviceScreen} = Dimensions.get('window');
    return (
      <View style={styles.container}>
          <ScrollView>
<View style={{flex:0.2}}>

      <Header style={{backgroundColor:'white'}}>
        
          <Left>
          <MenuButton navigation={this.props.navigation}/>
      </Left>                  
        <Body>
        <Image
  style={{width: 50, height: 50,borderRadius:50/2}}
  source={require('../assets/IMG-20191013-WA0001.jpg')}
/>
        </Body>
        <Right>
          <Button transparent>
            <Text>ShakeitOff</Text>
          </Button>
        </Right>
      </Header>
    
    </View>
   
    <View style={{flex:0.1,marginTop:5}}>
        <Header style={{backgroundColor:'black'}}>
         
          <Body style={{marginLeft:110,paddingBottom:8}}>
            <Title style={{color:'white'}}>Today</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='calendar'/>
            </Button>
          </Right>
        </Header>
      </View>
      

      <View style={{flex:0.2}}>
        <View style={{flex:1,flexDirection:'row'}}>

        <View style={{flex:0.6}}>


      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>First Card</Text>
         
      </Card>
      </View>
      <View style={{flex:0.4}}>
       
       
      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>First Card</Text>
         
      </Card>


</View>

      </View>
      </View>

     
      <View style={{flex:0.2}}>
        <View style={{flex:1,flexDirection:'row'}}>

        <View style={{flex:0.6}}>


      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>First Card</Text>
         
      </Card>
      </View>
      <View style={{flex:0.4}}>
       
       
      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>First Card</Text>
         
      </Card>


</View>

      </View>
      </View>

      <View style={{flex:0.1}}>


      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>Top Selling</Text>
         
      </Card>
</View>
<View style={{flex:0.2}}>
        <View style={{flex:1,flexDirection:'row'}}>

        <View style={{flex:0.5}}>
        <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>Food</Text>
          <Text style={styles.cardTitle}>Maagi</Text>
         
      </Card>
      </View>

      <View style={{flex:0.5}}>
      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>Food</Text>
          <Text style={styles.cardTitle}>Maagi</Text>
         
      </Card>
      </View>
      </View>
      </View>

<View style={{flex:0.1}}>


<Card style={styles.cardStyle}>
    <Text style={styles.cardTitle}>Tax Total</Text>
   
</Card>
</View>
     
<View style={{flex:0.2}}>
        <View style={{flex:1,flexDirection:'row'}}>

        <View style={{flex:0.6}}>


      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>CGST</Text>
         
      </Card>
      </View>
      <View style={{flex:0.4}}>
       
       
      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>)0.41</Text>
         
      </Card>


</View>

      </View>
      </View>

     
      <View style={{flex:0.2}}>
        <View style={{flex:1,flexDirection:'row'}}>

        <View style={{flex:0.6}}>


      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>No tax</Text>
         
      </Card>
      </View>
      <View style={{flex:0.4}}>
       
       
      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>0.00</Text>
         
      </Card>


</View>

      </View>
      </View>


     
      <View style={{flex:0.2}}>
        <View style={{flex:1,flexDirection:'row'}}>

        <View style={{flex:0.6}}>


      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>SGST</Text>
         
      </Card>
      </View>
      <View style={{flex:0.4}}>
       
       
      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>0.99</Text>
         
      </Card>
     
      </View>
      </View>
</View>
     
<View style={{flex:0.2}}>
        <View style={{flex:1,flexDirection:'row'}}>

        <View style={{flex:0.6}}>


      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>Tax</Text>
         
      </Card>
      </View>
      <View style={{flex:0.4}}>
       
       
      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>First Card</Text>
         
      </Card>


</View>

      </View>
      </View>
      <View style={{flex:0.4}}>


<Card style={styles.cardStyle}>
    <Text style={styles.cardTitle}>Stock Total</Text>
   
</Card>
</View>

<View style={{flex:0.2}}>
        <View style={{flex:1,flexDirection:'row'}}>

        <View style={{flex:0.6}}>


      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>Purchases</Text>
         
      </Card>
      </View>
      <View style={{flex:0.4}}>
       
       
      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>First Card</Text>
         
      </Card>


</View>

      </View>
      </View>

      <View style={{flex:0.2}}>
        <View style={{flex:1,flexDirection:'row'}}>

        <View style={{flex:0.6}}>


      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>Transfers</Text> 
         
      </Card>
      </View>
      <View style={{flex:0.4}}>
       
       
      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>First Card</Text>
         
      </Card>


</View>

      </View>
      </View>
      <View style={{flex:0.4}}>


<Card style={styles.cardStyle}>
    <Text style={styles.cardTitle}>Stock Total</Text>
   
</Card>
</View>

<View style={{flex:0.2}}>
        <View style={{flex:1,flexDirection:'row'}}>

        <View style={{flex:0.6}}>


      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>Purchases</Text>
         
      </Card>
      </View>
      <View style={{flex:0.4}}>
       
       
      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>Sale Totals</Text>
         
      </Card>


</View>

      </View>
      </View>

      <View style={{flex:0.2}}>
        <View style={{flex:1,flexDirection:'row'}}>

        <View style={{flex:0.6}}>


      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>SubTotal</Text> 
         
      </Card>
      </View>
      <View style={{flex:0.4}}>
       
       
      <Card style={styles.cardStyle}>
          <Text style={styles.cardTitle}>..</Text>
         
      </Card>


</View>

      </View>
      </View>

     </ScrollView>

  </View>
);
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
//paddingTop: 50,
},
cardStyle: {
//  flex: 0.1,
margin: 5,
},
cardTitle:{
//padding:10,
fontSize:20,
alignItems: "center",
justifyContent: "center"
}
});
;
        
      
       

          //<View style={{backgroundColor:'black',flex:1}}> 
      
        //<MenuButton navigation={this.props.navigation}/>
       // </View>
    
    
