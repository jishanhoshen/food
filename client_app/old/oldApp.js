import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const api_key = 'demoapi';
  const host_name = 'http://192.168.0.100';

  const getMovies = async () => {
    try {
      const response = await fetch(
        host_name+'/api/' + api_key + '/users'
      );
      const json = await response.json();
      setData(json);
      // console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <View style={styles.container}>
      <Card>
        {isLoading ? (
          <View style={styles.skall}></View>
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <Text style={styles.paragraph}>{item.email}</Text>
            )}
          />
        )}
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  skall: {
    backgroundColor: '#DDDDDD',
    padding: 8,
    width: 160,
  },
});