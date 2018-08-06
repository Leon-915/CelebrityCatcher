import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, Keyboard, ImageBackground, Dimensions, KeyboardAvoidingView } from 'react-native';
import BottomImage3 from '../BottomImage3';
import Hide from '../Hide';
import Expo from 'expo';
const androidGoogleId = "912559162689-l8d5730ihm82c4pdiitresp4tl4qlhfu.apps.googleusercontent.com";
const androidFacebookId = "249650282317588";

async function signInWithGoogleAsync() {
	try {
		const result = await Expo.Google.logInAsync({
			androidClientId: androidId,
			scopes: ['profile', 'email'],
		});

		if (result.type === 'success') {
			// this.props.navigation.navigate('PhotoCategories');
			console.log('==========', result.accessToken);
		} else {
			return {cancelled: true};
		}
	} catch(e) {
		return {error: true};
	}
}

async function FacebooklogIn() {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('249650282317588', {
		permissions: ['public_profile'],
	});
	
	if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`);
		
		// this.props.navig ation.navigate('PhotoCategories');		
		// this.props.navigation.navigate('PhotoCategories', { name: (await response.json()).name, token: {token}.token });		
			console.log("========", {token}.token);
  }
}


class LoginSuccessView extends Component {
  render() {
    return (
      // <ImageBackground style={{width: Dimensions.get('window').width - 40, height: 20 }} imageStyle={{ borderRadius: 5 }}
			// 		source={require('../../images/login-res-bg.png')}
			// 		resizeMode='contain' >
			// 		<View>
			// 			<Image style={{}}
			// 				source={require('../../images/login-res-bg.png')} />
			// 			<Text style={{}}>{this.props.res}</Text>
			// 		</View>
			// </ImageBackground>
			<Text style={{marginBottom: -5, color: '#34d4a6'}}>{this.props.res}</Text>
    );
  }
}

class LoginErrorView extends Component {
  render() {
    return (
      // <ImageBackground style={{width: Dimensions.get('window').width - 40, height: 20 }} imageStyle={{ borderRadius: 5 }}
			// 		source={require('../../images/login-res-bg.png')}
			// 		resizeMode='contain' >
			// 		<View>
			// 			<Image style={{}}
			// 				source={require('../../images/login-res-bg.png')} />
			// 			<Text style={{}}>{this.props.res}</Text>
			// 		</View>
			// </ImageBackground>
			<Text style={{marginBottom: 10, color: 'red'}}>{this.props.res}</Text>
    );
  }
}



export default class CatcherLogin extends Component {
	static navigationOptions = { header: null, };

	constructor(props) {
    super(props);
    this.state = { 
			email    : '',
			password : '',
			type     : 0,

			emailValid	  : true,
			passwordValid : true,

			catcher    : false,
			subscriber : false,
			celebrity  : false,
			
		};
	}

	componentDidMount() {
		if(this.props.navigation.state.params.id === 'Catcher') {
			this.setState({ catcher: true });
			this.setState({ type: 1 });
		}
		
		if(this.props.navigation.state.params.id === 'Subscriber') {
			this.setState({ subscriber: true });
			this.setState({ type: 3 });
		}

		if(this.props.navigation.state.params.id === 'Celebrity') {
			this.setState({ celebrity: true });
			this.setState({ type: 2 });
		}
	}

	onTypeText(text, type) {
		if(type == "email") {
			this.setState({ emailValid: true });
			this.setState({ passwordValid: true })
			
			this.setState({ email: text });
		}

		if(type == "password") {
			this.setState({ emailValid: true });
			this.setState({ passwordValid: true })
			this.setState({ password: text });
		}
	}
	
	_submit = () => {

		if(!this.state.email) {
			this.setState({ emailValid: false })
		}

		if(!this.state.password) {
			this.setState({ passwordValid: false })
		}


		if(this.state.email && this.state.password && this.state.emailValid && this.state.passwordValid) {
			var data = {
				"email"   : this.state.email,
				"password": this.state.password,
				"type"    : this.state.type, 
			}

			console.log("==========", data)
			
			fetch('http://celebritycatcher.com/api/v1/login', {
				 method: 'POST',
				 body:  JSON.stringify(data),
				 headers: {
					'Content-Type' : 'application/json',
				 },
			})
			.then((response) =>  response.json())
			.then((responseJson) => {
				if(responseJson.status === 200) {
					Keyboard.dismiss();
					console.log('========', responseJson);
					
					if(this.props.navigation.state.params.id === "Catcher" ) {
						this.props.navigation.navigate('CatcherProfile', { id: 'Catcher', token: responseJson.data.token });
					}

					if(this.props.navigation.state.params.id === "Subscriber" ) {
						this.props.navigation.navigate('SubscriberProfile', { id: 'Subscriber', token: responseJson.data.token });
					}

					if(this.props.navigation.state.params.id === "Celebrity" ) {
						this.props.navigation.navigate('CelebrityProfile', { id: 'Celebrity', token: responseJson.data.token });
					}
				}	else { 
					console.log('========', responseJson);
					
					this.setState({emailValid: false});
					this.setState({passwordValid: false});
					
				}
			})
			.catch((error) => {
				 console.error(error);
			});
		}
		
  }

	render() {

		const { params } = this.props.navigation.state;
				
		return(
			<View behavior='padding' style={styles.container}>
				<View style={styles.container1}>
	
					{/* ==== Logo Images according to condition === */}
					<Hide hide={ !this.state.catcher }>
						<Image style={styles.logo} 
								source={require('../../images/catcher-login-logo.png')} />
					</Hide>

					<Hide hide={ !this.state.subscriber }>
						<Image style={styles.logo} 
								source={require('../../images/subscriber-login-logo.png')} />
					</Hide>

					<Hide hide={ !this.state.celebrity }>
						<Image style={styles.logo} 
								source={require('../../images/celebrity-login-logo.png')} />
					</Hide>

					
				</View>
	
				<View style={styles.container2}>
					<View style={styles.title}>
						<Text style={{color: '#1d829e', fontSize: 20, marginRight: 10}}>{ params.id }</Text>
						<Text style={{color: '#34d4a6', fontSize: 20}}>Sign in</Text>
					</View>
	
					<View style={styles.input}>
						<Image style={{width: 16}}
								source={require('../../images/person.png')} 
								resizeMode="contain" />
						<View>
							<TextInput onChangeText={(text) => this.onTypeText(text, 'email')}
								style={this.state.emailValid ? styles.textInput : styles.invalidTextInput } 
								placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' 
								placeholder="Email" />
						
							<Hide style={{alignItems: 'flex-end'}} hide={this.state.emailValid}>
								<Image style={styles.invalidIcon}
										source={require('../../images/invalid-icon.png')} 
										resizeMode="contain" />

								<Text style={styles.invalidText}>Incorrect Email</Text>
							</Hide>
						</View>
					</View>
	
					<View style={styles.input}>
						<Image style={{width: 16}}
								source={require('../../images/key.png')} 
								resizeMode="contain" />
						<View>
							<TextInput onChangeText={(text) => this.onTypeText(text, 'password')}
								style={this.state.passwordValid ? styles.textInput : styles.invalidTextInput } 
								placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' 
								placeholder="Password" 
								secureTextEntry={true} />
						
							<Hide style={{alignItems: 'flex-end'}} hide={this.state.passwordValid}>
								<Image style={styles.invalidIcon}
										source={require('../../images/invalid-icon.png')} 
										resizeMode="contain" />

								<Text style={styles.invalidText}>Incorrect Password</Text>
							</Hide>
						</View>
					</View>
	
					<ImageBackground style={{marginBottom: 20, marginTop: 10}} imageStyle={{ borderRadius: 5 }}
							source={require('../../images/button-bg.png')}>
						<TouchableOpacity style={styles.signin} onPress={this._submit}>
							<Text style={styles.signinText}>SIGN IN</Text>
						</TouchableOpacity>
					</ImageBackground>
					
	
					<View style={styles.remember}>
						<View style={{alignItems: 'flex-start', flexDirection: 'row'}}>
							<CheckBox style={styles.checkBox} />
							<Text style={{fontSize: 10, color: '#727272'}}>Remember Me</Text>
						</View>
	
						<TouchableOpacity style={{alignItems: 'flex-end'}} onPress={() => this.props.navigation.navigate('PassReset--')}>
							<Text style={{alignContent: 'flex-end', fontSize: 12, color: '#727272'}}>Forget Password ?</Text>
						</TouchableOpacity>
					</View>
	
					<View style={styles.or}>
						<Image style={{width: 340}}
								source={require('../../images/bar.png')} 
									/>
						<Text style={styles.textOr}>OR</Text>
					</View>
	
					<View style={styles.socialLink}>
						<TouchableOpacity style={styles.facebook} onPress={FacebooklogIn}>
							<Image style={{width: 8, height: 14}}
								source={require('../../images/facebook-icon.png')} 
								resizeMode="contain" />
							<Text style={{color: 'white', marginLeft: 5, fontSize: 10}}>Facebook</Text>
						</TouchableOpacity>
						
						<TouchableOpacity style={styles.google} onPress={signInWithGoogleAsync}>
							<Image style={{width: 15, height: 12, marginTop: 3}}
								source={require('../../images/google-icon.png')} 
								resizeMode="contain" />
							<Text style={{color: 'white', marginLeft: 5, fontSize: 10}}>Google Plus</Text>
						</TouchableOpacity>
					</View>
	
					<View style={styles.signup}>
						<Text style={{fontSize: 12}}>Don't have an account? </Text>
						
						
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Signup', {id: params.id})} style={{borderBottomWidth: 1, borderBottomColor: '#7bdab8'}}>
							<Text style={{color: '#7bdab8', fontSize: 12}}>Sign Up</Text>
						</TouchableOpacity>
						
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
	
	container1 : {
		justifyContent: 'flex-end',
    alignItems:'center',
		
	},

	container2 : {
		alignItems: 'stretch',
		marginRight: 25,
		marginLeft: 25,
	},

	container3 : {
    flex: 1,
	},

	logo: {
		width: 90,
		height: 90,
		marginTop: 65, 
		borderRadius: 70,
	},

	title: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: 30,
		marginBottom: 20,
	},

	input: {
		flexDirection: 'row',
		
	},

	
	signin: {
		justifyContent: 'center',
		borderRadius: 5,
	},

	signinText: {
		textAlign: 'center',
		fontSize: 16,
		paddingBottom: 10,
		paddingTop: 10,
		color: 'white',
  
	},

	remember: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	
	checkBox: {
		marginTop: -9,
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
		paddingTop: 4,
		justifyContent: 'center',
		textAlign: 'center',
		width: 25,
		height: 25,
		marginTop: -15,
		fontSize: 12,
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
		width: Dimensions.get('window').width / 2 - 40,
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
		width: Dimensions.get('window').width / 2 - 40,
	},

	signup: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		zIndex: 1,
	},

	invalidIcon: {
		marginTop: -45,
		width: 14,
		height: 14,
	},

	invalidText: {
		color: 'red',
		marginTop: 12,
		fontSize: 12
	},

	textInput: {
		width: Dimensions.get('window').width - 50,
		marginLeft: 10,
		marginBottom: 20,
		paddingBottom: 10,
		paddingLeft: 25,
		marginLeft: -15,
		fontSize: 12,
		borderBottomWidth: 1,
		borderColor: '#b9e2f4',
	},

	invalidTextInput: {
		width: Dimensions.get('window').width - 50,
		marginLeft: 10,
		marginBottom: 20,
		paddingBottom: 10,
		paddingLeft: 25,
		marginLeft: -15,
		fontSize: 12,
		borderBottomWidth: 1,
		borderColor: 'red',
		
	},
	
});
