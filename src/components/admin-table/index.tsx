import React, {useState} from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import {
  AdminTableContent,
  AdminTableProps,
  TableContent,
} from '@components/types';
import style from './style';
export const AdminTable: React.FC<AdminTableProps> = props => {
  const {data} = props;
  const [expandedUserId, setExpandedUserId] = useState<number | null>(null);
  const [scaleValue] = useState(new Animated.Value(1));

  const toggleAccordion = (userId: number) => {
    setExpandedUserId(expandedUserId === userId ? null : userId);
    triggerScaleAnimation();
  };

  const triggerScaleAnimation = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const renderItem = ({item}: {item: AdminTableContent}) => {
    const {game} = item;
    const renderTableItem = ({item}: {item: TableContent}) => {
      return (
        <View style={style.row}>
          <Text style={style.cell}>{item.game}</Text>
          <Text style={style.cell}>{item.score}</Text>
          <Text style={style.cell}>{item.guesses}</Text>
          <Text style={style.cell}>{item.time}s</Text>
        </View>
      );
    };
    return (
      <View>
        <View style={style.header}>
          <Text style={style.headerText}>Game</Text>
          <Text style={style.headerText}>Score</Text>
          <Text style={style.headerText}>Guesses</Text>
          <Text style={style.headerText}>Time</Text>
        </View>
        <FlatList
          data={game}
          keyExtractor={(item2, idx) => item2.game.toString() + idx}
          renderItem={renderTableItem}
        />
      </View>
    );
  };

  return (
    <ScrollView style={style.container}>
      {data.length === 1 ? (
        <View>
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
      ) : (
        data.map((user, index) => (
          <Animated.View key={index} style={style.accordionContainer}>
            <TouchableOpacity
              style={style.accordionHeader}
              onPress={() => toggleAccordion(index)}
              activeOpacity={0.8}>
              <Text style={style.accordionTitle}>{user.username}</Text>
              {/* <Icon
                name={expandedUserId === index ? 'expand-less' : 'expand-more'}
                size={24}
              /> */}
            </TouchableOpacity>
            {expandedUserId === index && (
              <FlatList
                data={[user]}
                keyExtractor={(item, idx) => item.game.toString() + idx}
                renderItem={renderItem}
              />
            )}
          </Animated.View>
        ))
      )}
      <View style={style.footer} />
    </ScrollView>
  );
};
