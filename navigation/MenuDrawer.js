import React from 'react';
import {
	View, 
	Text,
	Image,
	ScrollView,
	Platform,
	Dimensions, 
	StyleSheet, 
	TouchableOpacity,
} from 'react-native';
import { Avatar } from 'react-native-elements';


const WIDTH = Dimensions.get('window').width 
const HEIGHT = Dimensions.get('window').height 

export default class MenuDrawer extends React.Component {
	navLink(nav, text) {
		return(
			<TouchableOpacity 
			style={{height: 50}}
			 onPress={() => this.props.navigation.navigate(nav)}
			 >
				<Text style={styles.link}>{text}</Text>
			</TouchableOpacity>
		)
	}

	

	render() {
		return(
			<View style={styles.container}>
				<ScrollView style={styles.scroller}>
					<View style={styles.topLinks}>
						<View style={styles.profile}>
							<View style={styles.imgView}>
								<Image style={styles.img} source={require('../assets/background.jpg')} />
							</View>
							<View style={styles.profileText}>
								<Text style={styles.name}>Usama</Text>
							</View>
						</View>
					</View>

					<View style={styles.bottomLinks}>
					
					<View style={{flex:0.1}}>

					<Avatar rounded icon={{ name: 'home' }}
					containerStyle={{marginLeft:20,marginTop:10}}
					overlayContainerStyle={{backgroundColor: '#23e6a5'}} />
					<Avatar rounded icon={{ name: 'info' }}
					containerStyle={{marginLeft:20,marginTop:15}}
					overlayContainerStyle={{backgroundColor: '#23e6a5'}} />
					<Avatar rounded icon={{ name: 'settings' }}
					containerStyle={{marginLeft:20,marginTop:15}}
					overlayContainerStyle={{backgroundColor: '#23e6a5'}} />
	                <Avatar rounded icon={{ name: 'rate' }}
					containerStyle={{marginLeft:20,marginTop:15}}
					overlayContainerStyle={{backgroundColor: '#23e6a5'}} 
					   />
	
	
					</View>
					<View style={{flex:0.8}}>

						{this.navLink('Home', 'Home')}

						{this.navLink('Home', 'General Info')}
						{this.navLink('Settings', 'Settings')}
						{this.navLink('Home', 'Rate Us')}
						{this.navLink('Logout', 'Log Out')}
						</View>


					</View>
				</ScrollView>

				<View style={styles.footer}>
					<Text style={styles.description}>Plan Me Perfect</Text>
					<Text style={styles.version}>v1.0</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	scroller: {
		flex: 1,
	//	backgroundColor:''
	},
	profile: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 25,
		borderBottomWidth: 1,
		borderBottomColor: '#23e6a5',
		backgroundColor:'#23e6a5'
	},
	profileText: {
		flex: 3,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	name: {
		fontSize: 20,
		paddingBottom: 5,
		color: 'white',
		textAlign: 'left',
	},
	imgView: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
	},
	img: {
		height: 70,
		width: 70,
		borderRadius: 70/2,
	},
	topLinks:{
		height: 160,
		backgroundColor: 'black',
	},
	bottomLinks: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 10,
		paddingBottom: 450,
	//	flexDirection:'row',
		paddingRight:60,
		borderRadius:3,
		borderColor:'green',
		borderBottomWidth:5,
		borderBottomColor:'green',
		flexDirection:'row'
	},
	link: {
		flex: 1,
		fontSize: 17,
		padding: 6,
		paddingLeft: 60,
		margin: 6,
		textAlign: 'left',
	},
	footer: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		borderTopWidth: 1,
		borderTopColor: 'lightgray'
	},
	version: {
		flex: 1, 
		textAlign: 'right',
		marginRight: 20,
		color: 'gray'
	},
	description: {
		flex: 1, 
		marginLeft: 20,
		fontSize: 16,
	}
})