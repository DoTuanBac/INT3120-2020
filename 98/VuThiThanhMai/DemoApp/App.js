/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground
} from 'react-native';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      zip: ''
    }
  }

  _handleTextChange(text){
    console.log(text)
    this.setState({
      zip: text
    })
  }

  render(){
    return (
      <ImageBackground
        source={require('./android/app/src/main/res/drawable/background.png')}
        resizeMode='cover'
        style={styles.backdrop}>
        <View>
          <TextInput 
            style={styles.input}
            onChangeText ={text => this._handleTextChange(text)}/>

          <Text style={styles.welcome}>
            {
              (this.state.zip != '') ?
              <Text>You entered <Text style={styles.enteredData}>{this.state.zip}</Text></Text> :
              <Text>You haven't entered anything yet!</Text>
            }
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    borderWidth: 2,
    margin: 20,
    marginTop: 100,
    padding: 10
  },
  welcome: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#6495ED",
    textAlign: "center"
  },
  enteredData: {
    color: "#000000"
  },
  backdrop:{
    flex: 1,
    flexDirection: 'column'
  }
});

export default App;
