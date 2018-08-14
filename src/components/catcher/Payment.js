import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, ImageBackground, Dimensions, Platform } from 'react-native';
import BottomImage2 from '../BottomImage2';
import Modal from 'react-native-modal';
import { CheckBox } from 'react-native-elements';
import Hide from '../Hide';



export default class Payment extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Payment',
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

	constructor(props) {
    super(props)
    this.state = {
				visibleModal: false,
				checked1				: false,
				checked2				: false,
				checked3				: false,
				checkedSaveCard : false
    }
	}

	render() {
		return(
			<View style={styles.container}>

				<View style={styles.container1}>
					

					<View style={styles.item2}>
							<CheckBox containerStyle={styles.checkBox} textStyle={{color: '#b9e2f4', fontSize: 10}}
								center
								title='Credit Card/Debit Card'
								checkedIcon='dot-circle-o'
								uncheckedIcon='circle-o'
								size={16}
								checked={this.state.checked1}
								onPress={() => this.setState({checked1: !this.state.checked1, checked2: false, checked3: false, })}
							/>
					</View>
					<Hide hide={ !this.state.checked1 } style={styles.hideView} >
						<View style={styles.item}>
								<Text style={styles.itemLeftText}>Card Number</Text>
								
								<Image style={{ width: 15, height: 10 }} 
									source={require('../../images/card-number-icon.png')} />
						</View>

						<View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
							<View style={styles.input}>
								<TextInput style={styles.textInput} placeholderTextColor="#3a96bd" 
									underlineColorAndroid='transparent' placeholder="Month" />
							</View>

							<View style={styles.input}>
								<TextInput style={styles.textInput} placeholderTextColor="#3a96bd" 
									underlineColorAndroid='transparent' placeholder="Year" />
							</View>

							<View style={styles.input}>
								<TextInput style={styles.textInput} placeholderTextColor="#3a96bd" 
									underlineColorAndroid='transparent' placeholder="CVV" />
							</View>
						</View>

						<View style={{alignItems: 'flex-start'}}>
							<CheckBox containerStyle={styles.checkBox1} textStyle={{fontSize: 10}}
								center
								title='Save the card'
								size={14}
								checked={this.state.checkedSaveCard}
								onPress={() => this.setState({checked1: !this.state.checkedSaveCard})}
							/>
						</View>

						<View style={{alignItems: 'center'}}>
							<ImageBackground style={{marginTop: 15, width: Dimensions.get("window").width / 2 + 20, 
								alignItems: 'center'}} 
								imageStyle={{ borderRadius: 5 }}
									source={require('../../images/button-bg.png')}>
								<TouchableOpacity style={styles.button} 
									onPress={ () => {this.setState({visibleModal: true})} } >
									<Text style={styles.buttonText}>PAY NOW</Text>
								</TouchableOpacity>
							</ImageBackground>
						</View>
					</Hide>

					<View style={styles.item2}>
							<CheckBox containerStyle={styles.checkBox} textStyle={{color: '#b9e2f4', fontSize: 10}}
								center
								title='Paypal'
								checkedIcon='dot-circle-o'
								uncheckedIcon='circle-o'
								size={16}
								checked={this.state.checked2}
								onPress={() => this.setState({checked2: !this.state.checked2, checked1: false, checked3: false,})}
							/>
					</View>
					<Hide hide={ !this.state.checked2 } style={styles.hideView} >
						<View style={{alignItems: 'center'}}>
							<ImageBackground style={{marginTop: 15, width: Dimensions.get("window").width / 2 + 20, 
								alignItems: 'center'}} 
								imageStyle={{ borderRadius: 5 }}
									source={require('../../images/button-bg.png')}>
								<TouchableOpacity style={styles.button} 
									onPress={ () => {this.setState({visibleModal: true})} } >
									<Text style={styles.buttonText}>CONTINUE TO PAYPAL</Text>
								</TouchableOpacity>
							</ImageBackground>
						</View>
					</Hide>

					<View style={styles.item2}>
							<CheckBox containerStyle={styles.checkBox} textStyle={{color: '#b9e2f4', fontSize: 10}}
								center
								title='Bank Account(Via chaque)'
								checkedIcon='dot-circle-o'
								uncheckedIcon='circle-o'
								size={16}
								checked={this.state.checked3}
								onPress={() => this.setState({checked3: !this.state.checked3, checked2: false, checked1: false,})}
							/>
					</View>
					<Hide hide={ !this.state.checked3 } style={styles.hideView} >
						<View style={styles.item}>
								<Text style={styles.itemLeftText}>Account Number</Text>
						</View>

						<View style={styles.item}>
								<Text style={styles.itemLeftText}>Routing Number</Text>
						</View>

						<View style={{alignItems: 'center'}}>
							<ImageBackground style={{marginTop: 15, width: Dimensions.get("window").width / 2 + 20, 
								alignItems: 'center'}} 
								imageStyle={{ borderRadius: 5 }}
									source={require('../../images/button-bg.png')}>
								<TouchableOpacity style={styles.button} 
									onPress={ () => {this.setState({visibleModal: true})} } >
									<Text style={styles.buttonText}>PAY NOW</Text>
								</TouchableOpacity>
							</ImageBackground>
						</View>
					</Hide>

					
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
	},

	container1: {
		flex: 5,
		alignItems: 'stretch',
		paddingTop: 10,
		paddingLeft: 30,
		paddingRight: 30,
	},

	imageView: {
		alignItems: 'center',
	},

	personImage: {
		borderColor: 'white',
		zIndex: 1,
		width: Dimensions.get('window').width - 50,
		height: 225,
		alignContent: 'center',
		marginBottom: 15,
		
	},

	item : {
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		marginBottom: 15,
		borderWidth: 1,	
		borderColor: '#b9e2f4',
		justifyContent: 'space-between',
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 10,
		paddingBottom: 10,
		flexDirection: 'row',
	},

	item2 : {
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		marginTop: 15,
		borderWidth: 1,	
		borderColor: '#b9e2f4',
		paddingRight: 20,
		flexDirection: 'row',
	},

	itemLeft: {
		flexDirection: 'row',
		justifyContent: 'center',
	},

	itemLeftText: {
		color: '#95e4d1',
		fontSize: 10,
		
	},

	itemRightText: {
		color: '#7bd8c6',
		fontSize: 14,
		
	},

	photo: {
		borderRadius: 30,
		marginRight: 15,
		width: 30,
		height: 30,
		marginTop: -5,
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

	button: {
		justifyContent: 'center',
		borderRadius: 10,
	},

	buttonText: {
		textAlign: 'center',
		fontSize: 12,
		paddingBottom: 10,
		paddingTop: 10,
		color: 'white',
  
	},

	modalbg: {
		flex: 1,
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},

	modalContent: {
		width: Dimensions.get("window").width / 2 -10,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 20,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 30,
	},

	modalText: {
		fontSize: 12,
		color: 'white',
		textAlign: 'center',
	},

	yesButton: {
		backgroundColor: '#ff3334',
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: 3,
		marginRight: 7,
	},

	noButton: {
		backgroundColor: '#515151',
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: 3,
		
	},

	checkBox: {
		borderWidth: 0,
		borderColor: '#ccf1fa',
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 10,
		justifyContent: 'flex-start',
		backgroundColor: 'white',
	},

	checkBox1: {
		borderWidth: 0,
		borderColor: '#ccf1fa',
		paddingTop: 3,
		paddingBottom: 3,
		justifyContent: 'flex-start',
		paddingLeft: 0,
		marginLeft: -10,
		backgroundColor: 'white',
	},

	input: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#b9e2f4',
		paddingRight: 10,
		width: Dimensions.get("window").width / 3 - 38, 
		justifyContent: 'space-between',
	},

	textInput: {
		width: 200,
		marginLeft: 10,
		fontSize: 10,
		paddingTop: 5,
		paddingBottom: 5,
	},

	hideView: {
		borderWidth: 1,
		borderColor: '#ccf1fa',
		padding: 20,
		justifyContent: 'flex-start',
		
	}

	
});
