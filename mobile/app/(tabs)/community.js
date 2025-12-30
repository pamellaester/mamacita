import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Community() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="account-group" size={64} color="#D946EF" />
      <Text style={styles.title}>Comunidade</Text>
      <Text style={styles.subtitle}>Conecte-se com outras mães e compartilhe experiências!</Text>
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
