import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from './style';
import {Header, UserItem} from '@components';
import {UserItemContents} from '@components/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AdminHomeScreen = () => {
  const [data, setData] = useState<Array<any>>([]);
  useEffect(() => {
    AsyncStorage.getItem('@USERS').then((res: any) => {
      if (res !== null) {
        setData(JSON.parse(res));
      }
    });
  }, []);
  const renderItem = ({item}: {item: UserItemContents}) => {
    return <UserItem contents={item} />;
  };
  return (
    <View style={style.container}>
      <Header title="Home" right />
      <View style={style.innerContainer}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => `${item}${index}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={style.footer} />}
        />
      </View>
    </View>
  );
};
