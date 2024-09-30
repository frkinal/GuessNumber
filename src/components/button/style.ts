import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {colors} from '@utils';
const baseContainer: ViewStyle = {
  backgroundColor: colors.primary,
  width: 150,
  height: 45,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 25,
  borderRadius: 25,
  marginVertical: 10,
};
const baseText: TextStyle = {
  color: colors.white,
  fontSize: 16,
};
export const container = StyleSheet.create({
  primary: {
    ...baseContainer,
    backgroundColor: colors.primary,
  },
  green: {
    ...baseContainer,
    backgroundColor: colors.green,
  },
});
export const text = StyleSheet.create({
  primary: {
    ...baseText,
  },
  green: {
    ...baseText,
  },
});

export type Preset = keyof typeof container;
