import React from 'react';
import {Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {Ionicons} from '@expo/vector-icons';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faFutbol,
  faUser,
  faCalendarAlt,
  faCog,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';

import HomeScreen from '../screens/HomeScreen';
import RankScreen from '../screens/RankScreen';
import TeamScreen from '../screens/TeamScreen';
import PreferenceScreen from '../screens/PreferenceScreen';
import MatchScreen from '../screens/MatchScreen';
import ProfileScreen from '../screens/ProfileScreen';
export default MainStackScreens = () => {
  const MainStack = createBottomTabNavigator();

  const tabBarOtions = {
    showLabel: false,
    style: {
      backgroundColor: 'white',
      paddingBottom: Dimensions.get('window').height < 800 ? 5 : 15,
    },
  };

  return (
    <MainStack.Navigator
      tabBarOptions={tabBarOtions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return (
              <FontAwesomeIcon
                icon={faFutbol}
                color={focused ? 'black' : 'grey'}
                size={26}
              />
            );
          } else if (route.name === 'Team') {
            return (
              <FontAwesomeIcon
                icon={faUser}
                color={focused ? 'black' : 'grey'}
                size={26}
              />
            );
          } else if (route.name === 'Match') {
            return (
              <FontAwesomeIcon
                icon={faCalendarAlt}
                color={focused ? 'black' : 'grey'}
                size={26}
              />
            );
          } else if (route.name === 'Rank') {
            return (
              <FontAwesomeIcon
                icon={faTrophy}
                color={focused ? 'black' : 'grey'}
                size={26}
              />
            );
          } else if (route.name === 'Preference') {
            return (
              <FontAwesomeIcon
                icon={faCog}
                color={focused ? 'black' : 'grey'}
                size={26}
              />
            );
          }
        },
      })}>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <MainStack.Screen
        name="Team"
        component={TeamScreen}
        options={{tabBarLabel: 'Team'}}
      />
      <MainStack.Screen
        name="Match"
        component={MatchScreen}
        options={{tabBarLabel: 'Match'}}
      />
      <MainStack.Screen
        name="Rank"
        component={RankScreen}
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
