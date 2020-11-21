import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainStackScreen from './MainStackScreens';
import ProfileScreen from '../screens/ProfileScreen';
import PreferenceScreen from '../screens/PreferenceScreen';
const DrawerNavigator = createDrawerNavigator();

const DrawStacktScreen = () => {
  return (
    <DrawerNavigator.Navigator>
      <DrawerNavigator.Screen name="Home" component={MainStackScreen} />
      <DrawerNavigator.Screen name="Profile" component={ProfileScreen} />
      <DrawerNavigator.Screen name="Preference" component={PreferenceScreen} />
    </DrawerNavigator.Navigator>
  );
};

export default DrawStacktScreen;
