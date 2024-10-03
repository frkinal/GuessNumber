import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import {AdminTable, Header} from '@components';
import style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AdminDashboardScreen = () => {
  const [games, setGames] = useState<Array<any>>([]);
  useEffect(() => {
    AsyncStorage.getItem('@USERS').then(res => {
      if (res !== null) {
        setGames(JSON.parse(res));
        Alert.alert('asd', JSON.stringify(JSON.parse(res)));
      }
    });
  }, []);
  return (
    <View style={style.container}>
      <Header right title="Dashboard" />
      <AdminTable data={games} />
    </View>
  );
};
