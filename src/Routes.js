import React, { Component } from 'react';
import { Router, Stack, Scene, StyleSheet } from 'react-native-router-flux';
import { createStackNavigator } from 'react-navigation'; 


import Loading from './components/Loading';
import Home from './components/home/Home';
import CatcherLogin from './components/catcher/CatcherLogin';
import CatcherPassReset from './components/catcher/CatcherPassReset';
import CatcherSignup from './components/catcher/CatcherSignup';
import CatcherDetail from './components/catcher/CatcherDetail';
import CatcherAuction from './components/catcher/CatcherAuction';
import CatcherAuction2 from './components/catcher/CatcherAuction2';
import CatcherCreateAuction from './components/catcher/CatcherCreateAuction';
import CatcherPhotoPrice from './components/catcher/CatcherPhotoPrice';
import CatcherEventList from './components/catcher/CatcherEventList';
import CatcherFindEvent from './components/catcher/CatcherFindEvent';
import CatcherEventDetail from './components/catcher/CatcherEventDetail';
import CatcherSoldPhotos from './components/catcher/CatcherSoldPhotos';
import CatcherSoldPhoto from './components/catcher/CatcherSoldPhoto';
import ActiveBidPhotos from './components/catcher/ActiveBidPhotos';
import CatcherFollowers from './components/catcher/CatcherFollowers';
import CatcherFollowing from './components/catcher/CatcherFollowing';
import CelebrityFollowing from './components/catcher/CelebrityFollowing';
import CatcherPhotos from './components/catcher/CatcherPhotos';
import All from './components/catcher/All';
import Popular from './components/catcher/Popular';
import Latest from './components/catcher/Latest';
import FavoriteCatcher from './components/catcher/FavoriteCatcher';
import FavoriteCelebrity from './components/catcher/FavoriteCelebrity';
import FavoriteSubscriber from './components/catcher/FavoriteSubscriber';
import PhotoCategories from './components/catcher/PhotoCategories';
import CatcherDashboard from './components/catcher/CatcherDashboard';
import Athletes from './components/catcher/Athletes';
import Celebrities from './components/catcher/Celebrities';
import Musicians from './components/catcher/Musicians';
import Rappers from './components/catcher/Rappers';
import Fashion from './components/catcher/Fashion';
import Others from './components/catcher/Others';
import UploadPhoto from './components/catcher/UploadPhoto';

import Subscriber from './components/subscriber/Subscriber';
import Celebrity from './components/celebrity/Celebrity';

const Routes = createStackNavigator(
  {
    Loading							 : { screen: Loading },
    Home								 : { screen: Home },
    CatcherLogin				 : { screen: CatcherLogin },
    // CatcherSignup				 : { screen: CatcherSignup },
    // CatcherPassReset		 : { screen: CatcherPassReset },
    // PhotoCategories			 : { screen: PhotoCategories },
    // CatcherAuction			 : { screen: CatcherAuction },
    // ActiveBidPhotos			 : { screen: ActiveBidPhotos },
    // All									 : { screen: All },
    // Athletes						 : { screen: Athletes },
    // CatcherCreateAuction : { screen: CatcherCreateAuction },
    // CatcherDashboard		 : { screen: CatcherDashboard },
    // CatcherDetail				 : { screen: CatcherDetail },
    // CatcherEventDetail	 : { screen: CatcherEventDetail },
    // CatcherEventList		 : { screen: CatcherEventList },
    // CatcherFindEvent		 : { screen: CatcherFindEvent },
    // CatcherFollowers		 : { screen: CatcherFollowers },
    // CatcherFollowing		 : { screen: CatcherFollowing },
    // CatcherPhotoPrice		 : { screen: CatcherPhotoPrice },
    // CatcherPhotos				 : { screen: CatcherPhotos },
    // CatcherSoldPhoto		 : { screen: CatcherSoldPhoto },
    // CatcherSoldPhotos		 : { screen: CatcherSoldPhotos },
    // Celebrities					 : { screen: Celebrities },
    // CelebrityFollowing	 : { screen: CelebrityFollowing },
    // Fashion							 : { screen: Fashion },
    // FavoriteCatcher			 : { screen: FavoriteCatcher },
    // FavoriteCelebrity		 : { screen: FavoriteCelebrity },
    // FavoriteSubscriber	 : { screen: FavoriteSubscriber },
    // Latest							 : { screen: Latest },
    // Musicians						 : { screen: Musicians },
    // Others							 : { screen: Others },
    // Popular							 : { screen: Popular },
    // Rappers							 : { screen: Rappers },
    // UploadPhoto					 : { screen: UploadPhoto },
	},
	
  {
    initialRouteName: 'Loading',
    
  }
);

