import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, Keyboard, Dimensions, ImageBackground, 
	BackHandler, Platform } from 'react-native';
import BottomImage2 from '../BottomImage2';


export default class Settings extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Settings',
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
		headerTintColor: 'white',
	});

	constructor(props) {
    super(props);
    this.state = {
			visibleModal: false,
		}
	}

	render() {
		
		return(
			<View style={styles.container}>
				
				<View style={styles.container2}>

					<Text style={{color: '#1d94b2', textAlign: 'center', marginBottom: 10}} >Account</Text>

					<View style={styles.input}>
						<TouchableOpacity style={styles.styleTouchable} >
							<Text style={styles.textInput}>Name</Text>
							<TextInput style={styles.textInput1} placeholder="Jhone Carter" placeholderTextColor="#1d94b2"/>
						</TouchableOpacity>
					</View>

					<View style={styles.input}>
						<TouchableOpacity style={styles.styleTouchable} >
							<Text style={styles.textInput}>Email</Text>
							<TextInput style={styles.textInput1} placeholder="john.cater@gmail.com" placeholderTextColor="#1d94b2"/>
						</TouchableOpacity>
					</View>

					<View style={styles.input}>
					
						<TouchableOpacity style={styles.styleTouchable} >
							<Text style={styles.textInput}>Mobile Number</Text>
							<TextInput style={styles.textInput1} placeholder="222 222 222" placeholderTextColor="#1d94b2"/>
						</TouchableOpacity>
					</View>

					<View style={styles.input}>
						<TouchableOpacity style={styles.styleTouchable} >
							<Text style={styles.textInput}>Password</Text>
							<TextInput style={styles.textInput1} placeholder="........" secureTextEntry={true} placeholderTextColor="#1d94b2"/>
						</TouchableOpacity>
					</View>

					<View style={styles.input}>
						<TouchableOpacity style={styles.styleTouchable} onPress={ () => this.props.navigation.navigate('Payment') }>
							<Text style={styles.textInput}>Payment</Text>
							<Text style={styles.textInput}>Add Money</Text>
						</TouchableOpacity>
					</View>

					<ImageBackground style={{marginTop: 17}} imageStyle={{ borderRadius: 5 }}
							source={require('../../images/button-bg.png')}>
						<TouchableOpacity style={styles.button} >
							<Text style={styles.buttonText}>EDIT ACCOUNT</Text>
						</TouchableOpacity>
					</ImageBackground>

				</View>

				<BottomImage2 />

			
			</View>	
		)
	}
}


const styles = StyleSheet.create({
  container : {
		backgroundColor : '#ffffff',
		flex: 1,
		padding: 0,
		margin: 0,
	},
	
	container1 : {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#31cba5',
		paddingLeft: 35,
		paddingRight: 35,
		height: 80,
	},

	container2 : {
    flex: 4,
		alignItems: 'stretch',
		marginRight: 35,
		marginLeft: 35,
		marginTop: 40,
	},

	container3 : {
    flex: 1,
	},

	name: {
	},

	photo: {
		borderWidth: 3,
		borderRadius: 50,
		borderColor: '#2293b5',
		width: 75,
		height: 75,
	},

	photoView: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: -80,
		flexDirection: 'row',
	},

	location: {
		flexDirection: 'row',
		width: 100,
	},

	title: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: 30,
		marginBottom: 25,
	},

	input: {
		borderWidth: 1,
		borderColor: '#b9e2f4',
		paddingBottom: 10,
		paddingTop: 10,
		paddingRight: 25,
		paddingLeft: 25,
		marginTop: 17,
		borderRadius: 25,
	},

	styleTouchable: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		
	},

	textInput: {
		fontSize: 14,
		color: '#1d94b2',
	},

	textInput1: {
		fontSize: 14,
		color: '#1d94b2',
		width: Dimensions.get("window").width / 2 - 35,
		textAlign: "right",
		marginTop: -3
	},

	signin: {
		justifyContent: 'center',
		marginTop: 20,
		backgroundColor: '#29aca4',
		borderRadius: 5,
		marginBottom: 15,
	},

	signinText: {
		textAlign: 'center',
		fontSize: 20,
		paddingBottom: 10,
		paddingTop: 10,
		color: 'white',
  
	},

	remember: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	
	checkBox: {
		marginTop: -7,
	},

	or: {
		marginBottom: 15,
		marginTop: 15,
		position: 'relative',
		alignItems: 'center',

	},

	textOr: {
		backgroundColor: '#aae9fa',
		color: 'white',
		borderRadius: 30,
		padding: 7,
		justifyContent: 'center',
		width: 35,
		height: 35,
		marginTop: -20,
	},

	socialLink: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15,
	},

	facebook: {
		backgroundColor: '#1a4a9f',
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 40,
		paddingLeft: 40,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
	},

	google: {
		backgroundColor: '#ff4141',
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 23,
		paddingLeft: 23,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		
	},

	signup: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},

	modalContent: {
		flex: 1,
    backgroundColor: '#25a1a1',
		borderColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'flex-start',
		// marginRight: 200,
		width: Dimensions.get("window").width * 0.45,
		height: Dimensions.get("window").height,
	},
	
	close: {
		justifyContent: 'flex-end',
	},

	modalTop: {
		alignItems: 'center',
		
	},
	
	modalUnderTop: {
		alignItems: 'stretch',
		marginTop: 15,
	},

	modalItemText: {
		color: 'white',
		fontSize: 14,
	},

	modalItemView: {
		alignItems: 'stretch',
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#8ec4d0',
		flexDirection: 'row',
		paddingLeft: 20,
		paddingTop: 5,
		paddingBottom: 5,
	},

	leftArrowImage: {
		width: 50,
		height: 40,
	},

	button: {
		justifyContent: 'center',
		borderRadius: 10,
	},

	buttonText: {
		textAlign: 'center',
		fontSize: 16,
		paddingBottom: 10,
		paddingTop: 10,
		color: 'white',
  
	},
});
