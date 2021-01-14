import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import {
  Button, SafeAreaView, StyleSheet, Text, View, Image,
  TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback
} from 'react-native';
import HomePage from './app/screens/HomePage';
import ImageScreen from './app/screens/ImageScreen';

export default function App() {

  return (
     <ImageScreen/>
  );
}