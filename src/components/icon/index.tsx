import React from 'react';
import {Icons} from '@assets';
export const Icon = ({icon, ...rest}: {icon: keyof typeof Icons}) => {
  let IconSvg = Icons[icon];
  return <IconSvg {...rest} />;
};
