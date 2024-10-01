import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CoinStore,  HomeScreen} from '@screens';
import {HomeStackParamList} from '@navigators/types';
const Stack = createNativeStackNavigator<HomeStackParamList>();
export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CoinStoreScreen" component={CoinStore} />
    </Stack.Navigator>
  );
};
