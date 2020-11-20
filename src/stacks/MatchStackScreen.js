import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MatchScreen from '../screens/MatchScreen';
import MenuButton from '../components/MenuButton';
const MatchStack = createStackNavigator();

const MatchStackScreen = () => {
  return (
    <MatchStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#0067A3'},
        headerTintColor: 'white',
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: '900',
          fontSize: 20,
        },
      }}>
      <MatchStack.Screen
        name="Match"
        component={MatchScreen}
        options={{
          headerRight: () => <MenuButton />,
        }}
      />
    </MatchStack.Navigator>
  );
};

export default MatchStackScreen;
