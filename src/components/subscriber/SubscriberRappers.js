import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, NavigationBar, ScrollView, Dimensions, Platform } from 'react-native';
import BottomImage2 from '../BottomImage2';
import Swiper from 'react-native-swiper';

export default class SubscriberRappers extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
    title: 'Rappers',
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

	render() {
		return(
			<View style={styles.container}>
				<Swiper style={styles.swiperStyle} paginationStyle={{bottom: 5}}
					dot={<View style={{backgroundColor:'rgba(87,211,185,1)', width: 8, height: 8,
						borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
					activeDot={<View style={{backgroundColor: 'rgba(87,211,185,1)', width: 8, height: 5, 
						borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
					>

					<View style={{height: Dimensions.get('window').height - 220}} >
						
							<View style={styles.imageView}>
								<TouchableOpacity onPress={() => this.props.navigation.navigate('PlaceBid')}>
									<Image style={styles.personImage}
										source={require('../../images/photo-1.png')}	/>
									
									<View style={styles.bottomView}>
										<View style={styles.bottomLeftView}>
											<Text style={{fontSize: 10, color: '#33cba4'}}>Jhon Carter</Text>
											<Text style={{fontSize: 8, color: '#1976a1'}}>10 bids</Text>
										</View>

										<Text style={{fontSize: 10, color: '#1976a1'}}>$222</Text>
									</View>
								</TouchableOpacity>

								<TouchableOpacity onPress={() => this.props.navigation.navigate('PlaceBid')}>
									<Image style={styles.personImage}
										source={require('../../images/photo-2.png')}	/>
									
									<View style={styles.bottomView}>
										<View style={styles.bottomLeftView}>
											<Text style={{fontSize: 10, color: '#33cba4'}}>Jhon Carter</Text>
											<Text style={{fontSize: 8, color: '#1976a1'}}>10 bids</Text>
										</View>

										<Text style={{fontSize: 10, color: '#1976a1'}}>$222</Text>
									</View>
								</TouchableOpacity>
							</View>

							<View style={styles.imageView}>
								<TouchableOpacity onPress={() => this.props.navigation.navigate('PlaceBid')}>
									<Image style={styles.personImage}
										source={require('../../images/photo-3.png')}	/>
									
									<View style={styles.bottomView}>
										<View style={styles.bottomLeftView}>
											<Text style={{fontSize: 10, color: '#33cba4'}}>Jhon Carter</Text>
											<Text style={{fontSize: 8, color: '#1976a1'}}>10 bids</Text>
										</View>

										<Text style={{fontSize: 10, color: '#1976a1'}}>$222</Text>
									</View>
								</TouchableOpacity>

								<TouchableOpacity onPress={() => this.props.navigation.navigate('PlaceBid')}>
									<Image style={styles.personImage}
										source={require('../../images/photo-4.png')}	/>
									
									<View style={styles.bottomView}>
										<View style={styles.bottomLeftView}>
											<Text style={{fontSize: 10, color: '#33cba4'}}>Jhon Carter</Text>
											<Text style={{fontSize: 8, color: '#1976a1'}}>10 bids</Text>
										</View>

										<Text style={{fontSize: 10, color: '#1976a1'}}>$222</Text>
									</View>
								</TouchableOpacity>
							</View>

							<View style={styles.imageView}>
								<TouchableOpacity onPress={() => this.props.navigation.navigate('PlaceBid')}>
									<Image style={styles.personImage}
										source={require('../../images/photo-5.png')}	/>
									
									<View style={styles.bottomView}>
										<View style={styles.bottomLeftView}>
											<Text style={{fontSize: 10, color: '#33cba4'}}>Jhon Carter</Text>
											<Text style={{fontSize: 8, color: '#1976a1'}}>10 bids</Text>
										</View>

										<Text style={{fontSize: 10, color: '#1976a1'}}>$222</Text>
									</View>
								</TouchableOpacity>

								<TouchableOpacity onPress={() => this.props.navigation.navigate('PlaceBid')}>
									<Image style={styles.personImage}
										source={require('../../images/photo-6.png')}	/>
									
									<View style={styles.bottomView}>
										<View style={styles.bottomLeftView}>
											<Text style={{fontSize: 10, color: '#33cba4'}}>Jhon Carter</Text>
											<Text style={{fontSize: 8, color: '#1976a1'}}>10 bids</Text>
										</View>

										<Text style={{fontSize: 10, color: '#1976a1'}}>$222</Text>
									</View>
								</TouchableOpacity>
							</View>
					</View>
					
					<View style={{height: Dimensions.get('window').height - 220}} >
						
						<View style={styles.imageView}>
							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.bottomView}>
									<View style={styles.bottomLeftView}>
										<Text style={{fontSize: 10, color: '#33cba4'}}>Jhon Carter</Text>
										<Text style={{fontSize: 8, color: '#1976a1'}}>10 bids</Text>
									</View>

									<Text style={{fontSize: 10, color: '#1976a1'}}>$222</Text>
								</View>
							</View>

							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.bottomView}>
									<View style={styles.bottomLeftView}>
										<Text style={{fontSize: 10, color: '#33cba4'}}>Jhon Carter</Text>
										<Text style={{fontSize: 8, color: '#1976a1'}}>10 bids</Text>
									</View>

									<Text style={{fontSize: 10, color: '#1976a1'}}>$222</Text>
								</View>
							</View>
						</View>

						<View style={styles.imageView}>
							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.bottomView}>
									<View style={styles.bottomLeftView}>
										<Text style={{fontSize: 10, color: '#33cba4'}}>Jhon Carter</Text>
										<Text style={{fontSize: 8, color: '#1976a1'}}>10 bids</Text>
									</View>

									<Text style={{fontSize: 10, color: '#1976a1'}}>$222</Text>
								</View>
							</View>

							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.bottomView}>
									<View style={styles.bottomLeftView}>
										<Text style={{fontSize: 10, color: '#33cba4'}}>Jhon Carter</Text>
										<Text style={{fontSize: 8, color: '#1976a1'}}>10 bids</Text>
									</View>

									<Text style={{fontSize: 10, color: '#1976a1'}}>$222</Text>
								</View>
							</View>
						</View>

						<View style={styles.imageView}>
							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.bottomView}>
									<View style={styles.bottomLeftView}>
										<Text style={{fontSize: 10, color: '#33cba4'}}>Jhon Carter</Text>
										<Text style={{fontSize: 8, color: '#1976a1'}}>10 bids</Text>
									</View>

									<Text style={{fontSize: 10, color: '#1976a1'}}>$222</Text>
								</View>
							</View>

							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.bottomView}>
									<View style={styles.bottomLeftView}>
										<Text style={{fontSize: 10, color: '#33cba4'}}>Jhon Carter</Text>
										<Text style={{fontSize: 8, color: '#1976a1'}}>10 bids</Text>
									</View>

									<Text style={{fontSize: 10, color: '#1976a1'}}>$222</Text>
								</View>
							</View>
						</View>
					</View>

					<View style={{height: Dimensions.get('window').height - 220}} >
						
						<View style={styles.imageView}>
							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.bottomView}>
									<View style={styles.bottomLeftView}>
										<Text style={{fontSize: 10, color: '#33cba4'}}>Jhon Carter</Text>
										<Text style={{fontSize: 8, color: '#1976a1'}}>10 bids</Text>
									</View>

									<Text style={{fontSize: 10, color: '#1976a1'}}>$222</Text>
								</View>
							</View>

							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.bottomView}>
									<View style={styles.bottomLeftView}>
										<Text style={{fontSize: 10, color: '#33cba4'}}>Jhon Carter</Text>
										<Text style={{fontSize: 8, color: '#1976a1'}}>10 bids</Text>
									</View>

									<Text style={{fontSize: 10, color: '#1976a1'}}>$222</Text>
								</View>
							</View>
						</View>

						<View style={styles.imageView}>
							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.bottomView}>
									<View style={styles.bottomLeftView}>
										<Text style={{fontSize: 10, color: '#33cba4'}}>Jhon Carter</Text>
										<Text style={{fontSize: 8, color: '#1976a1'}}>10 bids</Text>
									</View>

									<Text style={{fontSize: 10, color: '#1976a1'}}>$222</Text>
								</View>
							</View>

							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.bottomView}>
									<View style={styles.bottomLeftView}>
										<Text style={{fontSize: 10, color: '#33cba4'}}>Jhon Carter</Text>
										<Text style={{fontSize: 8, color: '#1976a1'}}>10 bids</Text>
									</View>

									<Text style={{fontSize: 10, color: '#1976a1'}}>$222</Text>
								</View>
							</View>
						</View>

						<View style={styles.imageView}>
							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.bottomView}>
									<View style={styles.bottomLeftView}>
										<Text style={{fontSize: 10, color: '#33cba4'}}>Jhon Carter</Text>
										<Text style={{fontSize: 8, color: '#1976a1'}}>10 bids</Text>
									</View>

									<Text style={{fontSize: 10, color: '#1976a1'}}>$222</Text>
								</View>
							</View>

							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.bottomView}>
									<View style={styles.bottomLeftView}>
										<Text style={{fontSize: 10, color: '#33cba4'}}>Jhon Carter</Text>
										<Text style={{fontSize: 8, color: '#1976a1'}}>10 bids</Text>
									</View>

									<Text style={{fontSize: 10, color: '#1976a1'}}>$222</Text>
								</View>
							</View>
						</View>
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
		paddingTop: 30,
		paddingBottom: 40,
		paddingLeft: 30,
		paddingRight: 30,
	},

  container1: {
		paddingTop: 30,
		paddingBottom: 40,
		paddingLeft: 35,
		paddingRight: 35,
	},

	imageView: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginBottom: 7,
		
	},

	personImage: {
		width: Dimensions.get('window').width / 2 - 40,
		height: Dimensions.get('window').width /2 - 65,
		borderWidth: 5,
		borderColor: '#edecea',
		borderRadius: 3,
		marginBottom: 5,
	},

	bottomView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		zIndex: 1,
		
	},

	bottomLeftView: {
		flexDirection: 'column',
	},

	star: {
		width: 10,
		height: 10,
		marginLeft: 3,
		zIndex: 1,
	}
	
});