// export default class Routes extends Component {
// 	render() {
// 		return(
// 			<Router navigationBarStyle={{backgroundColor: '#31cba5', height: 40}} titleStyle={{color: 'white', fontWeight: 'normal', textAlign: 'center', flex: 1, marginRight: 80}}>
// 				<Stack key="root">
// 					<Scene key="loading" component={Loading}  title="" hideNavBar={true}  />
// 					<Scene key="home" component={Home}  title="" hideNavBar={true}   />
// 					<Scene key="catcher_login"  component={CatcherLogin} title="" hideNavBar={true}  />
// 					<Scene key="subscriber" component={Subscriber} title="Subscriber" hideNavBar={true} />
// 					<Scene key="celebrity" component={Celebrity} title="Celebrity" hideNavBar={true} />
// 					<Scene key="catcher_pass_reset"  component={CatcherPassReset} title="" hideNavBar={true}  />
// 					<Scene key="catcher_signup"  component={CatcherSignup} title="" hideNavBar={true}  />
// 					<Scene key="to_catcher_signup" component={CatcherSignup} title="" hideNavBar={true} />
// 					<Scene key="catcher_profile"  component={CatcherDetail} hideNavBar={true} renderBackButton={() => (null)} title="Catcher Profile"  />
// 					<Scene key="catcher_auction" component={CatcherAuction} hideNavBar={true} renderBackButton={() => (null)} title="Auction"  />
// 					{/* <Scene key="catcher_auction" component={CatcherAuction2} hideNavBar={true} renderBackButton={() => (null)} title="Auction"  /> */}
// 					<Scene key="catcher_create_auction" component={CatcherCreateAuction} hideNavBar={true} renderBackButton={() => (null)} title="Create Auction"  />
// 					<Scene key="catcher_photo_price" component={CatcherPhotoPrice} hideNavBar={true} renderBackButton={() => (null)} title="Photo Price"  />
// 					<Scene key="catcher_event_list"  component={CatcherEventList} hideNavBar={true} renderBackButton={() => (null)} title="Event List"  />
// 					<Scene key="catcher_find_event"  component={CatcherFindEvent} hideNavBar={true} renderBackButton={() => (null)} title="Find Event"  />
// 					<Scene key="catcher_event_detail"  component={CatcherEventDetail} hideNavBar={true} renderBackButton={() => (null)} title="Find Event"  />
// 					<Scene key="catcher_sold_photos"  component={CatcherSoldPhotos} hideNavBar={true} renderBackButton={() => (null)} title="Sold Photo"  />
// 					<Scene key="catcher_sold_photo"  component={CatcherSoldPhoto} hideNavBar={true} renderBackButton={() => (null)} title="Sold Photo"  />
// 					<Scene key="catcher_followers"  component={CatcherFollowers} hideNavBar={true} renderBackButton={() => (null)} title="Followers"  />
// 					<Scene key="catcher_following"  component={CatcherFollowing} hideNavBar={true} renderBackButton={() => (null)} title="Following"  />
// 					<Scene key="celebrity_following"  component={CelebrityFollowing} hideNavBar={true} />
// 					<Scene key="catcher_photos"  component={CatcherPhotos} hideNavBar={true} renderBackButton={() => (null)} title="Photos" />
// 					<Scene key="active_bid_photos"  component={ActiveBidPhotos} hideNavBar={true} renderBackButton={() => (null)} title="Photos" />
// 					<Scene key="all"  component={All} hideNavBar={true} renderBackButton={() => (null)} hideNavBar={true}  />
// 					<Scene key="photo_categories" initial={true} component={PhotoCategroies} hideNavBar={true}  />
// 					<Scene key="catcher_dashboard"  component={CatcherDashboard} hideNavBar={true} />
// 					<Scene key="popular"  component={Popular} hideNavBar={true} />
// 					<Scene key="latest"  component={Latest} hideNavBar={true} />
// 					<Scene key="favorite_catcher"  component={FavoriteCatcher} hideNavBar={true} />
// 					<Scene key="favorite_celebrity"  component={FavoriteCelebrity} hideNavBar={true} />
// 					<Scene key="favorite_subscriber"  component={FavoriteSubscriber} hideNavBar={true} />
// 					<Scene key="athletes"  component={Athletes} hideNavBar={true} />
// 					<Scene key="celebrities"  component={Celebrities} hideNavBar={true} />
// 					<Scene key="musicians"  component={Musicians} hideNavBar={true} />
// 					<Scene key="rappers"  component={Rappers} hideNavBar={true} />
// 					<Scene key="fashion"  component={Fashion} hideNavBar={true} />
// 					<Scene key="others"  component={Others} hideNavBar={true} />
// 					<Scene key="upload_photo"  component={UploadPhoto} hideNavBar={true} />
					
// 				</Stack>
// 			</Router>
// 		)
// 	}
// }

