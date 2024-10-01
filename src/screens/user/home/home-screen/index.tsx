import React from 'react';
import {View} from 'react-native';
import style from './style';
import {Button} from '@components';
import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigationProp} from '@navigators/types';
export const HomeScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();
  const startGame = () => navigation.navigate('GameScreen');
  const addCoin = () => navigation.navigate('CoinStoreScreen');
  return (
    <View style={style.container}>
      <Button text="Start Game" color="white" onPress={startGame} />
      <Button text="Add Coin" color="white" onPress={addCoin} />
    </View>
  );
};
