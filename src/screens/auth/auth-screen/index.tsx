import React, {useEffect, useRef} from 'react';
import {
  ImageBackground,
  Animated,
  ScrollView,
  View,
  useWindowDimensions,
} from 'react-native';
import {Button, LoginForm, RegisterForm} from '@components';
import style from './style';
import {useAppDispatch, useAppSelector} from '@hooks';
import {getAllUsers} from '@services';
import {changeUserType} from '../../../redux/slices/auth-slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthScreen = () => {
  const dispatch = useAppDispatch();
  const {userType} = useAppSelector(state => state.auth);
  const animation = useRef(new Animated.Value(0)).current;
  const {width} = useWindowDimensions();
  const scrollView = useRef<ScrollView>(null);
  useEffect(() => {
    AsyncStorage.getItem('@USERS').then(session => {
      session === null && dispatch(getAllUsers());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (userType === 'admin' || userType === 'user') {
      scrollView?.current?.scrollTo({
        x: width,
        animated: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userType]);
  const createAccount = (
    mail: (val: string) => void,
    password: (val: string) => void,
  ) => {
    if (scrollView.current) {
      scrollView?.current?.scrollTo({
        x: width * 2,
        animated: true,
      });
      mail('');
      password('');
    }
  };
  const haveAccount = (
    mail: (val: string) => void,
    password: (val: string) => void,
    nickname: (val: string) => void,
    gender: (val: string) => void,
    birthday: (val: string) => void,
  ) => {
    if (scrollView.current) {
      scrollView?.current?.scrollTo({
        x: width,
        animated: true,
      });
      mail('');
      password('');
      nickname('');
      gender('');
      birthday('');
    }
  };
  const goBack = () => {
    if (scrollView.current) {
      dispatch(changeUserType(''));
      scrollView?.current?.scrollTo({
        x: -width,
        animated: true,
      });
    }
  };
  const handleChangeUserType = (type: string) => {
    dispatch(changeUserType(type));
  };
  return (
    <ImageBackground
      source={require('../../../assets/images/guess-number-app-bg.png')}
      style={style.image_container}>
      <View style={style.container}>
        <ScrollView
          ref={scrollView}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: animation}}}],
            {useNativeDriver: false},
          )}>
          <View style={style.innerContainer}>
            <Button
              text="Admin"
              color="white"
              onPress={() => handleChangeUserType('admin')}
            />
            <Button
              text="User"
              color="white"
              onPress={() => handleChangeUserType('user')}
            />
          </View>
          <LoginForm
            goBack={goBack}
            onPress={(
              mail: (val: string) => void,
              password: (val: string) => void,
            ) => createAccount(mail, password)}
          />
          {userType === 'user' && (
            <ScrollView>
              <RegisterForm
                onPress={(
                  mail: (val: string) => void,
                  password: (val: string) => void,
                  nickname: (val: string) => void,
                  gender: (val: string) => void,
                  birthday: (val: string) => void,
                ) => haveAccount(mail, password, nickname, gender, birthday)}
              />
            </ScrollView>
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
