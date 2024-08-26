import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native';
import DataTable from './DataTable';


 
const UpcomingOpenings = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DataTable url="http://149.50.138.61:5000/data" />
    </SafeAreaView>
  );
};
export default UpcomingOpenings;