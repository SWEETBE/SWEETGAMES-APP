import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const games = [
  { id: '1', name: 'Game One' },
  { id: '2', name: 'Game Two' },
  { id: '3', name: 'Game Three' },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Games</Text>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.game}>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  game: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default HomeScreen;