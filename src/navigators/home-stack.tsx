import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CoinStore, GameScreen, HomeScreen} from '@screens';
import {HomeStackParamList} from '@navigators/types';
const Stack = createNativeStackNavigator<HomeStackParamList>();
export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="GameScreen" component={GameScreen} />
      <Stack.Screen name="CoinStoreScreen" component={CoinStore} />
    </Stack.Navigator>
  );
};
