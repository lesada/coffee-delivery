import { Baloo2_500Medium } from '@expo-google-fonts/baloo-2';
import { Roboto_500Medium, useFonts } from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import Home from './src/pages/Home';

import theme from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: Roboto_500Medium,
    Baloo: Baloo2_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        backgroundColor={theme.colors.neutral[100]}
        style="light"
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
