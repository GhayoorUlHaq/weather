import React, {Component} from 'react';
import AppContainer from './src/navigation';
import {Provider as StoreProvider} from 'react-redux';
import store, {persistor} from './src/redux/storeConfig';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <StoreProvider store={store}>
        <PersistGate persistor={persistor} loading={false}>
          <AppContainer />
        </PersistGate>
      </StoreProvider>
    );
  }
}

console.disableYellowBox = true;
