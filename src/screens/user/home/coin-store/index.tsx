import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import style from './style';
import {colors} from '@utils';
import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigationProp} from '@navigators/types';
export const CoinStore: React.FC = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();
  const [selectedCoin, setSelectedCoin] = useState<number>(0);
  const [customAmount, setCustomAmount] = useState<string>(''); // Kullanıcının girdiği özel miktar
  const [isCustomAmount, setIsCustomAmount] = useState<boolean>(false);
  const coinOptions = [100, 500, 1000, 5000]; // Sabit coin seçenekleri
  const handleCoinSelect = (amount: number) => {
    setSelectedCoin(amount);
    setIsCustomAmount(false);
    setCustomAmount('');
  };
  const handlePurchase = () => {
    const coinToBuy = isCustomAmount ? parseInt(customAmount) : selectedCoin;
    if (!coinToBuy || coinToBuy <= 0) {
      Alert.alert('Hata', 'Geçerli bir coin miktarı girin.');
      return;
    }
    navigation.navigate('PaymentScreen', {price: selectedCoin});
  };
  return (
    <ScrollView style={style.container}>
      <Text style={style.header}>🎮 Coin Satın Al 🎮</Text>
      <Text style={style.subHeader}>Hangi miktarı satın almak istersiniz?</Text>
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
            <Icon
              type={IconType.MaterialIcons}
              name="monetization-on"
              size={30}
              color={colors.coin}
            />
            <Text style={style.coinText}>{coin} Coin</Text>
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
          <Icon
            type={IconType.MaterialIcons}
            name="attach-money"
            size={30}
            color={colors.coin}
          />
          <Text style={style.coinText}>Özel Miktar</Text>
        </TouchableOpacity>
      </View>

      {isCustomAmount && (
        <TextInput
          style={style.input}
          keyboardType="numeric"
          value={customAmount}
          placeholder="Miktarı Girin"
          onChangeText={setCustomAmount}
        />
      )}

      <TouchableOpacity style={style.purchaseButton} onPress={handlePurchase}>
        <Text style={style.purchaseButtonText}>Satın Al</Text>
      </TouchableOpacity>

      <Text style={style.footer}>
        * Satın aldığınız coinler oyun içi ödüller için kullanılabilir!
      </Text>
    </ScrollView>
  );
};
