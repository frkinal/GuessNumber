import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '@utils';
import {AppStack} from '@navigators';
import {Provider} from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 100000, backgroundColor: colors.white}}>
          <StatusBar
            translucent
            backgroundColor={colors.primary}
            barStyle="dark-content"
            hidden
          />
          <AppStack />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
