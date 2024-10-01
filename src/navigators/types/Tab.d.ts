import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {HomeStackParamList} from '@navigators/types';
export type TabParamList = {
  HomeStack: HomeStackParamList;
  DashboardScreen: undefined;
  ProfileScreen: undefined;
};
export type TabNavigationProp = BottomTabNavigationProp<HomeTabParamList>;
export type TabRouteProps = BottomTabScreenProps<HomeTabParamList>;
