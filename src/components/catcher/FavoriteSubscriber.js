import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, NavigationBar, ScrollView, Dimensions, FlatList } from 'react-native';
import BottomImage2 from '../BottomImage2';
import Swiper from 'react-native-swiper';


export default class FavoriteSubscriber extends Component {

	render() {
		return(
			
			<Swiper style={styles.swiperStyle} paginationStyle={{ bottom: 50 }}
				dot={<View style={{backgroundColor:'rgba(87,211,185,1)', width: 8, height: 8,
					borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
				activeDot={<View style={{backgroundColor: 'rgba(87,211,185,1)', width: 8, height: 5, 
					borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
				>

				<View style={{height: Dimensions.get('window').height - 220}} >
					<FlatList style={styles.container1} 
						data={[
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
						]}

						renderItem={ ({item}) => 
							<View style={styles.item}>
								<View style={styles.itemTop}>
									<View style={styles.itemLeft}>
										<Image style={{marginRight: -2, marginTop: -5}}
												source={require('../../images/online-icon.png')} />
										<Image style={styles.photo}
												source={require('../../images/carter.png')} />
										<View style={{marginTop: -5,}}>
											<Text style={styles.itemLeftText}>{ item.name }</Text>
											<View style={{flexDirection: 'row',}}>
												<Image style={{width: 10, height: 10, marginRight: 5, marginTop: 3,}}
													source={require('../../images/person-1.png')} />
												<Text style={{fontSize: 10, color: '#4ba9c5',}}>{ item.type }</Text>
											</View>	
										</View>
									</View>

									<View style={styles.followButton}>
										
										<View style={styles.buttonContent}>
											<Text style={styles.followText}>Following</Text>
											<Image style={styles.personPlus}
												source={require('../../images/heart.png')} />
										</View>
											
									</View>
								</View>
							</View>
						} 

						keyExtractor={(item, index) => index.toString()}
					/>
				</View>

				<View style={{height: Dimensions.get('window').height - 220}} >
					<FlatList style={styles.container1} 
						data={[
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
						]}

						renderItem={ ({item}) => 
							<View style={styles.item}>
								<View style={styles.itemTop}>
									<View style={styles.itemLeft}>
										<Image style={{marginRight: -2, marginTop: -5}}
												source={require('../../images/online-icon.png')} />
										<Image style={styles.photo}
												source={require('../../images/carter.png')} />
										<View style={{marginTop: -5,}}>
											<Text style={styles.itemLeftText}>{ item.name }</Text>
											<View style={{flexDirection: 'row',}}>
												<Image style={{width: 10, height: 10, marginRight: 5, marginTop: 3,}}
													source={require('../../images/person-1.png')} />
												<Text style={{fontSize: 10, color: '#4ba9c5',}}>{ item.type }</Text>
											</View>	
										</View>
									</View>

									<View style={styles.followButton}>
										
										<View style={styles.buttonContent}>
											<Text style={styles.followText}>Following</Text>
											<Image style={styles.personPlus}
												source={require('../../images/heart.png')} />
										</View>
											
									</View>
								</View>
							</View>
						} 

						keyExtractor={(item, index) => index.toString()}
					/>
				</View>

				<View style={{height: Dimensions.get('window').height - 220}} >
					<FlatList style={styles.container1} 
						data={[
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
							{name: 'Devin', type: 'Rapper'},
						]}

						renderItem={ ({item}) => 
							<View style={styles.item}>
								<View style={styles.itemTop}>
									<View style={styles.itemLeft}>
										<Image style={{marginRight: -2, marginTop: -5}}
												source={require('../../images/online-icon.png')} />
										<Image style={styles.photo}
												source={require('../../images/carter.png')} />
										<View style={{marginTop: -5,}}>
											<Text style={styles.itemLeftText}>{ item.name }</Text>
											<View style={{flexDirection: 'row',}}>
												<Image style={{width: 10, height: 10, marginRight: 5, }}
													source={require('../../images/person-1.png')} />
												<Text style={{fontSize: 10, color: '#4ba9c5',}}>{ item.type }</Text>
											</View>	
										</View>
									</View>

									<View style={styles.followButton}>
										
										<View style={styles.buttonContent}>
											<Text style={styles.followText}>Following</Text>
											<Image style={styles.personPlus}
												source={require('../../images/heart.png')} />
										</View>
											
									</View>
								</View>
							</View>
						} 

						keyExtractor={(item, index) => index.toString()}
					/>
				</View>
			</Swiper>

			
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
	},

	buttonBg: {
		width: 90,
		height: 25,
	},

	buttonContent: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},

	followButton: {
	},

	personPlus: {
		marginRight: 5,
		marginTop: 4,
		width: 15,
		height: 15,
	},

	followText: {
		color: '#b4b4b4',
		fontSize: 12,
		marginRight: 10,
	},

	item : {
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		marginLeft: 25,
		marginRight: 25,
		marginTop: 15,
		borderRadius: 5,
		borderWidth: 1,	
		borderColor: '#ccf1fa',
		borderRadius: 5,
	},

	itemTop: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 12,
		paddingBottom: 7,
	},

	itemLeft: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
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
	
});



