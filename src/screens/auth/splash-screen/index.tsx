import React, {useEffect} from 'react';
import {View, ImageBackground, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch} from '@hooks';
import {authLogin} from '@services';
import {colors} from '@utils';
import {changeAuhtentication} from '../../../redux/slices/auth-slice';
import style from './style';
export const SplashScreen = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    AsyncStorage.getItem('@USERTYPE').then((res: any) => {
      if (res !== null) {
        try {
          AsyncStorage.getItem('@LOGIN')
            .then(session => {
              session !== null
                ? dispatch(authLogin(JSON.parse(session)))
                : dispatch(changeAuhtentication('0'));
            })
            .catch(err => console.log(err));
        } catch (error) {
          console.log(error);
        }
      } else {
        dispatch(changeAuhtentication('0'));
        AsyncStorage.removeItem('@USERTYPE');
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ImageBackground
      style={style.container}
      source={require('../../../assets/images/guess-number-app-bg.png')}>
      <View style={style.inner_container}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    </ImageBackground>
  );
};
