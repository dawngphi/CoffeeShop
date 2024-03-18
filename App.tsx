
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomIcon from './src/components/CustomIcon';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import OderHistoryScreen from './src/screens/OderHistoryScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';


const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={TabNavigator} options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen name="Payment" component={PaymentScreen} options={{ animation: 'slide_from_bottom' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
