import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import BottomTab from '../components/BottomTab';
import FoodMenuScreen from '../screens/bookingScreen/FoodMenuScreen';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomTab"
        screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="FoodMenuScreen" component={FoodMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
