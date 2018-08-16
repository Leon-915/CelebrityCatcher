import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, ImageBackground, Platform } from 'react-native';

import BottomImage2 from '../BottomImage2';
import Swiper from 'react-native-swiper';


export default class Followers extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Followers',
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
    super(props);
    this.state = {
			userInfo : {
				userId 							 : "",
				name  	 						 : "",
			},

			followersData : {},

			mod0: 0,
			mod1: 0,
			mod2: 0,

		}
	}

	componentDidMount() {
		const { params } = this.props.navigation.state;

		fetch('http://celebritycatcher.com/api/v1/followers/' + params.userId + '?page=2' , {
			 method: 'GET',
			 headers: {
				'Content-Type'  : 'application/json',
				'Authorization' : 'Bearer ' + params.token,
			 },
		})
		.then((response) =>  response.json())
		.then((responseJson) => {
			
			if(responseJson.status === 200) {
				this.setState({followersData: responseJson.data});
				
				console.log(responseJson);
				// if(responseJson.data.current)
				
			}	else {
				alert(responseJson.message);				
			}
		})
		.catch((error) => {
			 console.error(error);
		});	
	} 

	indexChanged(index) {
	}



	
	render() {
		const { params } = this.props.navigation.state;
		followersList = <Text></Text>
		followersList1 = <Text></Text>
		followersList2 = <Text></Text>
			
		followersList = params.followersData.data.map(item => (
			<TouchableOpacity key={item.id} style={styles.item}>
				<View style={styles.itemTop}>
					<View style={styles.itemLeft}>
						<Image style={styles.photo}
								source={require('../../images/carter.png')} />
						<Text style={styles.itemLeftText}>{ item.name }</Text>
					</View>

					<View style={styles.followButton}>
						<Image style={styles.buttonBg}
							source={require('../../images/follow-button-bg.png')} />
						
						<View style={styles.buttonContent}>
							<Image style={styles.personPlus}
								source={require('../../images/person-plus-icon.png')} />
							<Text style={styles.followText}>Follow</Text>
						</View>
							
					</View>
				</View>
			</TouchableOpacity>
		));

		// if(this.state.mod0 === 0 && this.state.followersData) {
		// 	console.log("=====in====")
		// 	followersList = this.state.followersData.data.map(item => (
		// 		<TouchableOpacity key={item.id} style={styles.item}>
		// 			<View style={styles.itemTop}>
		// 				<View style={styles.itemLeft}>
		// 					<Image style={styles.photo}
		// 							source={require('../../images/carter.png')} />
		// 					<Text style={styles.itemLeftText}>{ item.name }</Text>
		// 				</View>
	
		// 				<View style={styles.followButton}>
		// 					<Image style={styles.buttonBg}
		// 						source={require('../../images/follow-button-bg.png')} />
							
		// 					<View style={styles.buttonContent}>
		// 						<Image style={styles.personPlus}
		// 							source={require('../../images/person-plus-icon.png')} />
		// 						<Text style={styles.followText}>Follow</Text>
		// 					</View>
								
		// 				</View>
		// 			</View>
		// 		</TouchableOpacity>
		// 	));
		// }

		// if(this.state.mod1 === 1 && this.state.followersData) {
		// 	followersList1 = this.state.followersData.data.map(item => (
		// 		<TouchableOpacity key={item.id} style={styles.item}>
		// 			<View style={styles.itemTop}>
		// 				<View style={styles.itemLeft}>
		// 					<Image style={styles.photo}
		// 							source={require('../../images/carter.png')} />
		// 					<Text style={styles.itemLeftText}>{ item.name }</Text>
		// 				</View>
	
		// 				<View style={styles.followButton}>
		// 					<Image style={styles.buttonBg}
		// 						source={require('../../images/follow-button-bg.png')} />
							
		// 					<View style={styles.buttonContent}>
		// 						<Image style={styles.personPlus}
		// 							source={require('../../images/person-plus-icon.png')} />
		// 						<Text style={styles.followText}>Follow</Text>
		// 					</View>
								
		// 				</View>
		// 			</View>
		// 		</TouchableOpacity>
		// 	));
		// }

		// if(this.state.mod2 === 2 && this.state.followersData) {
		// 	followersList2 = this.state.followersData.data.map(item => (
		// 		<TouchableOpacity key={item.id} style={styles.item}>
		// 			<View style={styles.itemTop}>
		// 				<View style={styles.itemLeft}>
		// 					<Image style={styles.photo}
		// 							source={require('../../images/carter.png')} />
		// 					<Text style={styles.itemLeftText}>{ item.name }</Text>
		// 				</View>
	
		// 				<View style={styles.followButton}>
		// 					<Image style={styles.buttonBg}
		// 						source={require('../../images/follow-button-bg.png')} />
							
		// 					<View style={styles.buttonContent}>
		// 						<Image style={styles.personPlus}
		// 							source={require('../../images/person-plus-icon.png')} />
		// 						<Text style={styles.followText}>Follow</Text>
		// 					</View>
								
		// 				</View>
		// 			</View>
		// 		</TouchableOpacity>
		// 	));
		// }

		return(
			<View style={styles.container}>
				
				<Swiper style={styles.swiperStyle} paginationStyle={{bottom: 60}}
					dot={<View style={{backgroundColor:'rgba(87,211,185,1)', width: 8, height: 8,
						borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
					activeDot={<View style={{backgroundColor: 'rgba(87,211,185,1)', width: 8, height: 5, 
						borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
					onIndexChanged={ index => this.indexChanged(index) } 
					loop={false}
				>
					
					<View style={styles.container1}>
						{ followersList }
					</View>

					<View style={styles.container1}>
						{	followersList }
					</View>

					<View style={styles.container1}>
						{ followersList }
					</View>

					{/* <View style={styles.container1}>
						<View style={styles.item}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Jhon Doe</Text>
								</View>

								<View style={styles.followButton}>
									<Image style={styles.buttonBg}
										source={require('../../images/follow-button-bg.png')} />
									
									<View style={styles.buttonContent}>
										<Image style={styles.personPlus}
											source={require('../../images/person-plus-icon.png')} />
										<Text style={styles.followText}>Follow</Text>
									</View>
										
								</View>
							</View>
						</View>

						<View style={styles.item}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Jhon Doe</Text>
								</View>

								<View style={styles.followButton}>
									<Image style={styles.buttonBg}
										source={require('../../images/follow-button-bg.png')} />
									
									<View style={styles.buttonContent}>
										<Image style={styles.personPlus}
											source={require('../../images/person-plus-icon.png')} />
										<Text style={styles.followText}>Follow</Text>
									</View>
										
								</View>
							</View>

						</View>

						<View style={styles.item}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Jhon Doe</Text>
								</View>

								<View style={styles.followButton}>
									<Image style={styles.buttonBg}
										source={require('../../images/follow-button-bg.png')} />
									
									<View style={styles.buttonContent}>
										<Image style={styles.personPlus}
											source={require('../../images/person-plus-icon.png')} />
										<Text style={styles.followText}>Follow</Text>
									</View>
										
								</View>
							</View>

						</View>

						<View style={styles.item}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Jhon Doe</Text>
								</View>

								<View style={styles.followButton}>
									<Image style={styles.buttonBg}
										source={require('../../images/follow-button-bg.png')} />
									
									<View style={styles.buttonContent}>
										<Image style={styles.personPlus}
											source={require('../../images/person-plus-icon.png')} />
										<Text style={styles.followText}>Follow</Text>
									</View>
										
								</View>
							</View>

						</View>

						<View style={styles.item}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Jhon Doe</Text>
								</View>

								<View style={styles.followButton}>
									<Image style={styles.buttonBg}
										source={require('../../images/follow-button-bg.png')} />
									
									<View style={styles.buttonContent}>
										<Image style={styles.personPlus}
											source={require('../../images/person-plus-icon.png')} />
										<Text style={styles.followText}>Follow</Text>
									</View>
										
								</View>
							</View>

						</View>

						<View style={styles.item}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Jhon Doe</Text>
								</View>

								<View style={styles.followButton}>
									<Image style={styles.buttonBg}
										source={require('../../images/follow-button-bg.png')} />
									
									<View style={styles.buttonContent}>
										<Image style={styles.personPlus}
											source={require('../../images/person-plus-icon.png')} />
										<Text style={styles.followText}>Follow</Text>
									</View>
										
								</View>
							</View>

						</View>

						<View style={styles.item}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Jhon Doe</Text>
								</View>

								<View style={styles.followButton}>
									<Image style={styles.buttonBg}
										source={require('../../images/follow-button-bg.png')} />
									
									<View style={styles.buttonContent}>
										<Image style={styles.personPlus}
											source={require('../../images/person-plus-icon.png')} />
										<Text style={styles.followText}>Follow</Text>
									</View>
										
								</View>
							</View>

						</View>

						<View style={styles.item}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Jhon Doe</Text>
								</View>

								<View style={styles.followButton}>
									<Image style={styles.buttonBg}
										source={require('../../images/follow-button-bg.png')} />
									
									<View style={styles.buttonContent}>
										<Image style={styles.personPlus}
											source={require('../../images/person-plus-icon.png')} />
										<Text style={styles.followText}>Follow</Text>
									</View>
										
								</View>
							</View>

						</View>
					</View> */}

					
				</Swiper>
				
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
		marginTop: 20,
	},

	swiperStyle: {
		// flex: 1,
	},

	buttonBg: {
		width: 90,
		height: 25,
	},

	buttonContent: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: -20,
	},

	followButton: {
		marginTop: -3,
	},

	personPlus: {
		marginRight: 5,
		width: 10,
		height: 10,
	},

	followText: {
		color: 'white',
		fontSize: 12,
	},
	
	item : {
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		marginLeft: 35,
		marginRight: 35,
		marginTop: 15,
		borderRadius: 5,
		borderWidth: 1,	
		borderColor: '#ccf1fa',
		borderRadius: 40,
	},

	itemTop: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 12,
		paddingBottom: 7,
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
		marginTop: -7,
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

	leftArrowImage: {
		width: 50,
		height: 40,
	}

	
});
