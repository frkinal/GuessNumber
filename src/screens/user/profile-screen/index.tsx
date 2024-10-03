import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Header, ProfileItem} from '@components';
import {ProfileItemContents} from '@components/types';
import style from './style';
export const ProfileScreen = () => {
  const data = [
    {title: 'Nicname', content: 'John Doe'},
    {title: 'E-mail', content: 'jhon@doe.com'},
    {title: 'Doğum Tarihi', content: '01.01.1111'},
    {title: 'Cinsiyet', content: 'Erkek'},
  ];

  const renderProfileItem = ({item}: {item: ProfileItemContents}) => {
    return <ProfileItem contents={item} />;
  };
  return (
    <View style={style.container}>
      <Header title="Profile" right />
      <View style={style.render_item_container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderProfileItem}
          ListHeaderComponent={
            <View style={style.header_container}>
              <Text style={style.header_text}>Hesap Bilgileri</Text>
            </View>
          }
        />
      </View>
    </View>
  );
};
