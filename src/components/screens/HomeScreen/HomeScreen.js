import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../molecules/Header/Header';
import ScreenTemplate from '../../templates/ScreenTemplate/ScreenTemplate';
import {styles} from './HomeScreen.styles';

const HomeScreen = () => {
  return (
    <ScreenTemplate>
      {/* <Header title="Home" /> */}
      <View style={styles.container}></View>
    </ScreenTemplate>
  );
};

export default HomeScreen;
