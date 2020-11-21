import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, DrawerActions} from '@react-navigation/native';

const MenuButton = () => {
  const navigation = useNavigation();
  const openMenu = () => navigation.dispatch(DrawerActions.openDrawer());

  return (
    <TouchableOpacity onPress={openMenu}>
      <MaterialCommunityIcons
        name="menu"
        size={26}
        style={{marginRight: 10, color: 'white'}}
      />
    </TouchableOpacity>
  );
};

export default MenuButton;
