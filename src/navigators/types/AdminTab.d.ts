import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
export type AdminTabParamList = {
  AdminHomeScreen: undefined;
  AdminUsersScreen: undefined;
};
export type AdminTabNavigationProp =
  BottomTabNavigationProp<AdminHomeTabParamList>;
export type AdminTabRouteProps = BottomTabScreenProps<AdminHomeTabParamList>;
