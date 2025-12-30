import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useAuth } from '../../utils/AuthContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home() {
  const { user } = useAuth();

  return (
    <ScrollView style={styles.container}>
      {/* Welcome Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, {user?.motherProfile?.fullName || 'Mamãe'}! 💜</Text>
        <Text style={styles.subgreeting}>Como você está se sentindo hoje?</Text>
      </View>

      {/* Pregnancy Week Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <MaterialCommunityIcons name="baby-face" size={32} color="#D946EF" />
          <Text style={styles.cardTitle}>Sua Gravidez</Text>
        </View>

        {user?.motherProfile?.pregnancy ? (
          <View style={styles.pregnancyInfo}>
            <View style={styles.weekBadge}>
              <Text style={styles.weekNumber}>
                {user.motherProfile.pregnancy.currentWeek}
              </Text>
              <Text style={styles.weekLabel}>semanas</Text>
            </View>

            <Text style={styles.pregnancyText}>
              Você está na semana {user.motherProfile.pregnancy.currentWeek} da sua gravidez
            </Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ver Conteúdo da Semana</Text>
              <MaterialCommunityIcons name="chevron-right" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.noPregnancy}>
            <Text style={styles.noPregnancyText}>
              Você ainda não configurou seu acompanhamento de gravidez
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Configurar Agora</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ações Rápidas</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickAction}>
            <MaterialCommunityIcons name="pencil" size={28} color="#D946EF" />
            <Text style={styles.quickActionText}>Registrar Sintomas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickAction}>
            <MaterialCommunityIcons name="checkbox-marked-circle" size={28} color="#D946EF" />
            <Text style={styles.quickActionText}>Checklist</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickAction}>
            <MaterialCommunityIcons name="book-open-variant" size={28} color="#D946EF" />
            <Text style={styles.quickActionText}>Artigos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickAction}>
            <MaterialCommunityIcons name="chart-line" size={28} color="#D946EF" />
            <Text style={styles.quickActionText}>Progresso</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Upcoming Events */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Próximos Eventos</Text>
        <View style={styles.emptyState}>
          <MaterialCommunityIcons name="calendar-blank" size={48} color="#D1D5DB" />
          <Text style={styles.emptyText}>Nenhum evento próximo</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Explorar Eventos</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Community Posts */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Comunidade</Text>
        <View style={styles.emptyState}>
          <MaterialCommunityIcons name="forum" size={48} color="#D1D5DB" />
          <Text style={styles.emptyText}>Conecte-se com outras mães</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Ver Comunidade</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: '#F8E5F1',
    padding: 20,
    paddingTop: 12,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  subgreeting: {
    fontSize: 16,
    color: '#6B7280',
  },
  card: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  pregnancyInfo: {
    gap: 16,
  },
  weekBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FDF2F8',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
  },
  weekNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#D946EF',
  },
  weekLabel: {
    fontSize: 14,
    color: '#9333EA',
  },
  pregnancyText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
  },
  noPregnancy: {
    gap: 16,
  },
  noPregnancyText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#D946EF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    gap: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickAction: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    minWidth: '46%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  quickActionText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
  },
  emptyState: {
    backgroundColor: '#FFFFFF',
    padding: 32,
    borderRadius: 12,
    alignItems: 'center',
    gap: 12,
  },
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
  },
  link: {
    fontSize: 16,
    color: '#D946EF',
    fontWeight: '600',
  },
});
