import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Header, Icon} from '@components';
import style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const ProfileScreen = () => {
  const [userData, setUserData] = useState<any>();
  useEffect(() => {
    AsyncStorage.getItem('@USER').then((res: any) => {
      if (res !== null) {
        setUserData(JSON.parse(res));
      }
    });
  }, []);
  return (
    <View style={style.container}>
      <Header title="Profile" right />
      <View style={style.render_item_container}>
        <View style={style.header_container}>
          <Text style={style.header_text}>Hesap Bilgileri</Text>
        </View>
        <View style={style.contentContainer}>
          <View style={style.inner_content_container}>
            <Text style={style.title}>Balance</Text>
            <Text style={style.content}>{userData?.balance}</Text>
          </View>
        </View>
        <View style={style.contentContainer}>
          <View style={style.inner_content_container}>
            <Text style={style.title}>Nickname</Text>
            <Text style={style.content}>{userData?.username}</Text>
          </View>
          <Icon icon="Edit" />
        </View>
        <View style={style.contentContainer}>
          <View style={style.inner_content_container}>
            <Text style={style.title}>E-Mail</Text>
            <Text style={style.content}>{userData?.email}</Text>
          </View>
          <Icon icon="Edit" />
        </View>
        <View style={style.contentContainer}>
          <View style={style.inner_content_container}>
            <Text style={style.title}>Phone</Text>
            <Text style={style.content}>{userData?.phone}</Text>
          </View>
          <Icon icon="Edit" />
        </View>
      </View>
    </View>
  );
};
