import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import style from './style';
import {Button, Header} from '@components';
import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigationProp} from '@navigators/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const HomeScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();
  const startGame = () => {
    if (userData?.balance < 100) {
      Alert.alert(
        'Error',
        'The balance in your account is insufficient. Please try again after adding funds.',
      );
    } else {
      navigation.navigate('GameScreen');
    }
  };
  const addCoin = () => navigation.navigate('CoinStoreScreen');
  const [users, setUsers] = useState<Array<any>>([]);
  const [userData, setUserData] = useState<any>([]);
  useEffect(() => {
    AsyncStorage.getItem('@USERS').then(res => {
      res !== null && setUsers(JSON.parse(res));
    });
  }, []);
  useEffect(() => {
    if (users?.length > 0) {
      AsyncStorage.getItem('@LOGIN')
        .then(res => {
          if (res !== null) {
            setUserData(
              users.find(x => x.username === JSON.parse(res).nickname),
            );
            AsyncStorage.setItem(
              '@USER',
              JSON.stringify(
                users.find(x => x.username === JSON.parse(res).nickname),
              ),
            );
          }
        })
        .catch(err => Alert.alert(JSON.stringify(err)));
    }
  }, [users]);
  return (
    <View style={style.container}>
      <Header title="Home" right />
      <View style={style.innerContainer}>
        <Button text="Start Game" color="white" onPress={startGame} />
        <Button text="Add Coin" color="white" onPress={addCoin} />
      </View>
    </View>
  );
};
