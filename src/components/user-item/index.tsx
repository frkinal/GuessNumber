import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TableContent, UserItemProps} from '@components/types';
import style from './style';
import {Profile} from '@assets';
import {useNavigation} from '@react-navigation/native';
import {AdminTabNavigationProp} from '@navigators/types';
export const UserItem: React.FC<UserItemProps> = props => {
  const navigation = useNavigation<AdminTabNavigationProp>();
  const [totalScore, setTotalScore] = useState<number>(0);
  const {
    contents: {name, email, game, balance},
  } = props;
  useEffect(() => {
    var sum = 0;
    setTotalScore(
      game.map((item: TableContent) => {
        sum += item.score;
        return sum;
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const navigateDashboard = () => navigation.navigate('AdminDashboardScreen');
  return (
    <TouchableOpacity style={style.container} onPress={navigateDashboard}>
      <View style={style.profile}>{Profile('primary')}</View>
      <View style={style.content_container}>
        <Text style={style.username}>
          {name.firstname} {name.lastname}
        </Text>
        <Text style={style.email}>{email}</Text>
        <Text style={style.totalScore}>Total Score: {totalScore}</Text>
      </View>
      <View style={style.balanceContainer}>
        <Text style={style.balance}>Balance</Text>
        <Text style={style.balance}> {balance}$</Text>
      </View>
    </TouchableOpacity>
  );
};
