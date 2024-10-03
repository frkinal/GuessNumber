import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {HomeTabNavigationProp} from '@navigators/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const GameScreen = () => {
  const navigation = useNavigation<HomeTabNavigationProp>();
  const [term, setTerm] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [secretNum] = useState<any>(generateRandomNumber());
  const [stepCount, setStepCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [reset, setReset] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);
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
    if (reset) {
      setSeconds(0);
    }
  }, [reset]);
  useEffect(() => {
    handleStartPause();
    return () => handleReset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        'You are about to leave the page',
        'Are you sure you want to leave this page?',
        [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'Yes', onPress: () => navigation.goBack()},
        ],
      );
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);
  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };
  const handleReset = () => {
    setIsRunning(false);
    setReset(true);
    setTimeout(() => setReset(false), 0);
  };
  useEffect(() => {
    setStepCount(0);
  }, [secretNum]);
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  function handleChange(text: string) {
    setTerm(text);
  }
  function checkGuess() {
    let newResult = '';
    if (term === '') {
      newResult = 'Enter Valid Input';
    } else if (
      isNaN(Number(term)) ||
      parseInt(term) < 1 ||
      parseInt(term) > 100
    ) {
      newResult = 'Enter a valid number between 1 and 100';
    } else {
      setStepCount(stepCount + 1);
      if (parseInt(term) < secretNum) {
        newResult = 'Lower';
      } else if (parseInt(term) > secretNum) {
        newResult = 'Higher';
      } else {
        newResult = `Yippee, correct! It took you ${stepCount + 1} ${
          stepCount === 1 ? 'step' : 'steps'
        }.`;
        Alert.alert(
          'Yippeee',
          `Correct! It took you ${stepCount + 1} ${
            stepCount === 1 ? 'step' : 'steps'
          }.`,
          [
            {
              text: 'Ok',
              onPress: () => {
                AsyncStorage.getItem('@USERS').then(res => {
                  if (res !== null) {
                    AsyncStorage.getItem('@USER').then(response => {
                      if (response !== null) {
                        const user = JSON.parse(response);
                        AsyncStorage.setItem(
                          '@USERS',
                          JSON.stringify(
                            JSON.parse(res).map((item: any) => {
                              if (item?.username === user?.username) {
                                return {
                                  ...item,
                                  game: [
                                    ...item?.game,
                                    {
                                      game: 1,
                                      guesses: stepCount + 1,
                                      time: seconds,
                                      score: stepCount + 1,
                                    },
                                  ],
                                };
                              } else {
                                return item;
                              }
                            }),
                          ),
                        ).then(() => {
                          BackHandler.removeEventListener(
                            'hardwareBackPress',
                            () => {
                              return true;
                            },
                          );
                          navigation.goBack();
                        });
                      }
                    });
                  }
                });
              },
            },
          ],
        );
      }
    }
    setResult(newResult);
  }
  return (
    <View style={style.container}>
      <View style={style.timerContainer}>
        <Text>Timer: </Text>
        <View style={style.timerContainer}>
          <Text style={style.timerText}>{formatTime(seconds)}</Text>
        </View>
      </View>
      <Text style={style.head}>Guess Number between 1 to 100</Text>
      <TextInput
        style={style.input}
        placeholder="Enter your guess"
        onChangeText={handleChange}
        value={term}
        keyboardType="numeric"
      />
      <TouchableOpacity style={style.button} onPress={checkGuess}>
        <Text style={style.buttonText}>Check</Text>
      </TouchableOpacity>
      <Text style={style.result}>You Guessed: {result}</Text>
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
