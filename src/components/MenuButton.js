import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {useNavigation, DrawerActions} from '@react-navigation/native';

const MenuButton = () => {
  const navigation = useNavigation();
  const openMenu = () => navigation.dispatch(DrawerActions.openDrawer());

  return (
    <TouchableOpacity onPress={openMenu}>
      <FontAwesomeIcon
        icon={faBars}
        size={26}
        style={{marginRight: 10, color: 'white'}}
      />
    </TouchableOpacity>
  );
};

export default MenuButton;
