/**
 * Tela de agendamento
 * Permite ao usuário selecionar um serviço e agendar um horário
 */

// Importação das bibliotecas necessárias
import React, { useState } from 'react';
// Importação dos componentes do React Native
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
// Importação do SafeAreaView para garantir que o conteúdo seja exibido corretamente
import { SafeAreaView } from 'react-native-safe-area-context';
// Importação do componente de seleção de data/hora
// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
// Importação do useNavigation para navegação
import { useNavigation } from '@react-navigation/native';

/**
 * Componente da tela de agendamento
 * Gerencia a seleção de serviço e data/hora
 */
const AgendamentoScreen = () => {
  const navigation = useNavigation();
  // Estados para gerenciar a data e o serviço selecionado
  const [data, setData] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [servicoSelecionado, setServicoSelecionado] = useState(null);

  // Lista de serviços disponíveis
  const servicos = [
    {
      id: 1,
      nome: 'Corte de Cabelo',
      duracao: '30 min',
      preco: 'R$ 50,00',
    },
    {
      id: 2,
      nome: 'Barba',
      duracao: '20 min',
      preco: 'R$ 30,00',
    },
    {
      id: 3,
      nome: 'Corte + Barba',
      duracao: '50 min',
      preco: 'R$ 70,00',
    },
  ];

  /**
   * Função chamada quando a data é alterada
   * @param {Date} selectedDate - Nova data selecionada
   */
  const onChangeDate = (selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setData(selectedDate);
    }
  };

  /**
   * Formata a data para exibição
   * @param {Date} date - Data a ser formatada
   * @returns {string} Data formatada
   */
  const formatarData = (date) => {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  /**
   * Função para confirmar o agendamento
   */
  const confirmarAgendamento = () => {
    if (!servicoSelecionado) {
      Alert.alert('Erro', 'Por favor, selecione um serviço');
      return;
    }

    const agendamento = {
      tipoCorte: servicoSelecionado.nome,
      data: formatarData(data),
      horario: data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    };

    // Navega para a tela de agendamentos passando o novo agendamento
    navigation.navigate('Agendamentos', { agendamentos: [agendamento] });
  };

  return (
    // SafeAreaView garante que o conteúdo seja exibido corretamente
    <SafeAreaView style={styles.container}>
      {/* ScrollView permite rolagem do conteúdo */}
      <ScrollView style={styles.scrollView}>
        {/* Container do conteúdo */}
        <View style={styles.content}>
          {/* Título da tela */}
          <Text style={styles.title}>Agendar Serviço</Text>

          {/* Seção de seleção de serviço */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Selecione o Serviço</Text>
            {/* Lista de serviços */}
            <View style={styles.servicosList}>
              {servicos.map((servico) => (
                <TouchableOpacity
                  key={servico.id}
                  style={[
                    styles.servicoItem,
                    servicoSelecionado?.id === servico.id && styles.servicoSelecionado,
                  ]}
                  onPress={() => setServicoSelecionado(servico)}
                >
                  <Text style={styles.servicoNome}>{servico.nome}</Text>
                  <Text style={styles.servicoInfo}>
                    {servico.duracao} • {servico.preco}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Seção de seleção de data/hora */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Data e Hora</Text>
            {/* Botão para abrir o seletor de data/hora */}
            <TouchableOpacity
              style={styles.dateButton}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.dateText}>
                {formatarData(data)}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Botão de confirmação do agendamento */}
          <TouchableOpacity
            style={[
              styles.confirmButton,
              !servicoSelecionado && styles.confirmButtonDisabled,
            ]}
            disabled={!servicoSelecionado}
            onPress={confirmarAgendamento}
          >
            <Text style={styles.confirmButtonText}>Confirmar Agendamento</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Seletor de data/hora */}
      <DateTimePickerModal
        isVisible={showDatePicker}
        mode="datetime"
        date={data}
        onConfirm={onChangeDate}
        onCancel={() => setShowDatePicker(false)}
        locale="pt-BR"
        is24Hour={true}
      />
    </SafeAreaView>
  );
};

/**
 * Estilos da tela
 * Define a aparência visual dos componentes
 */
const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Cor de fundo cinza claro
  },
  // Estilo do ScrollView
  scrollView: {
    flex: 1,
  },
  // Container do conteúdo
  content: {
    padding: 20,
  },
  // Estilo do título
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a', // Cor do texto preto
    marginBottom: 30,
  },
  // Estilo da seção
  section: {
    marginBottom: 30,
  },
  // Estilo do título da seção
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a', // Cor do texto preto
    marginBottom: 15,
  },
  // Lista de serviços
  servicosList: {
    gap: 10,
  },
  // Item de serviço
  servicoItem: {
    backgroundColor: '#fff', // Cor de fundo branco
    padding: 15,
    borderRadius: 10, // Borda arredondada
    // Sombra para dar efeito de elevação
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  // Estilo do item de serviço selecionado
  servicoSelecionado: {
    borderWidth: 2,
    borderColor: '#1a1a1a', // Cor da borda preta
  },
  // Estilo do nome do serviço
  servicoNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a', // Cor do texto preto
    marginBottom: 5,
  },
  // Estilo das informações do serviço
  servicoInfo: {
    fontSize: 14,
    color: '#666', // Cor do texto cinza
  },
  // Estilo do botão de data
  dateButton: {
    backgroundColor: '#fff', // Cor de fundo branco
    padding: 15,
    borderRadius: 10, // Borda arredondada
    // Sombra para dar efeito de elevação
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  // Estilo do texto da data
  dateText: {
    fontSize: 16,
    color: '#1a1a1a', // Cor do texto preto
  },
  // Estilo do botão de confirmação
  confirmButton: {
    backgroundColor: '#1a1a1a', // Cor de fundo preto
    paddingVertical: 15,
    borderRadius: 10, // Borda arredondada
    alignItems: 'center',
    marginTop: 20,
  },
  // Estilo do botão de confirmação desabilitado
  confirmButtonDisabled: {
    backgroundColor: '#ccc', // Cor de fundo cinza
  },
  // Estilo do texto do botão de confirmação
  confirmButtonText: {
    color: '#fff', // Cor do texto branco
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AgendamentoScreen; 