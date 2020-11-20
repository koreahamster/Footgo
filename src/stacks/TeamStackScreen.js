import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TeamScreen from '../screens/TeamScreen';
import MenuButton from '../components/MenuButton';
const TeamStack = createStackNavigator();

const TeamStackScreen = () => {
  return (
    <TeamStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#0067A3'},
        headerTintColor: 'white',
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: '900',
          fontSize: 20,
        },
      }}>
      <TeamStack.Screen
        name="Team"
        component={TeamScreen}
        options={{
          headerRight: () => <MenuButton />,
        }}
      />
    </TeamStack.Navigator>
  );
};

export default TeamStackScreen;
