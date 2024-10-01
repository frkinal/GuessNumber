import React, {useEffect, useRef} from 'react';
import {
  ImageBackground,
  Animated,
  ScrollView,
  View,
  useWindowDimensions,
} from 'react-native';
import {LoginForm, RegisterForm} from '@components';
import style from './style';
import {useAppDispatch} from '@hooks';
import {getAllUser} from '@services';
export const AuthScreen = () => {
  const dispatch = useAppDispatch();
  const animation = useRef(new Animated.Value(0)).current;
  const {width} = useWindowDimensions();
  const scrollView = useRef<ScrollView>(null);
  useEffect(() => {
    dispatch(getAllUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const createAccount = (
    mail: (val: string) => void,
    password: (val: string) => void,
  ) => {
    if (scrollView.current) {
      scrollView?.current?.scrollTo({
        x: width,
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
        x: -width,
        animated: true,
      });
      mail('');
      password('');
      nickname('');
      gender('');
      birthday('');
    }
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
          <LoginForm
            onPress={(
              mail: (val: string) => void,
              password: (val: string) => void,
            ) => createAccount(mail, password)}
          />
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
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
