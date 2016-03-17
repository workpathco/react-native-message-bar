/**
 * Name: MessageBar Test Project
 * Description: A Project to test the Message Bar Component
 * https://github.com/KBLNY/react-native-message-bar
 */
'use strict';

var MessageBarManager = require('./MessageBarManager.js');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


class CustomChildComponent extends Component {

  constructor(props) {
    super(props)
  }


  showAlertMessage() {
    // Show the current alert, which is mounted in the Parent's page by calling
    // the classic method showCurrentAlert(state) where state is the new state of the message bar alert

    // Declare the new state of the parent's message bar alert
    var newState = {
      title: 'Alert triggered from child component',
      message: "You can show an alert which is located on its parent's page. You can then declare only one MessageBar. This is useful to fix absolute position in child component",
      avatarUrl: null,
      type: 'success',
    };
    MessageBarManager.showCurrentAlert(newState);
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is a child component. Tap the button below to display its parent s alert message bar
        </Text>

        <TouchableOpacity style={styles.buttonContainer} onPress={this.showAlertMessage}>
          <Text style={styles.button}>Show Alert from a Child Component</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

module.exports = CustomChildComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  welcome: {
    textAlign: 'center',
    margin: 10,
  },
  buttonContainer: {
  },
  button: {
    textAlign: 'center',
    backgroundColor: 'lightgray',
    color: 'white',
    padding: 10,
    margin: 10,
  }
});