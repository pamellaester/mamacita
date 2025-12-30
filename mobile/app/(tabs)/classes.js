import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Classes() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="school" size={64} color="#D946EF" />
      <Text style={styles.title}>Aulas</Text>
      <Text style={styles.subtitle}>Em breve você terá acesso a aulas exclusivas!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
});
