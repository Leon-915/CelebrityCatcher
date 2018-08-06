
import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, Keyboard, KeyboardAvoidingView, ImageBackground, Dimensions } from 'react-native';
import BottomImage3 from '../BottomImage3';
import Hide from '../Hide';


export default class CatcherSignup extends Component {

	static navigationOptions = { header: null, };

	constructor(props) {
    super(props);
    this.state = { 
			name						 : '',
			email						 : '',
			password				 : '',
			confirm_password : '',
			phone 					 : '',
			paypal_link			 : '',
			nameValid				 : true,
			emailValid			 : true,
			phoneValid       : true,
			passwordValid    : true,
			confirmPassValid : true,
			paymentValid     : true,
		};

	}

	_submit = () => {
		var data = {
			"name": this.state.name,
			"email"   : this.state.email,
			"password": this.state.password,
			"phone": this.state.phone,
			"paypal_link": this.state.paypal_link,
		}

		fetch('http://celebritycatcher.com/api/v1/catcher/signup', {
			 method: 'post',
			 body:  JSON.stringify(data),
			 headers: {
				'Content-Type' : 'application/json',
			 },
		})
		.then((response) =>  response.json())
		.then((responseJson) => {
			console.log('============', responseJson);
			
			if(responseJson.status === 200) {
				Keyboard.dismiss();
				 
		  	this.props.navigation.navigate('PhotoCategories');
			} else {
				alert(responseJson.message);
				
			}
		})
		.catch((error) => {
			 console.error(error);
		});
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
			if(text == this.state.password) {
				this.setState({ confirmPassValid: true })
			} else {
				this.setState({ confirmPassValid: false })
			}
		}
	}

  render() {
		const { name, email, password, confirm_password, phone, paypal_link } = this.state;

		return(
			<View style={styles.container}>

				<KeyboardAvoidingView behavior='padding' style={styles.container1} enabled>
						<View style={styles.title}>
							<Text style={{color: '#1d829e', fontSize: 24, marginRight: 10}}>Sign Up</Text>
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
									placeholder="Password"  />
							
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
									placeholder="Confirm Password"  />
							
								<Hide style={{alignItems: 'flex-end'}} hide={this.state.confirmPassValid}>
									<Image style={styles.invalidIcon}
											source={require('../../images/invalid-icon.png')} 
											resizeMode="contain" />

									<Text style={styles.invalidText}>Invalid Password</Text>
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
									placeholder="Confirm Password"  />
							
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
								<TextInput 
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
								<TextInput  
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
								<TextInput 
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
    flex: 4,
		alignItems: 'stretch',
		marginRight: 35,
		marginLeft: 35,
		marginTop: 45,
	},

	container3 : {
    flex: 1,
	},

	title: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: 30,
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
		marginBottom: 20,
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
	}
	
});


// import ValidateTextInput from "react-native-validate-textinput";

// class CatcherSignup extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
// 			valueInput: "",
// 			errorText: ""
//     };
//   }
  
//   _onProcessTextChange(currentText){
//         if(!currentText){
//           this.setState({
//             errorText: 'Không được để trống'
//           })
//         } else if(!currentText.includes("@") && currentText){
//           this.setState({
//             errorText: 'Phải chứa ký tự @'
//           })
//         } else if(currentText.length < 8 && currentText){
//           this.setState({
//             errorText: 'Phải lớn hơn 8 ký tự'
//           })
//         }
//         else{
//           this.setState({
//             errorText: ''
//           })
//         }
//   }

//   render() {
//     return (
//         <View >
//             {/* <Image source={background} > */}
//               <View >
//                 <ValidateTextInput
//                   errorItem={this.state.errorText}
//                   typeInput={"email"}
//                   // styleIcon={{
//                   //   color: 'red'
//                   // }}
//                   onChangeTextInput={(text) => {
//                     this._onProcessTextChange(text);
//                     this.setState({
//                       valueInput: text
//                     })
//                   }}
//                   hiddenIcon={false}
//                   typeErrorView={"bottomInput"}
//                   hiddenIconErrorView={true}
//                 />

//                 <ValidateTextInput
//                   errorItem={this.state.errorText}
//                   typeInput={"password"}
//                   // styleIcon={{
//                   //   color: 'red'
//                   // }}
//                   onChangeTextInput={(text) => {
//                     this.setState({
//                       valueInput: text
//                     })
//                   }}
//                   hiddenIcon={false}
//                 />

//                 <Button
                  
                  
//                 >
//                   <Text>Login</Text>
//                 </Button>
//               </View>
//             {/* </Image> */}
//         </View>
//     );
//   }
// }

// export default CatcherSignup;



// import React, {Component}  from 'react';
// import {View, Text, TextInput, TouchableHighlight} from 'react-native';
// import ValidationComponent from 'react-native-form-validator';

// export default class CatcherSignup extends ValidationComponent {

//   constructor(props) {
//     super(props);
// 		this.state = {name : "", email: "", number:"", date: ""};
// 		this._onPressButton = this._onPressButton.bind(this)
// 		this.onChangeName = this.onChangeName.bind(this)
//   }

//   _onPressButton() {
//     // Call ValidationComponent validate method
//     this.validate({
//       name: {minlength:3, maxlength:7, required: true},
//       email: {email: true},
//       number: {numbers: true},
//       date: {date: 'YYYY-MM-DD'}
// 		});
// 		alert(1)
// 	}
	
// 	onChangeName(event) {
// 		this.setState({
// 			name: event.nativeEvent.text
// 		});

// 		this.validate({
//       name: {required: true},
//     });
		
// 	}

//   render() {
//       return (
//         <View>
//           <TextInput ref="name" onChangeText={(name) => this.setState({name})} value={this.state.name} />
//           <TextInput ref="email" onChangeText={(email) => this.setState({email})} value={this.state.email} />
//           <TextInput ref="number" onChangeText={(number) => this.setState({number})} value={this.state.number} />
//           <TextInput ref="date" onChangeText={(date) => this.setState({date})} value={this.state.date} />

//           <TextInput ref="date" onChange={this.onChangeName}  />
					
					
// 					{this.isFieldInError('date') && this.getErrorsInField('date').map(errorMessage => <Text>{errorMessage}</Text>) }

//           <TouchableHighlight onPress={this._onPressButton.bind(this)}>
//             <Text>Submit</Text>
//           </TouchableHighlight>

//           <Text>
//             {this.getErrorMessages()}
//           </Text>
//         </View>
//       );
//   }

// }