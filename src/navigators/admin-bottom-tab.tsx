import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet, Platform, Text} from 'react-native';
import {Survey, Home} from '@assets';
import {Colors, colors} from '@utils';
import {AdminHomeScreen, AdminDashboardScreen} from '@screens';
import {AdminTabParamList} from '@navigators/types';
const Tab = createBottomTabNavigator<AdminTabParamList>();
export const AdminBottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="AdminHomeScreen"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarLabelStyle: {display: 'none'},
        tabBarHideOnKeyboard: true,
        lazy: true,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({focused}) => {
          const color: Colors = focused ? 'tabActive' : 'white';
          if (route.name === 'AdminHomeScreen') {
            return (
              <View style={styles.tab}>
                {Home(color)}
                <Text style={[styles.tab_text, {color: colors[color]}]}>
                  Home
                </Text>
              </View>
            );
          } else if (route.name === 'AdminDashboardScreen') {
            return (
              <View style={styles.tab}>
                {Survey(color)}
                <Text style={[styles.tab_text, {color: colors[color]}]}>
                  Dashboard
                </Text>
              </View>
            );
          }
        },
      })}>
      <Tab.Screen name="AdminHomeScreen" component={AdminHomeScreen} />
      <Tab.Screen name="AdminDashboardScreen" component={AdminDashboardScreen} />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tab: {
    top: Platform.OS === 'ios' ? 15 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    width: '90%',
    marginHorizontal: '5%',
    marginBottom: '3%',
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.tab,
    position: 'absolute',
  },
  tab_text: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});
