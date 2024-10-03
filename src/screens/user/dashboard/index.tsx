import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Header, Table} from '@components';
import style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TableContent} from '@components/types';
export const DashboardScreen = () => {
  const [games, setGames] = useState<Array<TableContent>>([]);
  useEffect(() => {
    AsyncStorage.getItem('@USER').then(res => {
      if (res !== null) {
        setGames(JSON.parse(res).game);
      }
    });
  }, []);
  return (
    <View style={style.container}>
      <Header right title="Dashboard" />
      <Table data={games} />
    </View>
  );
};
