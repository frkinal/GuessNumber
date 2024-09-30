import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import style from './style';
export const DashboardScreen = () => {
  const [term, setTerm] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [secretNum] = useState<any>(generateRandomNumber());
  const [stepCount, setStepCount] = useState<number>(0);
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
      }
    }
    setResult(newResult);
  }
  return (
    <View style={style.container}>
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
