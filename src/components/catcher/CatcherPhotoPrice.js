import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, ImageBackground, Dimensions, ScrollView, 
	Button, Platform } from 'react-native';
import Modal from 'react-native-modal';
import BottomImage2 from '../BottomImage2';


export default class CatcherPhotoPrice extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Photo Price',
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
				
    }
	}

	render() {
		return(
			<View style={styles.container}>
				<View style={styles.container1}>
					<Image style={styles.personImage}
										source={require('../../images/person2.png')} />

					<ImageBackground style={{}} resizeMode='stretch'
									source={require('../../images/price-bg.png')}	>
						<View style={styles.priceDetail}>
							<Text style={styles.price}>$165</Text>
							<Text style={styles.title}>ATHLETES</Text>
							<Text style={styles.range}>$65 - $500 Range</Text>
							<Text style={styles.keyword}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
						</View>
					</ImageBackground>	
				</View>

				<View style={styles.container2}>
					<Text style={styles.bottomTitle}>Biding of Auction</Text>

					<ScrollView style={styles.itemView} horizontal={true} 
						showsHorizontalScrollIndicator={false}  >
						<View style={{flexDirection: 'row'}} >
							<View style={styles.item}>
								<View style={styles.itemTop}>
									<View style={styles.itemLeft}>
										<Image style={styles.photo}
												source={require('../../images/carter.png')} />
										<Text style={styles.itemLeftText}>Auction Name</Text>
									</View>

									<Text style={styles.itemRightText}>$165</Text>
								</View>
							</View>
								
							<TouchableOpacity style={styles.button} 
								onPress={ () => {this.setState({visibleModal: true})} }>
								<Image style={{width: 24, height: 24}}
										source={require('../../images/check-icon-2.png')} />
							</TouchableOpacity>

							<TouchableOpacity style={styles.button} 
								onPress={ () => {this.setState({visibleModal: true})} }>
								<Image style={{width: 24, height: 24, marginLeft: 7, marginRight: 35}}
										source={require('../../images/x-icon.png')}
										resizeMode='stretch' />
							</TouchableOpacity>
						</View>	
					</ScrollView>

					<ScrollView style={styles.itemView} horizontal={true} 
						showsHorizontalScrollIndicator={false}  >
						<View style={{flexDirection: 'row'}} >
							<View style={styles.item}>
								<View style={styles.itemTop}>
									<View style={styles.itemLeft}>
										<Image style={styles.photo}
												source={require('../../images/carter.png')} />
										<Text style={styles.itemLeftText}>Auction Name</Text>
									</View>

									<Text style={styles.itemRightText}>$165</Text>
								</View>
							</View>
								
							<TouchableOpacity style={styles.button} 
								onPress={ () => {this.setState({visibleModal: true})} }>
								<Image style={{width: 24, height: 24}}
										source={require('../../images/check-icon-2.png')} />
							</TouchableOpacity>

							<TouchableOpacity style={styles.button} 
								onPress={ () => {this.setState({visibleModal: true})} }>
								<Image style={{width: 24, height: 24, marginLeft: 7, marginRight: 35}}
										source={require('../../images/x-icon.png')}
										resizeMode='stretch' />
							</TouchableOpacity>
						</View>	
					</ScrollView>

					<ScrollView style={styles.itemView} horizontal={true} 
						showsHorizontalScrollIndicator={false}  >
						<View style={{flexDirection: 'row'}} >
							<View style={styles.item}>
								<View style={styles.itemTop}>
									<View style={styles.itemLeft}>
										<Image style={styles.photo}
												source={require('../../images/carter.png')} />
										<Text style={styles.itemLeftText}>Auction Name</Text>
									</View>

									<Text style={styles.itemRightText}>$165</Text>
								</View>
							</View>
								
							<TouchableOpacity style={styles.button} 
								onPress={ () => {this.setState({visibleModal: true})} }>
								<Image style={{width: 24, height: 24}}
										source={require('../../images/check-icon-2.png')} />
							</TouchableOpacity>

							<TouchableOpacity style={styles.button} 
								onPress={ () => {this.setState({visibleModal: true})} }>
								<Image style={{width: 24, height: 24, marginLeft: 7, marginRight: 35}}
										source={require('../../images/x-icon.png')}
										resizeMode='stretch' />
							</TouchableOpacity>
						</View>	
					</ScrollView>
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
						<TouchableOpacity style={{marginTop: -220}} activeOpacity={1} >
							<ImageBackground style={styles.modalContent} 
								resizeMode='stretch'
								source={require('../../images/price-modal-bg.png')}>

								<Text style={styles.modalText} >Would you like to sell this auction to Jhon Carter</Text>

								<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15 }} >
									<TouchableOpacity style={styles.yesButton} 
										onPress={ () => { this.setState({visibleModal: false})} } >
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
		paddingTop: 15,
	},

	container1: {
		alignItems: 'center',
		marginTop: 40,
	},

	container2: {
		marginTop: 25,
	},

	personImage: {
		borderWidth: 4,
		borderColor: 'white',
		borderRadius: 40,	
		width: 80,
		height: 80,
		marginBottom: -50,
		zIndex: 1,
	},

	priceDetail: {
		borderRadius: 5,
		width: Dimensions.get('window').width / 2 + 10,
		paddingTop: 50,
		paddingBottom: 30,
		alignItems: 'stretch',
	},

	price: {
		textAlign: 'center',
		fontSize: 26,
		marginTop: 10,
		marginBottom: 10,
		color: 'white',
	},

	title: {
		textAlign: 'center',
		fontSize: 14,
		paddingTop: 5,
		paddingBottom: 5,
		fontWeight: 'bold',
		backgroundColor: '#6ec5cc',
		color: 'white',
		
	},

	range: {
		textAlign: 'center',
		fontSize: 14,
		marginTop: 10,
		marginBottom: 10,
		color: 'white',
		
	},

	keyword: {
		textAlign: 'center',
		fontSize: 10,
		paddingLeft: 20,
		paddingRight: 20,
		color: 'white',
		
	},

	bottomTitle: {
		textAlign: 'center',
		fontSize: 15,
		fontWeight: '100',
		color: '#393939',
		marginTop: 0,
		fontWeight: '100',
	},

	button: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	itemView: {
		marginTop: 15,
	},
	
	item : {
		justifyContent: 'flex-start',
		width: Dimensions.get('window').width - 70,
		marginLeft: 35,
		marginRight: 35,
		borderRadius: 5,
		borderWidth: 1,	
		borderColor: '#ccf1fa',
	},

	itemTop: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 10,
		paddingBottom: 5,
	},

	itemLeft: {
		flexDirection: 'row',
		justifyContent: 'center',
	},

	itemLeftText: {
		color: '#4ba9c5',
		fontSize: 12,
	},

	itemRightText: {
		color: '#7bd8c6',
		fontSize: 12,
		
	},

	photo: {
		borderRadius: 15,
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



	
});
