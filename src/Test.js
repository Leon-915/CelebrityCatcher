import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'; 
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import All from './components/catcher/All';
import Popular from './components/catcher/Popular';
import Latest from './components/catcher/Latest';
import FavoriteCatcher from './components/catcher/FavoriteCatcher';
import FavoriteCelebrity from './components/catcher/FavoriteCelebrity';
import FavoriteSubscriber from './components/catcher/FavoriteSubscriber';


export default class Test extends React.Component {
  render() {
    return (
      <ScrollableTabView locked={true} style={{flex: 1}}
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

