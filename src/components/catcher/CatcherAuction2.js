import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, ImageBackground, Button, Platform } from 'react-native';
import Swiper from 'react-native-swiper';
import BottomImage2 from '../BottomImage2';
import CatcherCreateAuction from './CatcherCreateAuction';


export default class CatcherAuction2 extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Auction',
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
		headerBackground: (
	    <Image resizeMode='stretch' style={ Platform.OS === "ios" ? {height: 60} : {}}
				source={require('../../images/nav-bg-2.png')} 
	    />
		),
		headerRight: (
      <TouchableOpacity style={{marginRight: 30}} 
				onPress={() => navigation.navigate('CatcherCreateAuction')}>
				<Image style={{width: 16, height: 16}}
						source={require('../../images/plus-icon-2.png')} />
			</TouchableOpacity>
		),
		headerTintColor: 'white'
		
	});

	goToCatcherCreateAuction() {
		alert(true);
		// this.props.navigation.navigate('CatcherCreateAuction');
	}

	render() {
		return(
			<View style={styles.container}>

				<Swiper style={styles.swiperStyle}   paginationStyle={{ bottom: 50 }}
					dot={<View style={{backgroundColor:'rgba(87,211,185,1)', width: 8, height: 8,
						borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
					activeDot={<View style={{backgroundColor: 'rgba(87,211,185,1)', width: 8, height: 5, 
						borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
					>

					<View style={styles.container1}>
						<TouchableOpacity style={styles.item} 
							onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Auction Name</Text>
								</View>

								<Text style={styles.itemRightText}>$165</Text>
							</View>

							<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
									source={require('../../images/auction-item-bottom-bg.png')}	>
								<View style={styles.itemBottom}>
									
										<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>

						<TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Auction Name</Text>
								</View>

								<Text style={styles.itemRightText}>$165</Text>
							</View>

							<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
									source={require('../../images/auction-item-bottom-bg.png')}	>
								<View style={styles.itemBottom}>
									
										<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>

						<TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Auction Name</Text>
								</View>

								<Text style={styles.itemRightText}>$165</Text>
							</View>

							<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
									source={require('../../images/auction-item-bottom-bg.png')}	>
								<View style={styles.itemBottom}>
									
										<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>

						<TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Auction Name</Text>
								</View>

								<Text style={styles.itemRightText}>$165</Text>
							</View>

							<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
									source={require('../../images/auction-item-bottom-bg.png')}	>
								<View style={styles.itemBottom}>
									
										<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>

						<TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Auction Name</Text>
								</View>

								<Text style={styles.itemRightText}>$165</Text>
							</View>

							<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
									source={require('../../images/auction-item-bottom-bg.png')}	>
								<View style={styles.itemBottom}>
									
										<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>

						<TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Auction Name</Text>
								</View>

								<Text style={styles.itemRightText}>$165</Text>
							</View>

							<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
									source={require('../../images/auction-item-bottom-bg.png')}	>
								<View style={styles.itemBottom}>
									
										<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>
					</View>

					<View style={styles.container1}>
						<TouchableOpacity style={styles.item} 
							onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Auction Name</Text>
								</View>

								<Text style={styles.itemRightText}>$165</Text>
							</View>

							<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
									source={require('../../images/auction-item-bottom-bg.png')}	>
								<View style={styles.itemBottom}>
									
										<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>

						<TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Auction Name</Text>
								</View>

								<Text style={styles.itemRightText}>$165</Text>
							</View>

							<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
									source={require('../../images/auction-item-bottom-bg.png')}	>
								<View style={styles.itemBottom}>
									
										<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>

						<TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Auction Name</Text>
								</View>

								<Text style={styles.itemRightText}>$165</Text>
							</View>

							<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
									source={require('../../images/auction-item-bottom-bg.png')}	>
								<View style={styles.itemBottom}>
									
										<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>

						<TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Auction Name</Text>
								</View>

								<Text style={styles.itemRightText}>$165</Text>
							</View>

							<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
									source={require('../../images/auction-item-bottom-bg.png')}	>
								<View style={styles.itemBottom}>
									
										<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>

						<TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Auction Name</Text>
								</View>

								<Text style={styles.itemRightText}>$165</Text>
							</View>

							<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
									source={require('../../images/auction-item-bottom-bg.png')}	>
								<View style={styles.itemBottom}>
									
										<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>

						<TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Auction Name</Text>
								</View>

								<Text style={styles.itemRightText}>$165</Text>
							</View>

							<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
									source={require('../../images/auction-item-bottom-bg.png')}	>
								<View style={styles.itemBottom}>
									
										<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>
					</View>

					<View style={styles.container1}>
						<TouchableOpacity style={styles.item} 
							onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Auction Name</Text>
								</View>

								<Text style={styles.itemRightText}>$165</Text>
							</View>

							<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
									source={require('../../images/auction-item-bottom-bg.png')}	>
								<View style={styles.itemBottom}>
									
										<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>

						<TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Auction Name</Text>
								</View>

								<Text style={styles.itemRightText}>$165</Text>
							</View>

							<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
									source={require('../../images/auction-item-bottom-bg.png')}	>
								<View style={styles.itemBottom}>
									
										<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>

						<TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Auction Name</Text>
								</View>

								<Text style={styles.itemRightText}>$165</Text>
							</View>

							<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
									source={require('../../images/auction-item-bottom-bg.png')}	>
								<View style={styles.itemBottom}>
									
										<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>

						<TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Auction Name</Text>
								</View>

								<Text style={styles.itemRightText}>$165</Text>
							</View>

							<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
									source={require('../../images/auction-item-bottom-bg.png')}	>
								<View style={styles.itemBottom}>
									
										<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>

						<TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Auction Name</Text>
								</View>

								<Text style={styles.itemRightText}>$165</Text>
							</View>

							<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
									source={require('../../images/auction-item-bottom-bg.png')}	>
								<View style={styles.itemBottom}>
									
										<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>

						<TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
							<View style={styles.itemTop}>
								<View style={styles.itemLeft}>
									<Image style={styles.photo}
											source={require('../../images/carter.png')} />
									<Text style={styles.itemLeftText}>Auction Name</Text>
								</View>

								<Text style={styles.itemRightText}>$165</Text>
							</View>

							<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
									source={require('../../images/auction-item-bottom-bg.png')}	>
								<View style={styles.itemBottom}>
									
										<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>
					</View>
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
		paddingTop: 15,
	},

	container1: {
		flex: 7,
	},
	
	item : {
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		marginLeft: 30,
		marginRight: 30,
		marginTop: 15,
		borderRadius: 5,
		borderWidth: 1,	
		borderColor: '#ccf1fa',
	},

	itemTop: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 14,
		paddingBottom: 7,
	},

	itemLeft: {
		flexDirection: 'row',
		justifyContent: 'center',
	},

	
	itemBottom: {
		paddingTop: 3,
		paddingBottom: 3,
		alignItems: 'center',
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},
	
	itemBottomText: {
		color: 'white',
		fontSize: 10,
	},

	itemLeftText: {
		color: '#4ba9c5', 
		fontSize: 10,
	},

	itemRightText: {
		color: '#7bd8c6',
		fontSize: 10,
		
	},

	photo: {
		borderRadius: 15,
		marginRight: 15,
		width: 30,
		height: 30,
		marginTop: -7,
	},

	
});
