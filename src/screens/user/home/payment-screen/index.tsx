import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  BackHandler,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import style from './style';
import {HomeStackRouteProps} from '@navigators/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const PaymentScreen = () => {
  const route = useRoute<HomeStackRouteProps>();
  const navigation = useNavigation();
  const price = route.params?.price;
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
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
  useEffect(() => {
    if (!isSuccess) {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
      return () => backHandler.remove();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, isSuccess]);
  const handlePayment = () => {
    if (!validateCardNumber(cardNumber)) {
      Alert.alert(
        'Hata',
        'Geçersiz kart numarası. Lütfen tekrar kontrol edin.',
      );
      setIsSuccess(false);
      return;
    }
    if (!validateExpiryDate(expiryDate)) {
      Alert.alert('Hata', 'Geçersiz son kullanma tarihi.');
      setIsSuccess(false);
      return;
    }
    if (!validateCVC(cvc)) {
      Alert.alert('Hata', 'Geçersiz CVC kodu.');
      setIsSuccess(false);
      return;
    }
    setIsSuccess(true);
  };
  const validateCardNumber = (number: string) => /^[0-9]{16}$/.test(number);
  const validateExpiryDate = (date: string) =>
    /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(date);
  const validateCVC = (cvc: string) => /^[0-9]{3}$/.test(cvc);
  const goBack = () => {
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
                      balance: (item.balance += price),
                    };
                  } else {
                    return item;
                  }
                }),
              ),
            ).then(() => {
              BackHandler.removeEventListener('hardwareBackPress', () => {
                return true;
              });
              navigation.goBack();
            });
          }
        });
      }
    });
  };
  return (
    <>
      {isSuccess ? (
        <View style={style.container}>
          <Text style={style.title}>Payment Successful!</Text>
          <Text style={style.message}>Thank you for your payment.</Text>
          <TouchableOpacity style={style.button} onPress={goBack}>
            <Text style={style.buttonText}>Go to Home</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={style.container}>
          <Text style={style.title}>Payment Details</Text>
          <View style={style.totalContainer}>
            <Text style={style.totalText}>Total Amount: </Text>
            <Text style={style.totalPrice}>{price} TRY</Text>
          </View>
          <TextInput
            style={style.input}
            placeholder="Card Number"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={setCardNumber}
          />
          <View style={style.row}>
            <TextInput
              style={[style.input, {flex: 2}]}
              placeholder="MM/YY"
              keyboardType="numeric"
              value={expiryDate}
              onChangeText={setExpiryDate}
            />
            <TextInput
              style={[style.input, {flex: 1}]}
              placeholder="CVC"
              keyboardType="numeric"
              value={cvc}
              onChangeText={setCvc}
            />
          </View>
          <Text style={style.securityText}>
            Your payment is secure and encrypted.
          </Text>
          <TouchableOpacity style={style.paymentButton} onPress={handlePayment}>
            <Text style={style.paymentButtonText}>Complete Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.backButton} onPress={backAction}>
            <Text style={style.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};
