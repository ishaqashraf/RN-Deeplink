import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useTheme} from 'react-native-paper';
import HomeScreen from '../components/screens/HomeScreen/HomeScreen';

const AppStack = createStackNavigator();

const Navigator = () => {
  const theme = useTheme();
  const defaultNavigationOptions = {
    headerTitleStyle: theme.fonts.medium,
    headerBackTitleStyle: theme.fonts.regular,
  };

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Home"
          component={HomeScreen}
          options={defaultNavigationOptions}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
