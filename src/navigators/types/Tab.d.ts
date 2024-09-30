import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
export type TabParamList = {
  HomeScreen: undefined;
  DashboardScreen: undefined;
  ProfileScreen: undefined;
};
export type TabNavigationProp = BottomTabNavigationProp<HomeTabParamList>;
export type TabRouteProps = BottomTabScreenProps<HomeTabParamList>;
