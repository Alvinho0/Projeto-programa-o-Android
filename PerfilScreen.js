/**
 * Tela de perfil do usuário
 * Exibe informações do usuário e histórico de agendamentos
 */

// Importação das bibliotecas necessárias
import React from 'react';
// Importação dos componentes do React Native
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
// Importação do SafeAreaView para garantir que o conteúdo seja exibido corretamente
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Componente da tela de perfil
 * Gerencia a exibição das informações do usuário e agendamentos
 */
const PerfilScreen = () => {
  // Dados de exemplo dos agendamentos
  const agendamentos = [
    {
      data: '25/04/2023',
      horario: '14:00',
      servico: 'Corte de Cabelo',
      status: 'Confirmado'
    },
    {
      data: '20/04/2023',
      horario: '15:30',
      servico: 'Barba',
      status: 'Concluído'
    }
  ];

  // Dados de exemplo do usuário
  const usuario = {
    nome: 'Alanis',
    email: 'Alanis@email.com',
    telefone: '(11) 99999-9999',
    foto: 'https://via.placeholder.com/150', // URL de uma imagem de placeholder
  };

  return (
    // SafeAreaView garante que o conteúdo seja exibido corretamente
    <SafeAreaView style={styles.container}>
      {/* ScrollView permite rolagem do conteúdo */}
      <ScrollView>
        {/* Container do cabeçalho do perfil */}
        <View style={styles.header}>
          {/* Container do avatar */}
          <View style={styles.avatarContainer}>
            {/* Avatar do usuário */}
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JD</Text>
            </View>
          </View>
          {/* Nome do usuário */}
          <Text style={styles.nome}>aAlanis</Text>
          {/* Email do usuário */}
          <Text style={styles.email}>Alanis@email.com</Text>
        </View>

        {/* Seção de agendamentos */}
        <View style={styles.section}>
          {/* Título da seção */}
          <Text style={styles.sectionTitle}>Meus Agendamentos</Text>
          {/* Lista de agendamentos */}
          {agendamentos.map((agendamento, index) => (
            <View key={index} style={styles.agendamentoCard}>
              {/* Cabeçalho do agendamento */}
              <View style={styles.agendamentoHeader}>
                {/* Data do agendamento */}
                <Text style={styles.agendamentoData}>{agendamento.data}</Text>
                {/* Status do agendamento */}
                <Text style={[
                  styles.agendamentoStatus,
                  agendamento.status === 'Confirmado' ? styles.statusConfirmado : styles.statusConcluido
                ]}>
                  {agendamento.status}
                </Text>
              </View>
              {/* Horário do agendamento */}
              <Text style={styles.agendamentoHorario}>Horário: {agendamento.horario}</Text>
              {/* Serviço agendado */}
              <Text style={styles.agendamentoServico}>Serviço: {agendamento.servico}</Text>
            </View>
          ))}
        </View>

        {/* Container do perfil */}
        <View style={styles.perfilContainer}>
          {/* Container da foto */}
          <View style={styles.fotoContainer}>
            {/* Foto do perfil */}
            <Image
              source={{ uri: usuario.foto }}
              style={styles.fotoPerfil}
            />
            {/* Botão para editar foto */}
            <TouchableOpacity style={styles.editarFotoButton}>
              <Text style={styles.editarFotoButtonText}>Editar Foto</Text>
            </TouchableOpacity>
          </View>

          {/* Container das informações */}
          <View style={styles.infoContainer}>
            {/* Item de informação - Nome */}
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Nome</Text>
              <Text style={styles.infoValue}>{usuario.nome}</Text>
            </View>

            {/* Item de informação - Email */}
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>{usuario.email}</Text>
            </View>

            {/* Item de informação - Telefone */}
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Telefone</Text>
              <Text style={styles.infoValue}>{usuario.telefone}</Text>
            </View>
          </View>

          {/* Container dos botões */}
          <View style={styles.botoesContainer}>
            {/* Botão para editar perfil */}
            <TouchableOpacity style={styles.editarButton}>
              <Text style={styles.editarButtonText}>Editar Perfil</Text>
            </TouchableOpacity>
            {/* Botão para sair */}
            <TouchableOpacity style={styles.sairButton}>
              <Text style={styles.sairButtonText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
  // Estilo do cabeçalho
  header: {
    padding: 20,
    alignItems: 'center',
  },
  // Container do avatar
  avatarContainer: {
    marginBottom: 15,
  },
  // Estilo do avatar
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Avatar circular
    backgroundColor: '#1a1a1a', // Cor de fundo preto
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Estilo do texto do avatar
  avatarText: {
    fontSize: 40,
    color: '#fff', // Cor do texto branco
    fontWeight: 'bold',
  },
  // Estilo do nome
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a', // Cor do texto preto
    marginBottom: 5,
  },
  // Estilo do email
  email: {
    fontSize: 16,
    color: '#666', // Cor do texto cinza
  },
  // Estilo da seção
  section: {
    padding: 20,
  },
  // Estilo do título da seção
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1a1a1a', // Cor do texto preto
  },
  // Estilo do card de agendamento
  agendamentoCard: {
    backgroundColor: '#fff', // Cor de fundo branco
    padding: 15,
    borderRadius: 10, // Borda arredondada
    marginBottom: 15,
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
  // Estilo do cabeçalho do agendamento
  agendamentoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  // Estilo da data do agendamento
  agendamentoData: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a', // Cor do texto preto
  },
  // Estilo do status do agendamento
  agendamentoStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15, // Borda arredondada
  },
  // Estilo do status confirmado
  statusConfirmado: {
    backgroundColor: '#e3f2fd', // Cor de fundo azul claro
    color: '#1976d2', // Cor do texto azul
  },
  // Estilo do status concluído
  statusConcluido: {
    backgroundColor: '#e8f5e9', // Cor de fundo verde claro
    color: '#388e3c', // Cor do texto verde
  },
  // Estilo do horário do agendamento
  agendamentoHorario: {
    fontSize: 14,
    color: '#666', // Cor do texto cinza
    marginBottom: 5,
  },
  // Estilo do serviço agendado
  agendamentoServico: {
    fontSize: 14,
    color: '#666', // Cor do texto cinza
  },
  // Estilo do botão de logout
  logoutButton: {
    backgroundColor: '#ff5252', // Cor de fundo vermelho
    padding: 15,
    margin: 20,
    borderRadius: 10, // Borda arredondada
    alignItems: 'center',
  },
  // Estilo do texto do botão de logout
  logoutButtonText: {
    color: '#fff', // Cor do texto branco
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Container do perfil
  perfilContainer: {
    flex: 1,
    padding: 20,
  },
  // Container da foto
  fotoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  // Estilo da foto do perfil
  fotoPerfil: {
    width: 150,
    height: 150,
    borderRadius: 75, // Foto circular
    marginBottom: 10,
  },
  // Estilo do botão de editar foto
  editarFotoButton: {
    backgroundColor: '#1a1a1a', // Cor de fundo preto
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5, // Borda arredondada
  },
  // Estilo do texto do botão de editar foto
  editarFotoButtonText: {
    color: '#fff', // Cor do texto branco
    fontSize: 14,
    fontWeight: 'bold',
  },
  // Container das informações
  infoContainer: {
    backgroundColor: '#fff', // Cor de fundo branco
    borderRadius: 10, // Borda arredondada
    padding: 20,
    marginBottom: 30,
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
  // Estilo do item de informação
  infoItem: {
    marginBottom: 15,
  },
  // Estilo do label da informação
  infoLabel: {
    fontSize: 14,
    color: '#666', // Cor do texto cinza
    marginBottom: 5,
  },
  // Estilo do valor da informação
  infoValue: {
    fontSize: 16,
    color: '#1a1a1a', // Cor do texto preto
    fontWeight: 'bold',
  },
  // Container dos botões
  botoesContainer: {
    gap: 10,
  },
  // Estilo do botão de editar
  editarButton: {
    backgroundColor: '#1a1a1a', // Cor de fundo preto
    paddingVertical: 15,
    borderRadius: 5, // Borda arredondada
    alignItems: 'center',
  },
  // Estilo do texto do botão de editar
  editarButtonText: {
    color: '#fff', // Cor do texto branco
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Estilo do botão de sair
  sairButton: {
    backgroundColor: '#fff', // Cor de fundo branco
    paddingVertical: 15,
    borderRadius: 5, // Borda arredondada
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1a1a1a', // Cor da borda preta
  },
  // Estilo do texto do botão de sair
  sairButtonText: {
    color: '#1a1a1a', // Cor do texto preto
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PerfilScreen; 