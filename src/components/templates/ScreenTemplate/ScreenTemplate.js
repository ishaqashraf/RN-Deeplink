import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useTheme} from 'react-native-paper';
import {styles} from './ScreenTemplate.styles';

const ScreenTemplate = ({center, barStyle, style, ...restProps}) => {
  const theme = useTheme();

  return (
    <>
      <SafeAreaView style={{backgroundColor: theme.colors.primary}} />
      <StatusBar barStyle={barStyle} backgroundColor={theme.colors.primary} />
      <SafeAreaView
        style={[styles.body, center && styles.center, style]}
        {...restProps}
      />
    </>
  );
};

export default ScreenTemplate;
