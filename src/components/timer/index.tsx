import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {TimerProps} from '@components/types';
import style from './style';
export const Timer: React.FC<TimerProps> = props => {
  const {isRunning, onReset} = props;
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let interval: any = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (onReset) {
      setSeconds(0);
    }
  }, [onReset]);

  return (
    <View style={style.container}>
      <Text style={style.timerText}>{formatTime(seconds)}</Text>
      <Text style={style.timerText}>{seconds}</Text>
    </View>
  );
};

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
  }`;
};
