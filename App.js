/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Tararam!</Text>
        <Text style={styles.instructions}>Joya Nafa Ulya</Text>
        <Text style={styles.instructions}>23</Text>
        <Text style={styles.instructions}>XI RPL 2</Text>
        <Image style={styles.gambar}
        source={require('./content/image/nafa.jpg')}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  gambar:{
  	width: 300,
  	height: 300,
  }
});
