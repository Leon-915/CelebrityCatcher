import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, Keyboard, KeyboardAvoidingView, 
	ImageBackground, Dimensions, AsyncStorage, ScrollView } from 'react-native';
import BottomImage3 from '../BottomImage3';
import Hide from '../Hide';


export default class CatcherSignup extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Signup',
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
		headerTintColor: 'white',
	});

	constructor(props) {
    super(props);
    this.state = { 
			name						 : '',
			email						 : '',
			password				 : '',
			confirm_password : '',
			phone 					 : '',
			payment			     : '',

			nameValid				 : true,
			emailValid			 : true,
			phoneValid       : true,
			passwordValid    : true,
			confirmPassValid : true,
			paymentValid     : true,

			catcher    : false,
			subscriber : false,
			celebrity  : false,

			userInfo	 : {
				name  	 : "",
				email 	 : "",
				password : "",
				payment	 : "",
				phone		 : "",
			},

		};

	}

	componentDidMount() {
		if(this.props.navigation.state.params.id === 'Catcher') {
			this.setState({ catcher: true });
		}
		
		if(this.props.navigation.state.params.id === 'Subscriber') {
			this.setState({ subscriber: true });
		}

		if(this.props.navigation.state.params.id === 'Celebrity') {
			this.setState({ celebrity: true });
		}

		
	}

	_submit = () => {

		if(!this.state.name) {
			this.setState({ nameValid: false })
		}

		if(!this.state.email) {
			this.setState({ emailValid: false })
		}

		if(!this.state.phone) {
			this.setState({ phoneValid: false })
		}

		if(!this.state.password) {
			this.setState({ passwordValid: false })
		}

		if(!this.state.confirm_password) {
			this.setState({ confirmPassValid: false })
		}

		if(!this.state.payment) {
			this.setState({ paymentValid: false })
		}

		if(this.state.nameValid && this.state.emailValid && this.state.phoneValid 
			&& this.state.passwordValid && this.state.confirmPassValid && this.state.paymentValid 
			&& this.state.name && this.state.email && this.state.phone && this.state.password 
			&& this.state.confirm_password && this.state.payment) {
			
			if(this.props.navigation.state.params.id === 'Catcher') {
				var data = {
					"name"		 		: this.state.name,
					"email"    		: this.state.email,
					"password" 		: this.state.password,
					"phone"		 	  : this.state.phone,
					"paypal_link" : this.state.payment,
				}

				this.setState({
					userInfo: {
						...this.state.userInfo,
						name			: this.state.name,
						email			: this.state.email,
						password	: this.state.password,
						phone			: this.state.phone,
						payment		: this.state.payment,
					}
				})


				fetch('http://celebritycatcher.com/api/v1/catcher/signup', {
					method: 'post',
					body:  JSON.stringify(data),
					headers: {
						 'Content-Type' : 'application/json',
					},
				})
				.then((response) =>  response.json())
				.then((responseJson) => {
					
					if(responseJson.status === 200) {
						Keyboard.dismiss();
						
						// Remember user info in app
						AsyncStorage.setItem(this.state.userInfo.email, JSON.stringify(this.state.userInfo), () => {
							
						});

						//Login after Signup success
						let data = {
							"email"   : this.state.email,
							"password": this.state.password,
							"type"    : 1, 
						}
						
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

								AsyncStorage.getItem(this.state.userInfo.email, (err, result) => {
									// this.setSate({userInfo: result});
									console.log("==login==", result);
								});
								
								this.props.navigation.navigate('CatcherProfile', {
									id			 : "Catcher", 
									token		 : responseJson.data.token,
									userInfo : this.state.userInfo, 
								});
							}	else { 
								alert("Login Failed");
							}
						})
						.catch((error) => {
							 console.error(error);
						});

					} else {
						alert("The email has already been token or Bad input parameter.")
					}
				})
				.catch((error) => {
					console.error(error);
				});
			} else if(this.props.navigation.state.params.id === 'Subscriber') {
				var data = {
					"name": this.state.name,
					"email"   : this.state.email,
					"password": this.state.password,
					"phone": this.state.phone,
					"payment_info": this.state.payment,
				}

				this.setState({
					userInfo: {
						...this.state.userInfo,
						name			: this.state.name,
						email			: this.state.email,
						password	: this.state.password,
						phone			: this.state.phone,
						payment		: this.state.payment,
					}
				})
	
				fetch('http://celebritycatcher.com/api/v1/subscriber/signup', {
					method: 'post',
					body:  JSON.stringify(data),
					headers: {
						'Content-Type' : 'application/json',
					},
				})
				.then((response) =>  response.json())
				.then((responseJson) => {
					
					if(responseJson.status === 200) {
						
						Keyboard.dismiss();

						// Remember user info in app
						AsyncStorage.setItem(this.state.userInfo.email, JSON.stringify(this.state.userInfo), () => {
							
						});
						
						//Login after Signup success
						var data = {
							"email"   : this.state.email,
							"password": this.state.password,
							"type"    : 3, 
						}
						
						console.log('========', data);
						
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
								
								this.props.navigation.navigate('SubscriberProfile', {
									id			 : "Subscriber", 
									token		 : responseJson.data.token,
									userInfo : this.state.userInfo, 
								
								});
							}	else { 
								alert("Login Failed");
							}
						})
						.catch((error) => {
							 console.error(error);
						});

					} else {
						alert("The email has already been token or Bad input parameter.")
					}
				})
				.catch((error) => {
					console.error(error);
				});
			} else {
				var data = {
					"name": this.state.name,
					"email"   : this.state.email,
					"password": this.state.password,
					"phone": this.state.phone,
					"payment_info": this.state.payment,
				}

				this.setState({
					userInfo: {
						...this.state.userInfo,
						name			: this.state.name,
						email			: this.state.email,
						password	: this.state.password,
						phone			: this.state.phone,
						payment		: this.state.payment,
					}
				})
	
				fetch('http://celebritycatcher.com/api/v1/celebrity/signup', {
					method: 'post',
					body:  JSON.stringify(data),
					headers: {
						'Content-Type' : 'application/json',
					},
				})
				.then((response) =>  response.json())
				.then((responseJson) => {
					
					if(responseJson.status === 200) {
						
						Keyboard.dismiss();

						// Remember user info in app
						AsyncStorage.setItem(this.state.userInfo.email, JSON.stringify(this.state.userInfo), () => {
							
						});
						
						//Login after Signup success
						var data = {
							"email"   : this.state.email,
							"password": this.state.password,
							"type"    : 2, 
						}
						
						console.log('========', data);
						
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
								
								this.props.navigation.navigate('CelebrityProfile', {
									id: "Celebrity", 
									token: responseJson.data.token,
									userInfo : this.state.userInfo, 
								 });

							}	else { 
								alert("Login Failed");
							}
						})
						.catch((error) => {
							 console.error(error);
						});

					} else {
						alert("The email has already been token or Bad input parameter.")
					}
				})
				.catch((error) => {
					console.error(error);
				});
			}
		}
		
  }
	
	validate(text, type) {
		usernamePattern = /^[a-zA-Z +$]/;
		emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		phonePattern = /^[0-9]/;
		
		
		if(type == 'username') {
			this.setState({ name: text }); 

			if(usernamePattern.test(text)) {
				this.setState({ nameValid: true })
			} else {
				this.setState({ nameValid: false })
			}
		}

		if(type == 'email') {
			this.setState({ email: text }); 
			
			if(emailPattern.test(text)) {
				this.setState({ emailValid: true })
			} else {
				this.setState({ emailValid: false })
			}
		}

		if(type == 'phone') {
			this.setState({ phone: text }); 
			
			if(phonePattern.test(text)) {
				this.setState({ phoneValid: true })
			} else {
				this.setState({ phoneValid: false })
			}
		}

		if(type == 'password') {
			this.setState({ password: text }); 
			
			if(text.length > 5) {
				this.setState({ passwordValid: true })
			} else {
				this.setState({ passwordValid: false })
			}
		}

		if(type == 'confirmPass') {
			this.setState({ confirm_password: text }); 
			
			if(text == this.state.password) {
				this.setState({ confirmPassValid: true })
			} else {
				this.setState({ confirmPassValid: false })
			}
		}

		if(type == 'payment') {
			this.setState({ payment: text, paymentValid: true }); 
		}
	}

  render() {
		const { name, email, password, confirm_password, phone, paypal_link } = this.state;
		const { params } = this.props.navigation.state;

		return(
			<View style={styles.container}>

				<KeyboardAvoidingView
					behavior='padding'  enabled style={styles.container1}>
					<View style={styles.title}>
						<Text style={{color: '#1d829e', fontSize: 22, fontWeight: 'bold',  marginRight: 10}}>{ params.id }</Text>
						<Text style={{color: '#34d4a6', fontSize: 24}}>Sign Up</Text>
					</View>
	
					<View style={styles.input}>
						<Image style={{width: 16}}
								source={require('../../images/person.png')} 
								resizeMode="contain" />

						<View>
							<TextInput onChangeText={(text) => this.validate(text, 'username')} 
								style={this.state.nameValid ? styles.textInput : styles.invalidTextInput } 
								placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' 
								placeholder="User Name"  />
						
							<Hide style={{alignItems: 'flex-end'}} hide={this.state.nameValid}>
								<Image style={styles.invalidIcon}
										source={require('../../images/invalid-icon.png')} 
										resizeMode="contain" />

								<Text style={styles.invalidText}>Invalid Name</Text>
							</Hide>
						</View>
					</View>
	
					<View style={styles.input}>
						<Image style={{width: 16}}
								source={require('../../images/email-icon.png')} 
								resizeMode="contain" />
						
						<View>
							<TextInput onChangeText={(text) => this.validate(text, 'email')} 
								style={this.state.emailValid ? styles.textInput : styles.invalidTextInput } 
								placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' 
								placeholder="Email"  />
						
							<Hide style={{alignItems: 'flex-end'}} hide={this.state.emailValid}>
								<Image style={styles.invalidIcon}
										source={require('../../images/invalid-icon.png')} 
										resizeMode="contain" />

								<Text style={styles.invalidText}>Invalid Email</Text>
							</Hide>
						</View>
					</View>
	
					<View style={styles.input}>
						<Image style={{width: 15}}
								source={require('../../images/mobile-icon.png')} 
								resizeMode="contain" />
						
						<View>
							<TextInput onChangeText={(text) => this.validate(text, 'phone')} 
								style={this.state.phoneValid ? styles.textInput : styles.invalidTextInput } 
								placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' 
								placeholder="Phone Number"  />
						
							<Hide style={{alignItems: 'flex-end'}} hide={this.state.phoneValid}>
								<Image style={styles.invalidIcon}
										source={require('../../images/invalid-icon.png')} 
										resizeMode="contain" />

								<Text style={styles.invalidText}>Invalid Number</Text>
							</Hide>
						</View>
					</View>
	
					<View style={styles.input}>
						<Image style={{width: 16}}
								source={require('../../images/key.png')} 
								resizeMode="contain" />
						
						<View>
							<TextInput onChangeText={(text) => this.validate(text, 'password')} 
								style={this.state.passwordValid ? styles.textInput : styles.invalidTextInput } 
								placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' 
								placeholder="Password"
								secureTextEntry={true}  />
						
							<Hide style={{alignItems: 'flex-end'}} hide={this.state.passwordValid}>
								<Image style={styles.invalidIcon}
										source={require('../../images/invalid-icon.png')} 
										resizeMode="contain" />

								<Text style={styles.invalidText}>Invalid Password(More 6 characters)</Text>
							</Hide>
						</View>
					</View>
	
					<View style={styles.input}>
						<Image style={{width: 16}}
								source={require('../../images/confirm-icon.png')} 
								resizeMode="contain" />
						
						<View>
							<TextInput onChangeText={(text) => this.validate(text, 'confirmPass')} 
								style={this.state.confirmPassValid ? styles.textInput : styles.invalidTextInput } 
								placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' 
								placeholder="Confirm Password" 
								secureTextEntry={true} />
						
							<Hide style={{alignItems: 'flex-end'}} hide={this.state.confirmPassValid}>
								<Image style={styles.invalidIcon}
										source={require('../../images/invalid-icon.png')} 
										resizeMode="contain" />

								<Text style={styles.invalidText}>Invalid Password</Text>
							</Hide>
						</View>
					</View>

					{/* === Payment Field According To Condition === */}
					<Hide style={styles.input} hide={!this.state.catcher}>
						<Image style={{width: 16}}
								source={require('../../images/paypal-icon.png')} 
								resizeMode="contain" />
						
						<View>
							<TextInput onChangeText={(text) => this.validate(text, 'payment')}
								style={this.state.paymentValid ? styles.textInput : styles.invalidTextInput } 
								placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' 
								placeholder="Paypal Link"  />
						
							<Hide style={{alignItems: 'flex-end'}} hide={this.state.paymentValid}>
								<Image style={styles.invalidIcon}
										source={require('../../images/invalid-icon.png')} 
										resizeMode="contain" />

								<Text style={styles.invalidText}>Invalid Account Number</Text>
							</Hide>
						</View>
					</Hide>

					<Hide style={styles.input} hide={!this.state.subscriber}>
						<Image style={{width: 16}}
								source={require('../../images/credit-card-icon.png')} 
								resizeMode="contain" />

						<View>
							<TextInput onChangeText={(text) => this.validate(text, 'payment')}
								style={this.state.paymentValid ? styles.textInput : styles.invalidTextInput } 
								placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' 
								placeholder="Account Info For Payment"  />
						
							<Hide style={{alignItems: 'flex-end'}} hide={this.state.paymentValid}>
								<Image style={styles.invalidIcon}
										source={require('../../images/invalid-icon.png')} 
										resizeMode="contain" />

								<Text style={styles.invalidText}>Invalid Account Number</Text>
							</Hide>
						</View>
					</Hide>

					<Hide style={styles.input} hide={!this.state.celebrity}>
						<Image style={{width: 16}}
								source={require('../../images/payment-account-icon.png')} 
								resizeMode="contain" />
						
						<View>
							<TextInput onChangeText={(text) => this.validate(text, 'payment')}
								style={this.state.paymentValid ? styles.textInput : styles.invalidTextInput } 
								placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' 
								placeholder="Payment Information"  />
						
							<Hide style={{alignItems: 'flex-end'}} hide={this.state.paymentValid}>
								<Image style={styles.invalidIcon}
										source={require('../../images/invalid-icon.png')} 
										resizeMode="contain" />

								<Text style={styles.invalidText}>Invalid Account Number</Text>
							</Hide>
						</View>
					</Hide>

					
					{/* ========================= */}
					
					<ImageBackground style={{marginTop: 15}} imageStyle={{ borderRadius: 5 }}
						source={require('../../images/button-bg.png')}>
						<TouchableOpacity onPress={this._submit} style={styles.signin} >
							<Text style={styles.signinText}>SIGN UP</Text>
						</TouchableOpacity>
					</ImageBackground>
				
				</KeyboardAvoidingView>
				
				
			 	<BottomImage3 />
			</View>	
		)
	}
	
}


const styles = StyleSheet.create({
  container : {
		backgroundColor : '#ffffff',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	
	container1 : {
    // flex: 1,
		alignItems: 'stretch',
		marginRight: 35,
		marginLeft: 35,
		marginBottom: 110,
		
	},

	title: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 25,
	},

	input: {
		flexDirection: 'row',
		borderColor: '#b9e2f4',
		marginTop: 0,
	},

	textInput: {
		width: Dimensions.get('window').width - 50,
		marginLeft: 10,
		marginBottom: 15,
		paddingBottom: 10,
		paddingLeft: 40,
		marginLeft: -30,
		fontSize: 12,
		borderBottomWidth: 1,
		borderColor: '#b9e2f4',
	},

	invalidTextInput: {
		width: Dimensions.get('window').width - 50,
		marginLeft: 10,
		marginBottom: 20,
		paddingBottom: 10,
		paddingLeft: 40,
		marginLeft: -30,
		fontSize: 12,
		borderBottomWidth: 1,
		borderColor: 'red',
		
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

	errorTextInput: {
		borderWidth: 2,
		borderColor: 'red',
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
		fontWeight: 'bold',
	},

	remember: {
		flexDirection: 'row',
		justifyContent: 'space-between',
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
	}
	
});

