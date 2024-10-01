import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export type HomeStackParamList = {
  HomeScreen: undefined;
  CoinStoreScreen: undefined;
  GameScreen: undefined;
  PaymentScreen: {
    price: number | undefined;
  };
};
export type HomeStackNavigationProp =
  NativeStackNavigationProp<HomeStackParamList>;
export type HomeStackRouteProps = RouteProp<HomeStackParamList>;
