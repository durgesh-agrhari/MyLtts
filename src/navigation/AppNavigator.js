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
import Splacehome from '../screens/splashScreen/Splacehome';
import TableTennisBooking from '../screens/bookingScreen/sportBooking/TableTennisBooking';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splacehome"
        screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Splacehome" component={Splacehome} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SportScreen" component={SportScreen} />
          <Stack.Screen name="BadmintonBooking" component={BadmintonBooking} />
          <Stack.Screen name="Bookingmenu" component={Bookingmenu} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="FoodMenuScreen" component={FoodMenuScreen} />
          <Stack.Screen name="TableTennisBooking" component={TableTennisBooking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
