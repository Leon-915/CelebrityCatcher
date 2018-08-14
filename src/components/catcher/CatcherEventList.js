import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, ImageBackground, Dimensions, Platform, FlatList } from 'react-native';
import BottomImage2 from '../BottomImage2';
import CalendarPicker from 'react-native-calendar-picker';
import Swiper from 'react-native-swiper';



export default class CatcherEventList extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Event List',
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
		const minDate = new Date(); // Today
		const maxDate = new Date(2017, 6, 3);
		
		return(
			<View style={styles.container}>

				<View style={styles.container1}>
					<Image style={styles.bg}
						source={require('../../images/events-top-bg.png')}
						resizeMode="stretch" />
						
					<View style={styles.calendarView}>
						
						<CalendarPicker
							allowRangeSelection={true}
							minDate={minDate}
							maxDate={maxDate}
							width={Dimensions.get('window').width / 2 - 10}
							height={250}
							textStyle={{
								fontSize: 10,
								paddingTop: 5,
								color: '#989898',
							}}
							previousTitle="<"
							nextTitle=">"
							selectedDayColor="blue"
						/>
					</View>	
				</View>
				
				<Swiper style={styles.swiperStyle} paginationStyle={{bottom: 50}}
					dot={<View style={{backgroundColor:'rgba(87,211,185,1)', width: 8, height: 8,
						borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
					activeDot={<View style={{backgroundColor: 'rgba(87,211,185,1)', width: 8, height: 5, 
						borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
				>

					<View style={styles.container2}>	
						<FlatList style={styles.flatListView} 
							data={[
								{name: 'Auction Name', price: '$165',
									keyword: 'Keyword 1. Keyword 2. Keyword 3. Keyword 4.'},
								{name: 'Auction Name', price: '$165',
									keyword: 'Keyword 1. Keyword 2. Keyword 3. Keyword 4.'},
								{name: 'Auction Name', price: '$165',
									keyword: 'Keyword 1. Keyword 2. Keyword 3. Keyword 4.'},
								{name: 'Auction Name', price: '$165',
									keyword: 'Keyword 1. Keyword 2. Keyword 3. Keyword 4.'},
							]}

							renderItem={ ({item}) => 
								<TouchableOpacity onPress={() => this.props.navigation.navigate('CatcherEventDetail')}>
									<View style={styles.item}>
										<View style={styles.itemTop}>
											<View style={styles.itemLeft}>
												<Image style={styles.photo}
														source={require('../../images/carter.png')} />
												<Text style={styles.itemLeftText}>{ item.name }</Text>
											</View>

											<Text style={styles.itemRightText}>{ item.price }</Text>
										</View>

										<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
												source={require('../../images/auction-item-bottom-bg.png')}	>
											<View style={styles.itemBottom}>
												
													<Text style={styles.itemBottomText}>{ item.keyword }</Text>
											</View>
										</ImageBackground>
										
									</View>
								</TouchableOpacity>	
							} 

							keyExtractor={(item, index) => index.toString()}
						/>			
					</View>

					<View style={styles.container2}>	
						<FlatList style={styles.flatListView} 
							data={[
								{name: 'Auction Name', price: '$165',
									keyword: 'Keyword 1. Keyword 2. Keyword 3. Keyword 4.'},
								{name: 'Auction Name', price: '$165',
									keyword: 'Keyword 1. Keyword 2. Keyword 3. Keyword 4.'},
								{name: 'Auction Name', price: '$165',
									keyword: 'Keyword 1. Keyword 2. Keyword 3. Keyword 4.'},
								{name: 'Auction Name', price: '$165',
									keyword: 'Keyword 1. Keyword 2. Keyword 3. Keyword 4.'},
							]}

							renderItem={ ({item}) => 
								<TouchableOpacity onPress={() => this.props.navigation.navigate('CatcherEventDetail')}>
									<View style={styles.item}>
										<View style={styles.itemTop}>
											<View style={styles.itemLeft}>
												<Image style={styles.photo}
														source={require('../../images/carter.png')} />
												<Text style={styles.itemLeftText}>{ item.name }</Text>
											</View>

											<Text style={styles.itemRightText}>{ item.price }</Text>
										</View>

										<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
												source={require('../../images/auction-item-bottom-bg.png')}	>
											<View style={styles.itemBottom}>
												
													<Text style={styles.itemBottomText}>{ item.keyword }</Text>
											</View>
										</ImageBackground>
										
									</View>
								</TouchableOpacity>	
							} 

							keyExtractor={(item, index) => index.toString()}
						/>			
					</View>

					<View style={styles.container2}>	
						<FlatList style={styles.flatListView} 
							data={[
								{name: 'Auction Name', price: '$165',
									keyword: 'Keyword 1. Keyword 2. Keyword 3. Keyword 4.'},
								{name: 'Auction Name', price: '$165',
									keyword: 'Keyword 1. Keyword 2. Keyword 3. Keyword 4.'},
								{name: 'Auction Name', price: '$165',
									keyword: 'Keyword 1. Keyword 2. Keyword 3. Keyword 4.'},
								{name: 'Auction Name', price: '$165',
									keyword: 'Keyword 1. Keyword 2. Keyword 3. Keyword 4.'},
							]}

							renderItem={ ({item}) => 
								<TouchableOpacity onPress={() => this.props.navigation.navigate('CatcherEventDetail')}>
									<View style={styles.item}>
										<View style={styles.itemTop}>
											<View style={styles.itemLeft}>
												<Image style={styles.photo}
														source={require('../../images/carter.png')} />
												<Text style={styles.itemLeftText}>{ item.name }</Text>
											</View>

											<Text style={styles.itemRightText}>{ item.price }</Text>
										</View>

										<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
												source={require('../../images/auction-item-bottom-bg.png')}	>
											<View style={styles.itemBottom}>
												
													<Text style={styles.itemBottomText}>{ item.keyword }</Text>
											</View>
										</ImageBackground>
										
									</View>
								</TouchableOpacity>	
							} 

							keyExtractor={(item, index) => index.toString()}
						/>			
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
	},

	container1: {
		alignItems: 'center',
		
	},

	container2: {
		position: 'relative',
		marginTop: 15,
		height: Dimensions.get('window').height / 2 - 60,
	},

	swiperStyle: {

	},

	bg: {
		height: 170,
		width: Dimensions.get('window').width,
	},

	calendarView: {
		alignItems: 'center',
		marginTop: -110,
		paddingBottom: 10,
		backgroundColor: '#ffffff',
		width: Dimensions.get('window').width / 2 - 10,
		borderWidth: 1,
		borderColor: '#9b9b9b',
	},

	styleCalendar: {
		width: 250,
		borderColor: '#afafaf',
		borderWidth: 1,
		shadowColor: '#cccccc',
	},
	
	item : {
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		marginLeft: 30,
		marginRight: 30,
		marginBottom: 10,
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



	flatListView: {
		backgroundColor : '#ffffff',
    
	},

	
	

	

	
});
