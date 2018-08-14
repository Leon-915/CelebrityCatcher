import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'; 
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import All from './All';
import Popular from './Popular';
import Latest from './Latest';
import FavoriteCatcher from './FavoriteCatcher';
import FavoriteCelebrity from './FavoriteCelebrity';
import FavoriteSubscriber from './FavoriteSubscriber';


export default class TabRoutes extends React.Component {
  render() {
    return (
      <ScrollableTabView locked={true} style={{flex: 1, borderWidth: 0}}
        initialPage={0} tabBarUnderlineStyle={{width: 0, }}
        tabBarActiveTextColor='#7dddc2'
        tabBarInactiveTextColor='rgb(188, 188, 188)'
        renderTabBar={() => <ScrollableTabBar />} >
        
        <All tabLabel="All" />
        <Popular tabLabel="Popular" />
        <Latest tabLabel="Latest" />
        <FavoriteCatcher tabLabel="FavoriteCatcher" />  
        <FavoriteSubscriber tabLabel="FavoriteSubscriber" />
        <FavoriteCelebrity tabLabel="FavoriteCelebrity" />
      </ScrollableTabView>
    );
  }
}

