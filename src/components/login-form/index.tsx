import React, {useState} from 'react';
import {View, Platform, KeyboardAvoidingView, Alert, Text} from 'react-native';
import {Button, TextInput} from '@components';
import {useAppDispatch, useAppSelector} from '@hooks';
import {authLogin} from '@services';
import style from './style';
import {LoginFormProps} from '@components/types';
export const LoginForm: React.FC<LoginFormProps> = props => {
  const {onPress} = props;
  const dispatch = useAppDispatch();
  const [nickname, setNickname] = useState<string>('johnd');
  const [password, setPassword] = useState<string>('m38rmF$');
  const {isLoading} = useAppSelector(state => state.auth);
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
        <Text style={style.welcome_text} children="welcome" />
      </View>
      <View style={style.form_container}>
        <View style={style.form_item_container}>
          <Text style={style.form_item_text} children="nickname" />
          <TextInput value={nickname} onChangeText={setNickname} />
          <Text style={style.form_item_desc} children="nickname_desc" />
        </View>
        <View style={style.form_item_container}>
          <Text style={style.form_item_text} children="password" />
          <TextInput value={password} onChangeText={setPassword} isPassword />
          <Text style={style.forgot_password} children="forgot_password" />
        </View>
        <View style={style.button_container}>
          <Button
            text="login"
            color="white"
            onPress={login}
            disabled={isLoading?.authLogin}
            isLoading={isLoading?.authLogin}
          />
          <Text style={style.register_text} children="dont_have_account">
            <Text
              style={style.register_text_bold}
              children="create_account"
              onPress={() => onPress(setNickname, setPassword)}
            />
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
