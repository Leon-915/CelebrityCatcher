import React from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native';
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
      <KeyboardAvoidingView style={{backgroundColor: 'white', flex: 1 }} behavior="padding" enabled>
        <TextInput style={{marginTop: 30}} placeholder="first" />
        <TextInput style={{marginTop: 30}} placeholder="first" />
        <TextInput style={{marginTop: 30}} placeholder="first" />
        <TextInput style={{marginTop: 30}} placeholder="prev" />
        <TextInput style={{marginTop: 30}} placeholder="last" />
      </KeyboardAvoidingView>
    );
  }
}

