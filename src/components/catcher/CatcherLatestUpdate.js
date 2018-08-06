import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, ImageBackground } from 'react-native';

import BottomImage2 from '../BottomImage2';
import Swiper from 'react-native-swiper';
import TabRoutes from './TabRoutes';


export default class CatcherLatestUpdate extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Latest Update',
	  headerTitleStyle: { 
	    textAlign: 'center', flex: 1, color: 'white', fontSize: 16, fontWeight: 'normal', marginLeft: -35 
	  },
	  headerStyle: {
	    height: 40,
	  },
	  headerBackground: (
	    <Image resizeMode='stretch' style={{}}
	      source={require('../../images/nav-bg-2.png')}
	    />
	  ),
	  headerTintColor: 'white'
	});

	render() {
		return(
			<View style={styles.container}>
				
				<TabRoutes style={{zIndex: 1}} />
				
				<BottomImage2 />
			</View>	
		)
	}
}
	

const styles = StyleSheet.create({
  container : {
		backgroundColor : '#ffffff',
		flex: 1,
	},

	container1: {
		marginTop: 20,
	},

	swiperStyle: {
		// flex: 1,
	},

	buttonBg: {
		width: 90,
		height: 25,
	},

	buttonContent: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: -22,
	},

	followButton: {
		marginTop: -3,
	},

	personPlus: {
		marginRight: 5,
		width: 10,
		height: 10,
	},

	followText: {
		color: 'white',
		fontSize: 12,
	},
	
	item : {
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		marginLeft: 35,
		marginRight: 35,
		marginTop: 15,
		borderRadius: 5,
		borderWidth: 1,	
		borderColor: '#ccf1fa',
		borderRadius: 40,
	},

	itemTop: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 12,
		paddingBottom: 7,
	},

	itemLeft: {
		flexDirection: 'row',
		justifyContent: 'center',
	},

	itemLeftText: {
		color: '#4ba9c5', 
		fontSize: 12,
	},

	itemRightText: {
		color: '#7bd8c6',
		fontSize: 12,
		
	},

	photo: {
		borderRadius: 30,
		marginRight: 15,
		width: 30,
		height: 30,
		marginTop: -7,
	},

	itemBottom: {
		paddingTop: 5,
		paddingBottom: 5,
		alignItems: 'center',
		backgroundColor: '#4792b2',
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},
	
	itemBottomText: {
		color: 'white',
		fontSize: 12,
	},

	leftArrowImage: {
		width: 50,
		height: 40,
	}

	
});
