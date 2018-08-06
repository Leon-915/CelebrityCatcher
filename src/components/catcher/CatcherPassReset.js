import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, Dimensions, Keyboard } from 'react-native';

import BottomImage from '../BottomImage';


export default class CatcherPassReset extends Component {

	static navigationOptions = { header: null, };
	

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
	
				<View style={styles.container2}>
					<View>
					<Text style={styles.description}>We just need your registration E-mail to send password reset link</Text>
					</View>
					
					<View style={styles.email}>
						<TextInput style={styles.textInput} onChangeText={(text) => this.setState({ email: text })} placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' placeholder="Email" />
					</View>
	
					<TouchableOpacity style={styles.passReset} onPress={this._submit} >
						<Text style={styles.resetText}>RESET PASSWORD</Text>
					</TouchableOpacity>
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
    flex: 2,
		justifyContent: 'center',
		alignItems:'center',
		// height: 100,
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
		marginTop: 35,
		backgroundColor: '#29aca4',
		borderRadius: 5,
		marginBottom: 15,
	},

	resetText: {
		textAlign: 'center',
		fontSize: 20,
		paddingBottom: 10,
		paddingTop: 10,
		color: 'white',
  
	},

	description: {
		justifyContent: 'center',
		textAlign: 'center',
		paddingRight: 30,
		paddingLeft: 30,
		fontSize: 16,
		fontStyle: 'italic',
	}
	
});


// import React, { Component } from 'react';
// import {
//     View, 
//     Text, StyleSheet, Dimensions 
// } from 'react-native';


// import MenuList from './CatcherPhotos';
// import MenuOverlay from './MenuOverlay';


// export default class CatcherPassReset extends Component {
//     render() {        
//         let { 
//             navigation,
//             onToggleMenu 
//         } = this.props

//         return (
//             <View style={styles.container}>
//                 <MenuOverlay 
//                     onToggleMenu={onToggleMenu}
//                     navigation={navigation}
//                 />
//                 {/* <View style={styles.menu}>
//                     <MenuList 
//                         onToggleMenu={onToggleMenu}
//                         navigation={navigation} 
//                     />
//                 </View> */}
//             </View>
//         );
//     }
// }


// const styles = StyleSheet.create({
//     container : {
//         flex: 1,
//         position : 'absolute',
//         left: 0,
//         top: 0,
//         width : Dimensions.get('window').width, 
//         height : Dimensions.get('window').height,
//         paddingTop : 10,
//         paddingLeft : 10,
//         paddingRight : 10,
//         paddingBottom : 10
//     },
//     menu: {
//         flex: 1,
//         backgroundColor: '#FFF',
//         position : 'absolute',
//         left: 0,
//         top: 0,
//         width : Dimensions.get('window').width * 0.5, 
//         height : Dimensions.get('window').height,
//         paddingTop : 10,
//         paddingLeft : 10,
//         paddingRight : 10,
//         paddingBottom : 10
//     },
//     menuItem : {
//         paddingTop : 10
//     }
// });