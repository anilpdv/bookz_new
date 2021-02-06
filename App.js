import React from 'react';
import {Provider} from 'react-redux';
import BottomNavigationBar from './src/components/BootomNavigationBar';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import configureStore from './src/store/configureStore';
import config from './src/lib/config';
import Loader from './src/components/Loader';

const store = configureStore({});

const theme = {
  ...DefaultTheme,
  flex: 1,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: config.PRIMARY_THEME_COLOR,
    accent: config.SECONDARY_THEME_COLOR,
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <BottomNavigationBar />
      </PaperProvider>
      {/* Screen configuration */}
    </Provider>
  );
}
