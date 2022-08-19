
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </Provider >
  );
};

export default App;
