import React from 'react';
import {Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from '../screens/ProfileScreen';
import HomeStackScreen from './HomeStackScreen';
import TeamStackScreen from './TeamStackScreen';
import MatchStackScreen from './MatchStackScreen';
import RankStackScreen from './RankStackScreen';
export default MainStackScreens = () => {
  //const MainStack = createBottomTabNavigator();
  const MainStack = createMaterialBottomTabNavigator();
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
              <MaterialCommunityIcons
                name="soccer"
                color={focused ? 'red' : 'white'}
                size={26}
              />
            );
          } else if (route.name === 'TeamStackScreen') {
            return (
              <MaterialCommunityIcons
                name="microsoft-teams"
                color={focused ? 'red' : 'white'}
                size={26}
              />
            );
          } else if (route.name === 'MatchStackScreen') {
            return (
              <MaterialCommunityIcons
                name="soccer-field"
                color={focused ? 'red' : 'white'}
                size={26}
              />
            );
          } else if (route.name === 'RankStackScreen') {
            return (
              <MaterialCommunityIcons
                name="trophy-outline"
                color={focused ? 'red' : 'white'}
                size={26}
              />
            );
          } else if (route.name === 'Preference') {
            return (
              <MaterialCommunityIcons
                name="stadium"
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
        options={{tabBarLabel: 'Home', tabBarColor: '#333333'}}
      />
      <MainStack.Screen
        name="TeamStackScreen"
        component={TeamStackScreen}
        options={{tabBarLabel: 'Team', tabBarColor: '#0099cc'}}
      />
      <MainStack.Screen
        name="MatchStackScreen"
        component={MatchStackScreen}
        options={{tabBarLabel: 'Match', tabBarColor: '#999999'}}
      />
      <MainStack.Screen
        name="RankStackScreen"
        component={RankStackScreen}
        options={{tabBarLabel: 'Rank', tabBarColor: '#0099cc'}}
      />
      <MainStack.Screen
        name="Preference"
        component={ProfileScreen}
        options={{tabBarLabel: 'Stadium', tabBarColor: '#333333'}}
      />
    </MainStack.Navigator>
  );
};
