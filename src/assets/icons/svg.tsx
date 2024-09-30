import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';
import {Colors, colors} from '@utils';
export const Survey = (color: Colors) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 14l.5.07L8.07 9.5a1.95 1.95 0 01.52-1.91c.78-.79 2.04-.79 2.82 0 .53.52.7 1.26.52 1.91l2.57 2.57.5-.07c.18 0 .35 0 .5.07l3.57-3.57C19 8.35 19 8.18 19 8a2 2 0 112 2c-.18 0-.35 0-.5-.07l-3.57 3.57c.07.15.07.32.07.5a2 2 0 01-4 0l.07-.5-2.57-2.57c-.32.07-.68.07-1 0L4.93 15.5 5 16a2 2 0 11-2-2z"
        fill={colors[color]}
      />
    </Svg>
  );
};
export const Home = (color: Colors) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
        fill={colors[color]}
      />
    </Svg>
  );
};
export const Profile = (color: Colors) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_6_294)">
        <Path
          d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2a4.505 4.505 0 00-4.5 4.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"
          fill={colors[color]}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_6_294">
          <Path fill={colors[color]} d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export const Eye = (color: Colors) => {
  return (
    <Svg width={15} height={12} viewBox="0 0 15 12" fill="none">
      <Path
        d="M1.25 1.294L2.05.5 12.5 10.95l-.794.8-1.925-1.925a7.236 7.236 0 01-2.281.363A7.392 7.392 0 01.625 5.5a7.346 7.346 0 011.994-2.837L1.25 1.292zM7.5 3.625a1.875 1.875 0 011.769 2.5L6.875 3.731c.2-.07.412-.106.625-.106zm0-2.813A7.392 7.392 0 0114.375 5.5a7.369 7.369 0 01-2.5 3.244l-.887-.894a6.164 6.164 0 002.024-2.35A6.138 6.138 0 007.5 2.062c-.681 0-1.35.113-1.975.313l-.963-.956A7.415 7.415 0 017.5.812zM1.987 5.5A6.138 6.138 0 008.75 8.806L7.325 7.375a1.915 1.915 0 01-1.7-1.7L3.5 3.544A6.16 6.16 0 001.988 5.5z"
        fill={colors[color]}
      />
    </Svg>
  );
};
