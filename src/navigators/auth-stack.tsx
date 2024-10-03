import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen, GameScreen, PaymentScreen} from '@screens';
import {AuthStackParamList} from '@navigators/types';
import {BottomTab} from './bottom-tab';
import {AdminBottomTab} from '@navigators';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator<AuthStackParamList>();
export const AuthStack = () => {
  const [userType, setUserType] = useState<string>('');
  useEffect(() => {
    AsyncStorage.getItem('@USERTYPE').then((res: any) => {
      if (res !== null) {
        setUserType(JSON.parse(res).type);
      }
    });
  }, []);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {userType === 'admin' ? (
        <Stack.Screen name="AdminBottomTab" component={AdminBottomTab} />
      ) : userType === 'user' ? (
        <>
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="GameScreen" component={GameScreen} />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        </>
      ) : (
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
      )}
    </Stack.Navigator>
  );
};
