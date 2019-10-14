import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer,createStackNavigator,createSwitchNavigator } from 'react-navigation';

import MainScreen from '../components/MainScreen';
//import LinksScreen from '../screens/LinkScreen';
//import SettingsScreen from '../screens/SettingScreen';
//import DetailScreen from '../screens/DetailScreen';
//import ProductScreen from '../screens/ProductScreen'
import Home from '../components/Home'

import MenuDrawer from '../navigation/MenuDrawer'
import Login from '../components/Login';
import AuthLoading from '../components/AuthLoading'
import Logut from '../components/Logout'
import SignUp from '../components/SignUp';
import Categorey from '../components/Categorey'
import Logout from '../components/Logout';
import Settings from '../components/Settings'
import Update from '../components/UpdateScreen'
const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerWidth: WIDTH*0.83,
	contentComponent: ({ navigation }) => {
		return(<MenuDrawer navigation={navigation} />)
		 
	}   
}
const AuthStack = createStackNavigator({
	Main: {
		screen: MainScreen,
		headerMode: 'none',
		navigationOptions: {
		  header: null,
		}
	  },
	  Login:{
		  screen:Login,
		  headerMode: 'none',
		  navigationOptions: {
			header: null,
		  } 
	  },
	  signup:{
		  screen:SignUp,
		  headerMode: 'none',
		  navigationOptions: {
			header: null,
		  }
	  }, 
	//  Home:{
	//	  screen:DrawerNavigator
	 // }
	}, {
		initialRouteName: 'Main',  
	});
  
	// });
	

const stack=createStackNavigator({
	Home:{
		screen:Home,
		headerMode: 'none',
    navigationOptions: {
      header: null,
    }, 
	},
	Categorey:
	{
		screen:Categorey
		,
		navigationOptions: ({ navigate, navigation }) => ({
			headerStyle: { backgroundColor: '#23e6a5'},
			headerTitleStyle: { marginRight: 'auto', width: '100%', color: 'white',marginLeft: 'auto'},
			title: 'Categories',
		}
)},
		
		
	})	


const DrawerNavigators =  createDrawerNavigator(
	{
		Home: {
			screen:stack
		},
//	Links: {
//			screen: LinksScreen
//		},
	//	Settings: {
	//		screen: SettingsScreen

//		},
		Logout:{
			screen:Logout
		},
		Settings:{
			screen:Settings,
			
		navigationOptions: ({ navigate, navigation }) => ({
			headerStyle: { backgroundColor: '#23e6a5'},
			headerTitleStyle: { marginRight: 'auto', width: '100%', color: 'white',marginLeft: 'auto'},
			title: 'Categories',
		}
)
		},
		Update:{
			screen:Update
		}
  //      Login:{
	//		screen:Login
	//	}
	},
	DrawerConfig
);

export default createAppContainer(createSwitchNavigator(
	{
	  AuthLoading: AuthLoading,
	  App:DrawerNavigators,
	  Auth: AuthStack,
	},
	{
	  initialRouteName: 'AuthLoading',
	}
  ));

  

//const AppNavigator = createSwitchNavigator({
	
//	Main: {
//	  screen: MainScreen,
//	},
//	Login:{
//		screen:Login
	//},
	//Detail:
	//{
	//	screen:DetailScreen
	//},
	//Product:{
	//	screen:ProductScreen
//	},
//	signup:{
//		screen:SignUp
//	},
//	Home:{
//		screen:DrawerNavigator
//	}
  //}, {
	//  initialRouteName: 'Main',  
 // });


//export default createAppContainer(AppNavigator,DrawerNavigator,stack);