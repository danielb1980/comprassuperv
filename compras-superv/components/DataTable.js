import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const DataTable = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [url]);

  if (loading) {
    return <Text>Loading...</Text>;
  }
console.log(data)
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            
            
            <Text style={styles.cell}>{item['Fecha de apertura'].substring(0,10)}</Text>
            <Text style={styles.cell}>{item['Nombre proceso']}</Text>
            <Text style={styles.cell}>{item['Número proceso']}</Text>
            
            <Text style={styles.cell}>{item['Tipo de Proceso']}</Text>
            <Text style={styles.cell}>{item.Estado}</Text>
            
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default DataTable;
