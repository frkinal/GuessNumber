import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppSelector} from '@hooks';
import {GameScreen} from '@screens';
import {AuthStackParamList} from '@navigators/types';
import {BottomTab} from './bottom-tab';
import {AdminBottomTab} from '@navigators';
const Stack = createNativeStackNavigator<AuthStackParamList>();
export const AuthStack = () => {
  const {isAdmin} = useAppSelector(state => state.auth);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAdmin ? (
        <Stack.Screen name="AdminBottomTab" component={AdminBottomTab} />
      ) : (
        <>
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="GameScreen" component={GameScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
