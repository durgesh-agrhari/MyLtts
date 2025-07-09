import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
// import { Picker } from '@react-native-picker/picker';

const locations = [
  { id: 1, name: 'Bangalore' },
  { id: 2, name: 'Chennai' },
  { id: 3, name: 'Hyderabad' },
  { id: 4, name: 'Noida' },
];

const LoginScreen = () => {
  const [psNumber, setPsNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(locations[0].name);
  const navigation = useNavigation();
  const handleLogin = () => {

    if (!psNumber.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const loginData = {
      psNumber,
      email,
      password,
      location: selectedLocation,
    };

    console.log('Login JSON Data:', loginData);
    Alert.alert('Login Success', JSON.stringify(loginData, null, 2));
    navigation.navigate('LoginScreen')
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
          <Image
            source={require('../../assets/logo1.png')}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />
        </View>

        <Text style={styles.title}>Login to LTTS</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your PS Number"
          value={psNumber}
          onChangeText={setPsNumber}
          keyboardType="default"
          placeholderTextColor="#ccc"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your LTTS Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#ccc"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholderTextColor="#ccc"
        />
        {/* 
        <View style={styles.dropdownContainer}>
          <Text style={styles.dropdownLabel}>Select Location</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedLocation}
              onValueChange={(itemValue) => setSelectedLocation(itemValue)}
              style={styles.picker}
              dropdownIconColor="#007AFF"
            >
              {locations.map((loc) => (
                <Picker.Item key={loc.id} label={loc.name} value={loc.name} />
              ))}
            </Picker>
          </View>
        </View> */}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button,{marginTop:30, backgroundColor:'gray'}]} onPress={()=> navigation.goBack()}>
          <Text style={[styles.buttonText,{color:'balck'}]}>Go Back</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#007AFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    backgroundColor: '#007AFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  dropdownLabel: {
    color: '#fff',
    marginBottom: 5,
    fontSize: 16,
  },
  pickerWrapper: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#000',
  },
});

export default LoginScreen;
