import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import BottomTab from '../components/BottomTab';
import FoodMenuScreen from '../screens/bookingScreen/FoodMenuScreen';
import Splash from '../screens/splashScreen/Splash';
import LoginScreen from '../screens/authScreen/LoginScreen';
import SportScreen from '../screens/bookingScreen/sportBooking/SprotScreen';
import Bookingmenu from '../screens/bookingScreen/sportBooking/Bookingmenu';
import BadmintonBooking from '../screens/bookingScreen/sportBooking/BadmintonBooking';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SportScreen" component={SportScreen} />
          <Stack.Screen name="BadmintonBooking" component={BadmintonBooking} />
          <Stack.Screen name="Bookingmenu" component={Bookingmenu} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="FoodMenuScreen" component={FoodMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
