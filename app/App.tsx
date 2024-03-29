import React, { useEffect, useState } from 'react';

import { Baloo2_500Medium, Baloo2_700Bold } from '@expo-google-fonts/baloo-2';
import {
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AnimatedSplash from 'react-native-animated-splash-screen';
import { ThemeProvider } from 'styled-components';

import SplashScreen from '@/animations/splashScreen';
import Toast from '@/components/Toast';
import CartProvider from '@/contexts/cart';
import ToastProvider from '@/contexts/toast';
import Cart from '@/screens/Cart';
import CoffeeDetails from '@/screens/CoffeeDetails';
import Finish from '@/screens/Finish';
import Home from '@/screens/Home';

import theme from './src/styles/theme';

export default function App() {
  const [isSplashScreenAnimationFinished, setIsSplashScreenAnimationFinished] =
    useState(false);

  const [fontsLoaded] = useFonts({
    Roboto: Roboto_500Medium,
    RobotoBold: Roboto_700Bold,
    Baloo: Baloo2_500Medium,
    BalooBold: Baloo2_700Bold,
  });

  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashScreenAnimationFinished(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isSplashScreenAnimationFinished && fontsLoaded}
      customComponent={<SplashScreen />}
      backgroundColor={'#8047f8'}
    >
      {fontsLoaded ? (
        <ThemeProvider theme={theme}>
          <CartProvider>
            <StatusBar translucent />
            <NavigationContainer>
              <ToastProvider>
                <Stack.Navigator
                  screenOptions={{ headerShown: false }}
                  initialRouteName="Home"
                >
                  <Stack.Screen name="Home" component={Home} />
                  <Stack.Screen
                    name="CoffeeDetails"
                    component={CoffeeDetails}
                  />
                  <Stack.Screen name="Cart" component={Cart} />
                  <Stack.Screen name="Finish" component={Finish} />
                </Stack.Navigator>
                <Toast />
              </ToastProvider>
            </NavigationContainer>
          </CartProvider>
        </ThemeProvider>
      ) : null}
    </AnimatedSplash>
  );
}
