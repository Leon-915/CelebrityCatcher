import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, NavigationBar, ScrollView, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

export default class All extends Component {

	render() {
		return(
			
			<Swiper style={styles.swiperStyle} paginationStyle={{ bottom: 50 }}
				dot={<View style={{backgroundColor:'rgba(87,211,185,1)', width: 8, height: 8,
					borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
				activeDot={<View style={{backgroundColor: 'rgba(87,211,185,1)', width: 8, height: 5, 
					borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
				>

				<View style={{height: Dimensions.get('window').height - 220}} >
					<ScrollView style={styles.container1}>
					
						<View style={styles.imageView}>
							<TouchableOpacity style={{}} >
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</TouchableOpacity>
							
							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

						</View>

						<View style={styles.imageView}>
							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

						</View>

						<View style={styles.imageView}>
							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

						</View>

						<View style={styles.imageView}>
							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

						</View>
					</ScrollView>
				</View>
				
				<View style={{height: Dimensions.get('window').height - 220}} >
					<ScrollView style={styles.container1}>
					
						<View style={styles.imageView}>
							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>
							
							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

						</View>

						<View style={styles.imageView}>
							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

						</View>

						<View style={styles.imageView}>
							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

						</View>

						<View style={styles.imageView}>
							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

						</View>
					</ScrollView>
				</View>

				<View style={{height: Dimensions.get('window').height - 220}} >
					<ScrollView style={styles.container1}>
					
						<View style={styles.imageView}>
							<TouchableOpacity style={{}} >
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</TouchableOpacity>
							
							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

						</View>

						<View style={styles.imageView}>
							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

						</View>

						<View style={styles.imageView}>
							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

						</View>

						<View style={styles.imageView}>
							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

							<View style={{}}>
								<Image style={styles.personImage}
									source={require('../../images/photo-5.png')}	/>
								
								<View style={styles.starView}>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
									<Image style={styles.star}
										source={require('../../images/yellow-star.png')}	/>
								</View>
							</View>

						</View>
					</ScrollView>
				</View>
				

			</Swiper>	
		)
	}
}



const styles = StyleSheet.create({
  container1: {
		paddingTop: 10,
		paddingBottom: 40,
		paddingLeft: 25,
		paddingRight: 25,
	},

	imageView: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginBottom: 7,
		
	},

	personImage: {
		width: Dimensions.get('window').width / 2 - 40,
		height: Dimensions.get('window').width /2 - 50,
		borderWidth: 5,
		borderColor: '#edecea',
		borderRadius: 3,
		marginBottom: 7,
	},

	starView: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		zIndex: 1,
		
	},

	star: {
		width: 10,
		height: 10,
		marginLeft: 3,
		zIndex: 1,
	}
	
});



