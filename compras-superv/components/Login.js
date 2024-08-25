import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

function Login({ onLogin }) {
  const [pin, setPin] = useState('');

  const handlePinSubmit = () => {
    if (pin.length >= 4 && pin.length <= 10) {
      onLogin();
    } else {
      Alert.alert('Error', 'El PIN debe tener entre 4 y 10 dígitos');
    }
  };

  const handleBiometricLogin = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (hasHardware) {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Confirma tu identidad',
      });
      if (result.success) {
        onLogin();
      }
    } else {
      Alert.alert('Error', 'Tu dispositivo no soporta autenticación biométrica');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={pin}
        onChangeText={setPin}
        placeholder="Ingresa tu PIN (4-10 dígitos)"
        keyboardType="numeric"
        secureTextEntry
        maxLength={10}
      />
      <View style={styles.buttonContainer}>
      <Button style={styles.buttonContainer} title="Ingresar con PIN" onPress={handlePinSubmit} />
      </View>
      <View style={styles.buttonContainer}>
      <Button style={styles.buttonContainer} title="Ingresar con biometría" onPress={handleBiometricLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: 'gray',
    
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    padding: 10,
},});

export default Login;