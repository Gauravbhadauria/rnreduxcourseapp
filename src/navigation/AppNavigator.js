import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Users from '../screens/Users';
import AddUser from '../screens/AddUser';
import UpdateUser from '../screens/UpdateUser';
import OnlineUsers from '../screens/OnlineUsers';
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnlineUsers" component={OnlineUsers} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="AddUser" component={AddUser} />
        <Stack.Screen name="UpdateUser" component={UpdateUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
