import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {AdminTabParamList} from '@navigators/types';
export type AdminHomeTabParamList = {
  AdminBottomTab: AdminTabParamList;
};
export type AdminHomeTabNavigationProp =
  BottomTabNavigationProp<AdminHomeTabParamList>;
export type AdminHomeTabRouteProps =
  BottomTabScreenProps<AdminHomeTabParamList>;
