import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RankScreen from '../screens/RankScreen';
import MenuButton from '../components/MenuButton';
const RankStack = createStackNavigator();

const RankStackScreen = () => {
  return (
    <RankStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#0067A3'},
        headerTintColor: 'white',
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: '900',
          fontSize: 20,
        },
      }}>
      <RankStack.Screen
        name="Rank"
        component={RankScreen}
        options={{
          headerRight: () => <MenuButton />,
        }}
      />
    </RankStack.Navigator>
  );
};

export default RankStackScreen;
