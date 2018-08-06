import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, ImageBackground, Dimensions } from 'react-native';
import BottomImage2 from '../BottomImage2';
import Modal from 'react-native-modal';
import { CheckBox } from 'react-native-elements'



export default class CheckOut extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Checkout',
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

	constructor(props) {
    super(props)
    this.state = {
				visibleModal: false,
				checked1			: false,
				checked2			: false,
				checked3			: false,
				
    }
	}

	render() {
		return(
			<View style={styles.container}>

				<View style={styles.container1}>
					<View style={styles.imageView}>
						<Image style={styles.personImage}
								source={require('../../images/person2.png')}
								resizeMode='stretch'	/>
					</View>

					<View style={styles.item}>
							<Text style={styles.itemLeftText}>Price</Text>
							<Text style={styles.itemRightText}>$22</Text>
					</View>

					<View style={styles.item2}>
							<CheckBox containerStyle={styles.checkBox} textStyle={{color: '#ccf1fa', fontSize: 10}}
								center
								title='Credit Card/Debit Card'
								checkedIcon='dot-circle-o'
								uncheckedIcon='circle-o'
								size={16}
								checked={this.state.checked1}
								onPress={() => this.setState({checked1: !this.state.checked1})}
							/>
					</View>

					<View style={styles.item2}>
							<CheckBox containerStyle={styles.checkBox} textStyle={{color: '#ccf1fa', fontSize: 10}}
								center
								title='Paypal'
								checkedIcon='dot-circle-o'
								uncheckedIcon='circle-o'
								size={16}
								checked={this.state.checked2}
								onPress={() => this.setState({checked2: !this.state.checked2})}
							/>
					</View>

					<View style={styles.item2}>
							<CheckBox containerStyle={styles.checkBox} textStyle={{color: '#ccf1fa', fontSize: 10}}
								center
								title='Bank Account(Via chaque)'
								checkedIcon='dot-circle-o'
								uncheckedIcon='circle-o'
								size={16}
								checked={this.state.checked3}
								onPress={() => this.setState({checked3: !this.state.checked3})}
							/>
					</View>

					
				</View>

				<BottomImage2 />

				{/* ===  Modal === */}

				<Modal
					isVisible={this.state.visibleModal === true}
					animationIn={'slideInLeft'}
					animationOut={'slideOutLeft'}
					onRequestClose={ () => { this.setState({visibleModal: false})} }
					style={{marginLeft: 0, marginTop: 0, marginBottom: 0}} >

					<TouchableOpacity style={styles.modalbg} onPressOut={() => {this.setState({visibleModal: false})} }>
						<TouchableOpacity style={{marginTop: -220, opacity: 1}} activeOpacity={1} >
							<ImageBackground style={styles.modalContent} 
								resizeMode='stretch'
								source={require('../../images/price-modal-bg.png')}>

								<Text style={styles.modalText} >Would you like to place bid for this photo?</Text>

								<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15 }} >
									<TouchableOpacity style={styles.yesButton} 
										onPress={ this.goToCheckOut } >
										<Text style={{fontSize: 10, color: 'white'}} >Yes</Text>
									</TouchableOpacity>	 
									
									<TouchableOpacity style={styles.noButton} 
										onPress={ () => { this.setState({visibleModal: false})} } >
										<Text style={{fontSize: 10, color: 'white'}}>No</Text>
									</TouchableOpacity>	 
										
								</View>
							</ImageBackground>
						</TouchableOpacity>
					</TouchableOpacity>

				</Modal>
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
		paddingTop: 30,
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
		marginTop: 15,
		borderRadius: 5,
		borderWidth: 1,	
		borderColor: '#ccf1fa',
		justifyContent: 'space-between',
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 10,
		paddingBottom: 10,
		flexDirection: 'row',
		borderRadius: 30,
	},

	item2 : {
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		marginTop: 15,
		borderRadius: 5,
		borderWidth: 1,	
		borderColor: '#ccf1fa',
		paddingRight: 20,
		flexDirection: 'row',
	},

	itemLeft: {
		flexDirection: 'row',
		justifyContent: 'center',
	},

	itemLeftText: {
		color: '#4ba9c5',
		fontSize: 14,
		
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
		fontSize: 16,
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
	},

	
});
