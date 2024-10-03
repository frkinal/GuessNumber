import {Text, View} from 'react-native';
import React from 'react';
import style from './style';
import {HeaderProps} from '@components/types';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch} from '@hooks';
import {changeAuhtentication} from '../../redux/slices/auth-slice';
import {useNavigation} from '@react-navigation/native';
export const Header: React.FC<HeaderProps> = props => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const {left, title, right} = props;
  const logout = () => {
    AsyncStorage.multiRemove(['@LOGIN', '@USER', '@USERTYPE']);
    dispatch(changeAuhtentication('0'));
  };
  const goBack = () => navigation.goBack();
  return (
    <View style={style.container}>
      <View style={style.leftContainer}>
        {left && (
          <Icon
            type={IconType.Ionicons}
            name="arrow-back"
            size={25}
            color="black"
            onPress={goBack}
          />
        )}
      </View>
      <View style={style.midContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
      <View style={style.rightContainer}>
        {right && (
          <Icon
            type={IconType.Ionicons}
            name="exit-outline"
            size={25}
            color="black"
            onPress={logout}
          />
        )}
      </View>
    </View>
  );
};
