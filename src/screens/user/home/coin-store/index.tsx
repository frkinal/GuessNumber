import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import style from './style';
import {colors} from '@utils';
import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigationProp} from '@navigators/types';
import {Header, Icon} from '@components';

export const CoinStore: React.FC = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();
  const [selectedCoin, setSelectedCoin] = useState<number>(0);
  const [customAmount, setCustomAmount] = useState<string>(''); // Custom amount entered by the user
  const [isCustomAmount, setIsCustomAmount] = useState<boolean>(false);
  const coinOptions = [100, 500, 1000, 5000]; // Fixed coin options
  const handleCoinSelect = (amount: number) => {
    setSelectedCoin(amount);
    setIsCustomAmount(false);
    setCustomAmount('');
  };
  const handlePurchase = () => {
    const coinToBuy = isCustomAmount ? parseInt(customAmount) : selectedCoin;
    if (!coinToBuy || coinToBuy <= 0) {
      Alert.alert('Error', 'Please enter a valid coin amount.');
      return;
    }
    navigation.navigate('PaymentScreen', {price: selectedCoin});
  };
  return (
    <ScrollView style={style.container}>
      <Header title="Coin Store" left />
      <Text style={style.subHeader}>Which amount would you like to buy?</Text>
      <View style={style.coinOptionsContainer}>
        {coinOptions.map((coin, index) => (
          <TouchableOpacity
            key={index}
            style={[
              style.coinOption,
              selectedCoin === coin && !isCustomAmount
                ? style.selectedCoinOption
                : null,
            ]}
            onPress={() => handleCoinSelect(coin)}>
            <View style={style.iconContainer}>
              <Icon icon="Coin" />
            </View>
            <Text style={style.coinText}>{coin} Coins</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[
            style.coinOption,
            isCustomAmount ? style.selectedCoinOption : null,
          ]}
          onPress={() => {
            setIsCustomAmount(true);
            setSelectedCoin(null);
          }}>
          <View style={style.iconContainer}>
            <Icon icon="Coin" />
          </View>
          <Text style={style.coinText}>Custom Amount</Text>
        </TouchableOpacity>
      </View>
      {isCustomAmount && (
        <TextInput
          style={style.input}
          keyboardType="numeric"
          value={customAmount}
          placeholder="Enter Amount"
          onChangeText={setCustomAmount}
        />
      )}
      <TouchableOpacity style={style.purchaseButton} onPress={handlePurchase}>
        <Text style={style.purchaseButtonText}>Buy</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
