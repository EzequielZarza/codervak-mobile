import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import Header from './src/Header';
import TabsNavigator from './src/navigation/tabs/TabsNavigator';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import MainNavigator from './src/navigation/MainNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded, error] = useFonts({
    'Space-Mono-Regular': require('./assets/fonts/spaceMono/SpaceMono-Regular.ttf'),
    'Space-Mono-Bold': require('./assets/fonts/spaceMono/SpaceMono-Bold.ttf'),
    'Space-Mono-BoldItalic': require('./assets/fonts/spaceMono/SpaceMono-BoldItalic.ttf'),
    'Space-Mono-Italic': require('./assets/fonts/spaceMono/SpaceMono-Italic.ttf')
  })

  useEffect(() => {
    if(loaded || error){
      SplashScreen.hideAsync();
    };
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        {/* <Header title={'Codervak'}/> */}
        <MainNavigator/>
      </Provider>
    </>
  );
}
