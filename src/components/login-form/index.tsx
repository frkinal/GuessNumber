import React, {useState} from 'react';
import {View, Platform, KeyboardAvoidingView, Alert, Text} from 'react-native';
import {Button, TextInput} from '@components';
import {useAppDispatch, useAppSelector} from '@hooks';
import {authLogin} from '@services';
import style from './style';
import {LoginFormProps} from '@components/types';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
export const LoginForm: React.FC<LoginFormProps> = props => {
  const {onPress, goBack} = props;
  const dispatch = useAppDispatch();
  const [nickname, setNickname] = useState<string>('johnd');
  const [password, setPassword] = useState<string>('m38rmF$');
  const {isLoading, userType} = useAppSelector(state => state.auth);
  const isValidForm = () => {
    if (!nickname.trim() || nickname.length < 3) {
      Alert.alert('Invalid name!', 'Invalid name!');
      return;
    }
    if (!password.trim() || password.length < 3) {
      Alert.alert('Invalid password!', 'Invalid password!');
      return;
    }
    return true;
  };
  const login = () => {
    if (isValidForm()) {
      dispatch(authLogin({nickname, password}));
    }
  };
  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={style.container}>
      <View style={style.welcome_container}>
        <Icon
          type={IconType.AntDesign}
          name="left"
          size={30}
          color="black"
          onPress={goBack}
        />
        <Text style={style.welcome_text} children="Welcome" />
      </View>
      <View style={style.form_container}>
        <View style={style.form_item_container}>
          <Text style={style.form_item_text} children="Nickname" />
          <TextInput value={nickname} onChangeText={setNickname} />
        </View>
        <View style={style.form_item_container}>
          <Text style={style.form_item_text} children="Password" />
          <TextInput value={password} onChangeText={setPassword} isPassword />
          <Text style={style.forgot_password} children="Forgot Password" />
        </View>
        <View style={style.button_container}>
          <Button
            text="Login"
            color="white"
            onPress={login}
            disabled={isLoading?.authLogin}
            isLoading={isLoading?.authLogin}
          />
          {userType === 'user' && (
            <Text style={style.register_text}>
              Don't have an account?{' '}
              <Text
                style={style.register_text_bold}
                children="Create Account"
                onPress={() => onPress(setNickname, setPassword)}
              />
            </Text>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
