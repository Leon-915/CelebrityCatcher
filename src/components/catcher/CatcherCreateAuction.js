import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, ImageBackground, Platform } from 'react-native';

import BottomImage from '../BottomImage';


export default class CatcherCreateAuction extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Create Auction',
	  headerTitleStyle: { 
	    textAlign: 'center', flex: 1, color: 'white', fontSize: 16, fontWeight: 'normal' 
	  },
	  headerStyle: {
	    height: 40,
	  },
	  headerLeft: <TouchableOpacity onPress={ () => {navigation.goBack()} } >
									<Image style={{width: 20, height: 15, marginLeft: 20 }} resizeMode="stretch"
										source={require('../../images/left-arrow.png')}	/>
								</TouchableOpacity>,
		headerRight: <View />,						
	  headerBackground: (
	    <Image resizeMode='stretch' style={ Platform.OS === "ios" ? {height: 60} : {}}
				source={require('../../images/nav-bg-2.png')} 
	    />
		),
		headerTintColor: 'white'
	});

	render() {
		return(
			<View style={styles.container}>

				<View style={styles.container1}>
					<View style={styles.input}>
						<TextInput style={styles.textInput} placeholderTextColor="#3a96bd" 
						underlineColorAndroid='transparent' placeholder="Auction Name" />
					</View>

					<View style={styles.input}>
						<TextInput style={styles.textInput} placeholderTextColor="#3a96bd" 
						underlineColorAndroid='transparent' placeholder="Auction Price" />
					</View>

					<View style={styles.input}>
						<TextInput style={styles.textInput} placeholderTextColor="#3a96bd" 
						underlineColorAndroid='transparent' placeholder="Auction Categories" />
					</View>

					<View style={styles.input}>
						<TextInput style={styles.textInput} placeholderTextColor="#3a96bd" 
						underlineColorAndroid='transparent' placeholder="Keywords" />
					</View>

					<View style={{alignItems: 'center', marginTop: 15}}>
						<View style={styles.upload}>
							<Image style={{width: 50}}
								source={require('../../images/upload-icon-2.png')} 
								resizeMode="contain" />
						</View>
					</View>
					
					<ImageBackground style={{marginBottom: 20, marginTop: 15}} imageStyle={{ borderRadius: 5 }}
							source={require('../../images/button-bg.png')}>
						<TouchableOpacity style={styles.button} 
							onPress={() => this.props.navigation.navigate('CatcherAuction2')}>
							<Text style={styles.buttonText}>Save</Text>
						</TouchableOpacity>
					</ImageBackground>
					
				</View>

				<BottomImage />
			</View>	
		)
	}
}
	

const styles = StyleSheet.create({
  container : {
		backgroundColor : '#ffffff',
    flex: 1,
	},
	
	container1 : {
		flex: 7,
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		marginRight: 35,
		marginLeft: 35,
		paddingTop: 40,
	},

	input: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#b9e2f4',
		paddingTop: 5,
		paddingRight: 10,
		paddingBottom: 5,
		marginTop: 15,
		justifyContent: 'space-between',
	},

	upload: {
		alignItems: 'center', 
		padding: 30,
		width: 100, 
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: '#b9e2f4',
	},

	textInput: {
		width: 200,
		marginLeft: 10,
	},

	button: {
		justifyContent: 'center',
		borderRadius: 5,
	},

	buttonText: {
		textAlign: 'center',
		fontSize: 20,
		paddingBottom: 10,
		paddingTop: 10,
		color: 'white',
  
	},

});
