import { Baloo2_500Medium, Baloo2_700Bold } from '@expo-google-fonts/baloo-2';
import {
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import Home from './src/screens/Home';

import theme from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: Roboto_500Medium,
    RobotoBold: Roboto_700Bold,
    Baloo: Baloo2_500Medium,
    BalooBold: Baloo2_700Bold,
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
