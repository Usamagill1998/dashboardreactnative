
import React from 'react';
import { StyleSheet, View ,WebView,ImageBackground,AsyncStorage} from 'react-native';
import MenuButton from '../components/MenuButton'
//import MapView from 'react-native-maps';
//import {MapView}from 'expo';
import {Image,Tooltip, registerCustomIconType} from 'react-native-elements'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text,Content,Card, CardItem} from 'native-base';



//import MenuButton from '../components/MenuButton'
import BgImage from '../assets/background.jpg';
import { Input} from 'react-native-elements';
import { TextField } from 'react-native-materialui-textfield'; 
import ImagePickerExample from '../components/Image';
import { TouchableOpacity } from 'react-native-gesture-handler';



 
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

  render() {
    

    return (
      <View style={{flex:1}}>
        <View style={{flex:0.1}}>
      <Container >
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
            </Container>
            </View>
            <View style={{flex:0.1,marginTop:5}}>
            <Container >
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
      </Container>
      </View>
      
      <View style={{flex:0.1}}>
        <View style={{flex:1,flexDirection:'row'}}>

        <View style={{flex:0.6}}>
      <Container >
        
        <Content padder>
          <Card>
            <CardItem style={{backgroundColor:'grey'}} header button onPress={() => alert("This is Card Header")}>
              <Text style={{color:'white'}}>Total Sale</Text>
            </CardItem>
           
          </Card>
        </Content>
      </Container>
      </View>
      <View style={{flex:0.4}}>
      <Container >
        
        <Content padder>
          <Card>
            <CardItem style={{backgroundColor:'grey'}} header button onPress={() => alert("This is Card Header")}>
              <Text style={{color:'white'}}>3852</Text>
            </CardItem>
           
          </Card>
        </Content>
      </Container>
      </View>

      </View>
      </View>

      
      <View style={{flex:0.1}}>
        <View style={{flex:1,flexDirection:'row'}}>

        <View style={{flex:0.6}}>
      <Container >
        
        <Content padder>
          <Card>
            <CardItem header button onPress={() => alert("This is Card Header")}>
              <Text>Total Bills</Text>
            </CardItem>
           
          </Card>
        </Content>
      </Container>
      </View>
      <View style={{flex:0.4}}>
      <Container >
        
        <Content padder>
          <Card>
            <CardItem header button onPress={() => alert("This is Card Header")}>
              <Text>21</Text>
            </CardItem>
           
          </Card>
        </Content>
      </Container>
      </View>

      </View>
      </View>
      
      <View style={{flex:0.1}}>
        <View style={{flex:1,flexDirection:'row'}}>
   <View style={{flex:0.6}}>
      <Container >
        
        <Content padder>
          <Card>
            <CardItem header button onPress={() => alert("This is Card Header")}>
              <Text>Total Item</Text>
            </CardItem>
           
          </Card>
        </Content>
      </Container>
      </View>
      <View style={{flex:0.4}}>
      <Container >
        
        <Content padder>
          <Card>
            <CardItem header button onPress={() => alert("This is Card Header")}>
              <Text>35</Text>
            </CardItem>
           
          </Card>
        </Content>
      </Container>
      </View>

      </View>
      </View>
         <View style={{flex:0.1}}>
      <Container >
        <Header style={{backgroundColor:'orange',marginTop:8}}>
          <Left/>
          <Body style={{}}>
            <Title style={{color:'white',marginBottom:19}}>Activity</Title>
          </Body>
          <Right />
        </Header>
      </Container>
      </View>
       
      <View style={{flex:0.2}}>
        <View style={{flex:1,flexDirection:'row'}}>

        <View style={{flex:0.5}}>
      <Container >
        
        <Content padder>
          <Card >
            <CardItem style={{backgroundColor:'grey'}} header button onPress={() => alert("This is Card Header")}>
              <Text style={{color:'white'}}>First Bill</Text>
            </CardItem>
            <CardItem style={{backgroundColor:'grey'}} body button onPress={() => alert("This is Card Footer")}>
              <Text style={{color:'white'}}>11:37</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
      </View>
      <View style={{flex:0.5}}>
      <Container >
        
        <Content padder>
          <Card>
            <CardItem style={{backgroundColor:'grey'}} header button onPress={() => alert("This is Card Header")}>
              <Text style={{color:'white'}}>Last Bill</Text>
            </CardItem>
            
            <CardItem style={{backgroundColor:'grey'}} body button onPress={() => alert("This is Card Footer")}>
              <Text style={{color:'white'}}>10:52 pm</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
      </View>

      </View>
      </View>

      <View style={{flex:0.1}}>
      <Container >
        <Header style={{backgroundColor:'red'}}>
          <Left/>
          <Body style={{}}>
            <Title style={{color:'white',marginBottom:14}}>Top Selling</Title>
          </Body>
          <Right />
        </Header>
      </Container>
      </View>
      
      <View style={{flex:0.2}}>
        <View style={{flex:1,flexDirection:'row'}}>

        <View style={{flex:0.5}}>
      <Container >
        
        <Content padder>
          <Card>
            <CardItem header button onPress={() => alert("This is Card Header")}>
              <Text>Food</Text>
            </CardItem>
            <CardItem body button onPress={() => alert("This is Card Footer")}>
              <Text>Maagi</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
      </View>
      <View style={{flex:0.5}}>
      <Container >
        
        <Content padder>
          <Card>
            <CardItem header button onPress={() => alert("This is Card Header")}>
              <Text>Qyantity:6</Text>
            </CardItem>
            
            <CardItem body button onPress={() => alert("This is Card Footer")}>
              <Text>Amount:6000</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
      </View>

      </View>
      </View>


            </View>
          );
        }
      }
       

          //<View style={{backgroundColor:'black',flex:1}}> 
      
        //<MenuButton navigation={this.props.navigation}/>
       // </View>
    
    
