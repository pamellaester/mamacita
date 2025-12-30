import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Events() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="calendar" size={64} color="#D946EF" />
      <Text style={styles.title}>Eventos</Text>
      <Text style={styles.subtitle}>Participe de workshops, webinars e meetups!</Text>
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
