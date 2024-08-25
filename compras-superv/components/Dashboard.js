import React from 'react';
import { View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile';
import UpcomingOpenings from './UpcomingOpenings';

const Stack = createStackNavigator();

function DashboardHome({ navigation, onLogout }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Perfil" onPress={() => navigation.navigate('Profile')} />
      <Button title="Próximas aperturas" onPress={() => navigation.navigate('UpcomingOpenings')} />
      <Button title="Cerrar sesión" onPress={onLogout} />
    </View>
  );
}

function Dashboard({ onLogout }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DashboardHome">
        {props => <DashboardHome {...props} onLogout={onLogout} />}
      </Stack.Screen>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="UpcomingOpenings" component={UpcomingOpenings} />
    </Stack.Navigator>
  );
}

export default Dashboard;