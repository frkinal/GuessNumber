import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from '@components';
import {ProfileItemProps} from '@components/types';
import style from './style';
export const ProfileItem: React.FC<ProfileItemProps> = props => {
  const {
    contents: {title, content},
  } = props;
  return (
    <View style={style.container}>
      <View style={style.content_container}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.content}>{content}</Text>
      </View>
      <Icon icon="Edit" />
    </View>
  );
};
