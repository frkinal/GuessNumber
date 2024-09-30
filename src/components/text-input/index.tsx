import React, {useState} from 'react';
import {
  View,
  TextInput as RNTextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {TextInputProps} from '@components/types';
import {colors} from '@utils';
import style from './style';
import {Eye} from '@assets';
export const TextInput: React.FC<TextInputProps> = props => {
  const {isPassword, ...rest} = props;
  const [visible, setVisible] = useState<boolean>(false);
  const [isFocused, setİsFocused] = useState<boolean>(false);
  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <View
      style={[
        style.container,
        {borderColor: isFocused ? colors.primary : colors.gray},
      ]}>
      <RNTextInput
        style={style.input}
        secureTextEntry={isPassword && !visible}
        onFocus={() => setİsFocused(true)}
        onBlur={() => setİsFocused(false)}
        placeholderTextColor={colors.gray}
        autoCapitalize="none"
        {...rest}
      />
      {isPassword && (
        <TouchableWithoutFeedback onPress={changeVisible}>
          <View style={style.rightIcon}>
            {Eye(isFocused ? 'primary' : 'gray')}
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};
