import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, Keyboard, ImageBackground, Dimensions, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from 'react-navigation'; 
import BottomImage3 from '../BottomImage3';


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
			email: '',
			password: '',
			type: 1,
			successMsg: '',
			errorMsg: '',
			
		};
	}
	
	_submit = () => {
		var data = {
			"email"   : this.state.email,
			"password": this.state.password,
			"type"    : this.state.type, 
		}


		fetch('http://celebritycatcher.com/api/v1/login', {
			 method: 'post',
			 body:  JSON.stringify(data),
			 headers: {
				'Content-Type' : 'application/json',
			 },
		})
		.then((response) =>  response.json())
		.then((responseJson) => {
			data
			if(responseJson.status === 200) {
				Keyboard.dismiss();
				this.setState({successMsg: "Successfully Logged In!"});
				this.setState({errorMsg: ""});

				this.props.navigation.navigate('PhotoCategories');
			}	else { 
				this.setState({errorMsg: responseJson.message});
				this.setState({successMsg: ""});
				
			}
		})
		.catch((error) => {
			 console.error(error);
		});
  }

	render() {
				
		return(
			<View behavior='padding' style={styles.container}>
				<View style={styles.container1}>
	
					<LoginSuccessView res={ this.state.successMsg } />
					<LoginErrorView res={ this.state.errorMsg } />

					<Image style={styles.logo}
								source={require('../../images/catcher-login-logo.png')} />
				</View>
	
				<View style={styles.container2}>
					<View style={styles.title}>
						<Text style={{color: '#1d829e', fontSize: 20, marginRight: 10}}>Catcher</Text>
						<Text style={{color: '#34d4a6', fontSize: 20}}>Sign in</Text>
					</View>
	
					<View style={styles.input}>
						<Image style={{width: 16}}
								source={require('../../images/person.png')} 
								resizeMode="contain" />
						<TextInput style={styles.textInput} onChangeText={(text) => this.setState({ email: text })} placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' placeholder="User Name" />
					</View>
	
					<View style={styles.input}>
						<Image style={{width: 16}}
								source={require('../../images/key.png')} 
								resizeMode="contain" />
						<TextInput style={styles.textInput} onChangeText={(text) => this.setState({ password: text })} 
							secureTextEntry={true}
							placeholder="Password" placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' />
					</View>
	
					<ImageBackground style={{marginTop: 25, marginBottom: 20}} imageStyle={{ borderRadius: 5 }}
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
	
						<TouchableOpacity style={{alignItems: 'flex-end'}} onPress={() => this.props.navigation.navigate('CatcherPassReset')}>
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
						<TouchableOpacity style={styles.facebook}>
							<Image style={{width: 8, height: 14}}
								source={require('../../images/facebook-icon.png')} 
								resizeMode="contain" />
							<Text style={{color: 'white', marginLeft: 5, fontSize: 10}}>Facebook</Text>
						</TouchableOpacity>
						
						<TouchableOpacity style={styles.google}>
							<Image style={{width: 15, height: 12, marginTop: 3}}
								source={require('../../images/google-icon.png')} 
								resizeMode="contain" />
							<Text style={{color: 'white', marginLeft: 5, fontSize: 10}}>Google Plus</Text>
						</TouchableOpacity>
					</View>
	
					<View style={styles.signup}>
						<Text style={{fontSize: 12}}>Don't have an account? </Text>
						
						
						<TouchableOpacity onPress={() => this.props.navigation.navigate('CatcherSignup')} style={{borderBottomWidth: 1, borderBottomColor: '#7bdab8'}}>
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
    flex: 1,
		justifyContent: 'flex-end',
    alignItems:'center',
		
	},

	container2 : {
    flex: 3,
		alignItems: 'stretch',
		marginRight: 25,
		marginLeft: 25,
	},

	container3 : {
    flex: 1,
	},

	logo: {
		width: 100,
		height: 100, 
		borderRadius: 70,
		marginBottom: -30,
	},

	title: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: 60,
	},

	input: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#b9e2f4',
		paddingBottom: 5,
		marginTop: 15,
	},

	textInput: {
		width: 400,
		marginLeft: 10,
		fontSize: 12,
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
	}
	
});
