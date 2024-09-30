import {TextInputProps as RNTextInputProps} from 'react-native';
export interface TextInputProps extends RNTextInputProps {
  isPassword?: boolean;
  title?: string;
}
