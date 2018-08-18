import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, Dimensions, Keyboard, Platform, 
	ImageBackground, KeyboardAvoidingView} from 'react-native';

import BottomImage from '../BottomImage';


export default class PassReset extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Reset Password',
	  headerTitleStyle: { 
	    textAlign: 'center', flex: 1, color: 'white', fontSize: 16, fontWeight: 'normal', alignSelf: 'center', 
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
			email: '',
		};
	}
	
	_submit = () => {
		var data = {
			"email"   : this.state.email,
		}

		console.log('============', data);

		fetch('http://celebritycatcher.com/api/v1/forgotPassword', {
			 method: 'post',
			 body:  JSON.stringify(data),
			 headers: {
				'Content-Type' : 'application/json',
				'Accept': 'application/json'
			 },
		})
		.then((response) =>  response.json())
		.then((responseJson) => {

			console.log('============', responseJson);
			
			 
			if(responseJson.status == 200) {
				Keyboard.dismiss();
				 
		  	Actions.catcher_signup();
			}

			 if(responseJson.status == 400) {
				alert(responseJson.message);
			}
		})
		.catch((error) => {
			 console.error(error);
		});
  }

	render() {
		return(
			<View style={styles.container}>
				<View style={styles.container1}>
					<Image style={styles.topBg}
								source={require('../../images/pass-reset-top-bg.png')}
								resizeMode='contain' />
	
					<Image style={styles.key}
								source={require('../../images/couple-key.png')}
								resizeMode='contain' />
				</View>
	
				<KeyboardAvoidingView behavior='padding' style={styles.container2}>
					<View style={{paddingTop: 10}}>
						<Text style={styles.description}>We just need your registration E-mail to send password reset link</Text>
					</View>
					
					<View style={styles.email}>
						<TextInput style={styles.textInput} onChangeText={(text) => this.setState({ email: text })} placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' placeholder="Email" />
					</View>

					<ImageBackground style={{marginBottom: 15, marginTop: 30}} imageStyle={{ borderRadius: 5 }}
							source={require('../../images/button-bg.png')}>
						<TouchableOpacity style={styles.passReset} onPress={this._submit} >
							<Text style={styles.resetText}>RESET PASSWORD</Text>
						</TouchableOpacity>
					</ImageBackground>
					
				</KeyboardAvoidingView>
	
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
    flex: 2,
		justifyContent: 'center',
		alignItems:'center',
	},

	container2 : {
    flex: 2,
		alignItems: 'stretch',
		marginRight: 35,
		marginLeft: 35,
		marginTop: 35,
	},

	container3 : {
    flex: 1,
	},

	topBg: {
		width: Dimensions.get("window").width,
		
	},

	key: {
		position: 'absolute',
		width: 150,
		
	},

	email: {
		borderBottomWidth: 1,
		borderColor: '#b9e2f4',
		paddingBottom: 5,
		marginTop: 25,
	},

	passReset: {
		justifyContent: 'center',
		borderRadius: 5,
	},

	resetText: {
		textAlign: 'center',
		fontSize: 16,
		paddingBottom: 10,
		paddingTop: 10,
		color: 'white',
  
	},

	description: {
		justifyContent: 'center',
		textAlign: 'center',
		paddingRight: 30,
		paddingLeft: 30,
		fontSize: 12,
		fontStyle: 'italic',
	}
	
});


