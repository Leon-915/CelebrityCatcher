import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, ImageBackground } from 'react-native';
import BottomImage3 from '../BottomImage3';


export default class CatcherFindEvent extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Find Event',
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

				<View style={styles.container1}>
					<Image style={styles.bg}
						source={require('../../images/events-top-bg.png')}
						 />
						
					<View style={styles.findEventView}>

						<ImageBackground style={{}}
									source={require('../../images/button-bg-2.png')}>
							<View style={styles.header}>
								<Text style={styles.headerText}>Find Event</Text>
							</View>
						</ImageBackground>
						
						
						<View style={styles.content}>
							<View style={styles.item}>
								<Text style={styles.itemText}>Event Type</Text>
								
								{/* <Select>
									<Option>Alberta</Option>
									<Option>British Columbia</Option>
									<Option>Manitoba</Option>
								</Select> */}
							</View>

							<View style={styles.item}>
								<Text style={styles.itemText}>Event Location</Text>
							</View>

							<View style={styles.item}>
								<Text style={styles.itemText}>Date</Text>
							</View>

							<View style={styles.item}>
								<Text style={styles.itemText}>Event Category</Text>
							</View>

							<ImageBackground style={{marginTop: 15}}
									source={require('../../images/button-bg-3.png')}>
								<TouchableOpacity style={styles.button}>
									<Text style={styles.buttonText}>SEARCH</Text>
								</TouchableOpacity>
							</ImageBackground>
						</View>
					</View>		
				</View>
				
				<BottomImage3 />
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
		flex: 7,
		alignItems: 'center',
		backgroundColor: 'white',
	},

	bg: {
		height: 170,
		width: 430,
	},

	header: {
		alignItems: 'center',
		paddingTop: 15,
		paddingBottom: 15,
	},

	headerText: {
		color: 'white',
		fontSize: 14,
	},

	findEventView: {
		alignItems: 'stretch',
		marginTop: -100,
		width: 350,
		borderColor: '#afafaf',
		borderWidth: 1,
		shadowColor: '#cccccc',
		backgroundColor : '#ffffff',
		borderRadius: 5,

	},

	content: {
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 20,
		paddingBottom: 20,
	},

	item: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#b9e2f4',
		paddingTop: 7,
		paddingRight: 10,
		paddingBottom: 7,
		marginTop: 15,
		justifyContent: 'space-between',
	},

	itemText: {
		width: 200,
		marginLeft: 10,
		color: '#b9e2f4',
		
	},
	
	button: {
		justifyContent: 'center',
		borderRadius: 5,
	},

	buttonText: {
		textAlign: 'center',
		fontSize: 16,
		paddingBottom: 10,
		paddingTop: 10,
		color: 'white',
  
	},

	
});
