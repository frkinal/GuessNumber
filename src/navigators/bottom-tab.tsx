import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet, Platform, Text} from 'react-native';
import {Survey, Profile, Home} from '@assets';
import {Colors, colors} from '@utils';
import {DashboardScreen, HomeScreen, ProfileScreen} from '@screens';
import {TabParamList} from '@navigators/types';
const Tab = createBottomTabNavigator<TabParamList>();
export const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarLabelStyle: {display: 'none'},
        tabBarHideOnKeyboard: true,
        lazy: true,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({focused}) => {
          const color: Colors = focused ? 'tabActive' : 'white';
          if (route.name === 'HomeScreen') {
            return (
              <View
                style={[
                  styles.home,
                  focused && {backgroundColor: colors.primary},
                ]}>
                {Home('white')}
              </View>
            );
          } else if (route.name === 'DashboardScreen') {
            return (
              <View style={styles.tab}>
                {Survey(color)}
                <Text style={[styles.tab_text, {color: colors[color]}]}>
                  Dashboard
                </Text>
              </View>
            );
          } else if (route.name === 'ProfileScreen') {
            return (
              <View style={styles.tab}>
                {Profile(color)}
                <Text style={[styles.tab_text, {color: colors[color]}]}>
                  Profile
                </Text>
              </View>
            );
          }
        },
      })}>
      <Tab.Screen name="DashboardScreen" component={DashboardScreen} />
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  home: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: colors.tab,
    justifyContent: 'center',
    top: -25,
  },
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
