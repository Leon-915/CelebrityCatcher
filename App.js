import React from 'react';
import { Button, Image, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation'; 


import Home from './src/components/home/Home';
import Loading from './src/components/Loading';

//=== Catcher ====
import Login from './src/components/catcher/Login';
import Signup from './src/components/catcher/Signup';
import LeftSideMenu from './src/components/catcher/LeftSideMenu';
import Followers from './src/components/catcher/Followers';
import Following from './src/components/catcher/Following';
import SoldPhotos from './src/components/catcher/SoldPhotos';
import Photos from './src/components/catcher/Photos';

import PassReset from './src/components/catcher/PassReset';
import CatcherSignup from './src/components/catcher/CatcherSignup';
import CatcherProfile from './src/components/catcher/CatcherProfile';
import CatcherAuction from './src/components/catcher/CatcherAuction';
import CatcherAuction2 from './src/components/catcher/CatcherAuction2';
import CatcherCreateAuction from './src/components/catcher/CatcherCreateAuction';
import CatcherPhotoPrice from './src/components/catcher/CatcherPhotoPrice';
import CatcherEventList from './src/components/catcher/CatcherEventList';
import CatcherFindEvent from './src/components/catcher/CatcherFindEvent';
import CatcherEventDetail from './src/components/catcher/CatcherEventDetail';
import CatcherSoldPhoto from './src/components/catcher/CatcherSoldPhoto';
import ActiveBidPhotos from './src/components/catcher/ActiveBidPhotos';
import CatcherFollowing from './src/components/catcher/CatcherFollowing';
import PhotoDetails from './src/components/catcher/PhotoDetails';
import Rating from './src/components/catcher/Rating';

import CatcherLatestUpdate from './src/components/catcher/CatcherLatestUpdate';
import PhotoCategories from './src/components/catcher/PhotoCategories';
import CatcherDashboard from './src/components/catcher/CatcherDashboard';
import Settings from './src/components/catcher/Settings';
import Athletes from './src/components/catcher/Athletes';
import Celebrities from './src/components/catcher/Celebrities';
import Musicians from './src/components/catcher/Musicians';
import Rappers from './src/components/catcher/Rappers';
import Fashion from './src/components/catcher/Fashion';
import Others from './src/components/catcher/Others';
import UploadPhoto from './src/components/catcher/UploadPhoto';
import UpgradePhoto from './src/components/catcher/UpgradePhoto';


//=== Subscriber ===
import SubscriberFollowing from './src/components/subscriber/SubscriberFollowing';
import SubscriberProfile from './src/components/subscriber/SubscriberProfile';
import PurchasedPhotos from './src/components/subscriber/PurchasedPhotos';
import PlaceBid from './src/components/subscriber/PlaceBid';
import CheckOut from './src/components/subscriber/CheckOut';
import SubscirberSoldPhoto from './src/components/subscriber/SubscirberSoldPhoto';
import Payment from './src/components/subscriber/Payment';
import AuctionCategories from './src/components/subscriber/AuctionCategories';
import SubscriberAthletes from './src/components/subscriber/SubscriberAthletes';
import SubscriberCelebrities from './src/components/subscriber/SubscriberCelebrities';
import SubscriberMusicians from './src/components/subscriber/SubscriberMusicians';
import SubscriberRappers from './src/components/subscriber/SubscriberRappers';
import SubscriberFashion from './src/components/subscriber/SubscriberFashion';
import SubscriberOthers from './src/components/subscriber/SubscriberOthers';


//=== Celebrity ===
import CelebrityFollowing from './src/components/celebrity/CelebrityFollowing';
import CelebrityProfile from './src/components/celebrity/CelebrityProfile';



import Test from './src/Test';
import Test1 from './src/Test1';





export default class App extends React.Component {
  render() {
    return <Routes />;
  }
}

const Routes = createStackNavigator(
  {
    //=== Common Routes ===
    Loading							 : { screen: Loading },
    Home								 : { screen: Home },
    Login							   : { screen: Login },
    Signup							 : { screen: Signup },
    PassReset		         : { screen: PassReset },
    
    LeftSideMenu				 : { screen: LeftSideMenu },
    
    Followers		         : { screen: Followers },
    Following		         : { screen: Following },
    Photos				       : { screen: Photos },
    SoldPhotos	      	 : { screen: SoldPhotos },
    
    Athletes						 : { screen: Athletes },
    Fashion							 : { screen: Fashion },
    Musicians						 : { screen: Musicians },
    Others							 : { screen: Others },
    Rappers							 : { screen: Rappers },
    Celebrities					 : { screen: Celebrities },
    
    Settings        		 : { screen: Settings },
    
    //=== Catcher Routes ===
    
    CatcherSignup				 : { screen: CatcherSignup },
    PhotoCategories			 : { screen: PhotoCategories },
    CatcherAuction			 : { screen: CatcherAuction },
    CatcherAuction2			 : { screen: CatcherAuction2 },
    ActiveBidPhotos			 : { screen: ActiveBidPhotos },
    CatcherLatestUpdate	 : { screen: CatcherLatestUpdate },
    CatcherCreateAuction : { screen: CatcherCreateAuction },
    CatcherDashboard		 : { screen: CatcherDashboard },
    CatcherProfile			 : { screen: CatcherProfile },
    CatcherEventDetail	 : { screen: CatcherEventDetail },
    CatcherEventList		 : { screen: CatcherEventList },
    CatcherFindEvent		 : { screen: CatcherFindEvent },
    CatcherPhotoPrice		 : { screen: CatcherPhotoPrice },
    CatcherSoldPhoto		 : { screen: CatcherSoldPhoto },
    CatcherFollowing	   : { screen: CatcherFollowing },
    
    UploadPhoto					 : { screen: UploadPhoto },
    UpgradePhoto				 : { screen: UpgradePhoto },
    PhotoDetails				 : { screen: PhotoDetails },
    Rating      				 : { screen: Rating },


    //=== Subscriber Routes ===
    SubscriberFollowing		  : { screen: SubscriberFollowing },
    SubscriberProfile 		  : { screen: SubscriberProfile },
    PurchasedPhotos    		  : { screen: PurchasedPhotos },
    PlaceBid    		        : { screen: PlaceBid },
    CheckOut    		        : { screen: CheckOut },
    SubscirberSoldPhoto    	: { screen: SubscirberSoldPhoto },
    Payment               	: { screen: Payment },
    AuctionCategories      	: { screen: AuctionCategories },
    SubscriberAthletes     	: { screen: SubscriberAthletes },
    SubscriberCelebrities  	: { screen: SubscriberCelebrities },
    SubscriberMusicians    	: { screen: SubscriberMusicians },
    SubscriberRappers     	: { screen: SubscriberRappers },
    SubscriberFashion     	: { screen: SubscriberFashion },
    SubscriberOthers      	: { screen: SubscriberOthers },
    


    //=== Celebrity Routes ===  
    CelebrityFollowing		  : { screen: CelebrityFollowing },
    CelebrityProfile	  	  : { screen: CelebrityProfile },
    


    Test : { screen: Test },
    Test1 : { screen: Test1 },
    
    
	},
	
  {
    initialRouteName: 'Home',
    
  }
);



