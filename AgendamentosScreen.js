import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AgendamentosScreen = ({ route }) => {
  const { agendamentos } = route.params || { agendamentos: [] };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Meus Agendamentos</Text>
      {agendamentos.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum agendamento encontrado</Text>
      ) : (
        agendamentos.map((agendamento, index) => (
          <View key={index} style={styles.agendamentoCard}>
            <Text style={styles.agendamentoTitle}>Agendamento #{index + 1}</Text>
            <Text style={styles.agendamentoInfo}>Tipo de Corte: {agendamento.tipoCorte}</Text>
            <Text style={styles.agendamentoInfo}>Data: {agendamento.data}</Text>
            <Text style={styles.agendamentoInfo}>Horário: {agendamento.horario}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  agendamentoCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  agendamentoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  agendamentoInfo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default AgendamentosScreen; 