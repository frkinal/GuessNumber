import {TouchableOpacityProps} from 'react-native';
import {Colors} from '@utils';
import {Preset} from './style';
import {I18nType} from '@languages';
export interface ButtonProps extends TouchableOpacityProps {
  text?: I18nType;
  preset?: Preset;
  color: Colors;
  isLoading?: boolean;
}
