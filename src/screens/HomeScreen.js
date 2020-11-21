import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        <Icon name="rocket" size={30} color="#900" />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
