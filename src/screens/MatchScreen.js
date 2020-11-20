import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default TeamScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Match Screen</Text>
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
