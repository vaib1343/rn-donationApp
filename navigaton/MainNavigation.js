import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import React from 'react';
import SingleDonationItem from '../screens/SingleDonationItem/SingleDonationItem';

const Stack = createStackNavigator();

export const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{
        header: () => null,
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.singleDonationItem}
        component={SingleDonationItem}
      />
    </Stack.Navigator>
  );
};
