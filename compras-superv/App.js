import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    const authStatus = await AsyncStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  };

  const handleLogin = async () => {
    await AsyncStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = async () => {
    await AsyncStorage.setItem('isAuthenticated', 'false');
    setIsAuthenticated(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="Dashboard">
            {props => <Dashboard {...props} onLogout={handleLogout} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Login">
            {props => <Login {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}