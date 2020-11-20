import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MenuButton from '../components/MenuButton';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#0067A3'},
        headerTintColor: 'white',
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: '900',
          fontSize: 20,
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Footgo',
          headerRight: () => <MenuButton />,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
