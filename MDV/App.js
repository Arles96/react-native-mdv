/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { WebView } from "react-native-webview";

export default class App extends Component {
  render() {
    return (
      <WebView
        source={{ uri: "https://midoctorvirtual.com/signIn" }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
