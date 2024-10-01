import React, {useState} from 'react';
import {SafeAreaView, Button} from 'react-native';
import {Table} from '@components';
export const DashboardScreen = () => {
  const [games, setGames] = useState([
    {game: 1, score: 100, guesses: 5, time: 30},
    {game: 2, score: 150, guesses: 3, time: 20},
    {game: 3, score: 80, guesses: 7, time: 40},
  ]);
  const addNewGame = () => {
    const newGame = {
      game: games.length + 1,
      score: Math.floor(Math.random() * 200),
      guesses: Math.floor(Math.random() * 10) + 1,
      time: Math.floor(Math.random() * 60),
    };
    setGames([...games, newGame]);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Button title="Yeni Oyun Ekle" onPress={addNewGame} />
      <Table data={games} />
    </SafeAreaView>
  );
};
