import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './Screens/Splash';
import Home from './Screens/Home';
import Success from './Screens/Success';
import Pending from './Screens/Pending';
import Completed from './Screens/Completed';
import CallAmb from './Screens/CallAmb';
import BookAppointment from './Screens/BookAppointmt';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Splash}
          name="Splash"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Home}
          name="Home"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={BookAppointment}
          name="BookAppointment"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Success}
          name="Success"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Pending}
          name="Pending"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Completed}
          name="Completed"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={CallAmb}
          name="CallAmb"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
