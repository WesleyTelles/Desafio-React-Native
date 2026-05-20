import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, ActivityIndicator, StyleSheet } from 'react-native';

export default function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(r => r.json())
      .then(data => {
        const sorted = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(sorted);
      })
      .catch(() => alert('Erro ao carregar. Verifique sua conexão.'))
      .finally(() => setLoading(false));
  }, []);

  const filtered = countries.filter(c =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar país..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filtered}
        keyExtractor={c => c.cca3}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.flag}>{item.flag}</Text>
            <View>
              <Text style={styles.name}>{item.name.common}</Text>
              <Text>Capital: {item.capital?.[0] ?? '—'}</Text>
              <Text>População: {item.population.toLocaleString()}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 12 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 12 },
  card: { flexDirection: 'row', alignItems: 'center', padding: 12, marginBottom: 8, backgroundColor: '#f9f9f9', borderRadius: 8 },
  flag: { fontSize: 36, marginRight: 12 },
  name: { fontWeight: 'bold', fontSize: 16 },
});
