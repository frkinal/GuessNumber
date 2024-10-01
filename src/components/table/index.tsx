import React from 'react';
import {FlatList, Text, View} from 'react-native';
import style from './style';
import {TableProps, TableContent} from '@components/types';
export const Table: React.FC<TableProps> = props => {
  const {data} = props;
  const renderItem = ({item}: {item: TableContent}) => (
    <View style={style.row}>
      <Text style={style.cell}>{item.game}</Text>
      <Text style={style.cell}>{item.score}</Text>
      <Text style={style.cell}>{item.guesses}</Text>
      <Text style={style.cell}>{item.time}s</Text>
    </View>
  );

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.headerText}>Game</Text>
        <Text style={style.headerText}>Score</Text>
        <Text style={style.headerText}>Guesses</Text>
        <Text style={style.headerText}>Time</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.game.toString() + index}
        renderItem={renderItem}
      />
    </View>
  );
};
