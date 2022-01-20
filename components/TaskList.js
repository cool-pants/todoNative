import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const TaskDetails = ({ navigation, route }) => {
  return (
    <Text> Task : {route.params.task} </Text>
  );
}

export default TaskDetails;
