import React from 'react';
import {Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faFutbol,
  faUsers,
  faCalendarCheck,
  faCog,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';

import ProfileScreen from '../screens/ProfileScreen';
import HomeStackScreen from './HomeStackScreen';
import TeamStackScreen from './TeamStackScreen';
import MatchStackScreen from './MatchStackScreen';
import RankStackScreen from './RankStackScreen';
export default MainStackScreens = () => {
  const MainStack = createBottomTabNavigator();
  //const MainStack = createMaterialBottomTabNavigator();
  const tabBarOtions = {
    showLabel: false,
    style: {
      backgroundColor: 'white',
      paddingBottom: Dimensions.get('window').height < 800 ? 5 : 15,
      // eslint-disable-next-line no-dupe-keys
      backgroundColor: '#212121',
    },
  };

  return (
    <MainStack.Navigator
      tabBarOptions={tabBarOtions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'HomeStackScreen') {
            return (
              <FontAwesomeIcon
                icon={faFutbol}
                color={focused ? 'red' : 'white'}
                size={26}
              />
            );
          } else if (route.name === 'TeamStackScreen') {
            return (
              <FontAwesomeIcon
                icon={faUsers}
                color={focused ? 'red' : 'white'}
                size={26}
              />
            );
          } else if (route.name === 'MatchStackScreen') {
            return (
              <FontAwesomeIcon
                icon={faCalendarCheck}
                color={focused ? 'red' : 'white'}
                size={26}
              />
            );
          } else if (route.name === 'RankStackScreen') {
            return (
              <FontAwesomeIcon
                icon={faTrophy}
                color={focused ? 'red' : 'white'}
                size={26}
              />
            );
          } else if (route.name === 'Preference') {
            return (
              <FontAwesomeIcon
                icon={faCog}
                color={focused ? 'red' : 'white'}
                size={26}
              />
            );
          }
        },
      })}>
      <MainStack.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <MainStack.Screen
        name="TeamStackScreen"
        component={TeamStackScreen}
        options={{tabBarLabel: 'Team'}}
      />
      <MainStack.Screen
        name="MatchStackScreen"
        component={MatchStackScreen}
        options={{tabBarLabel: 'Match'}}
      />
      <MainStack.Screen
        name="RankStackScreen"
        component={RankStackScreen}
        options={{tabBarLabel: 'Rank'}}
      />
      <MainStack.Screen
        name="Preference"
        component={ProfileScreen}
        options={{tabBarLabel: 'faCog'}}
      />
    </MainStack.Navigator>
  );
};
