/**
 * Tela de Serviços
 * Exibe a lista de serviços disponíveis na barbearia
 */

// Importação das bibliotecas necessárias
import React from 'react';
// Importação dos componentes do React Native
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// Importação do SafeAreaView para garantir que o conteúdo seja exibido corretamente
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Componente da tela de serviços
 * Gerencia a exibição dos serviços disponíveis
 */
const ServicosScreen = () => {
  // Lista de serviços disponíveis
  const servicos = [
    {
      id: 1,
      nome: 'Corte de Cabelo',
      descricao: 'Corte de cabelo personalizado com as técnicas mais modernas',
      duracao: '30 min',
      preco: 'R$ 50,00',
      imagem: 'https://via.placeholder.com/150', // URL de uma imagem de placeholder
    },
    {
      id: 2,
      nome: 'Barba',
      descricao: 'Barba feita com navalha e produtos de qualidade',
      duracao: '20 min',
      preco: 'R$ 30,00',
      imagem: 'https://via.placeholder.com/150', // URL de uma imagem de placeholder
    },
    {
      id: 3,
      nome: 'Corte + Barba',
      descricao: 'Pacote completo com corte de cabelo e barba',
      duracao: '50 min',
      preco: 'R$ 70,00',
      imagem: 'https://via.placeholder.com/150', // URL de uma imagem de placeholder
    },
    {
      id: 4,
      nome: 'Hidratação',
      descricao: 'Hidratação profunda para cabelo e barba',
      duracao: '15 min',
      preco: 'R$ 25,00',
      imagem: 'https://via.placeholder.com/150', // URL de uma imagem de placeholder
    },
    {
      id: 5,
      nome: 'Pigmentação',
      descricao: 'Pigmentação natural para cabelo e barba',
      duracao: '30 min',
      preco: 'R$ 40,00',
      imagem: 'https://via.placeholder.com/150', // URL de uma imagem de placeholder
    },
  ];

  return (
    // SafeAreaView garante que o conteúdo seja exibido corretamente
    <SafeAreaView style={styles.container}>
      {/* ScrollView permite rolagem do conteúdo */}
      <ScrollView>
        {/* Container do cabeçalho */}
        <View style={styles.header}>
          {/* Título da tela */}
          <Text style={styles.title}>Nossos Serviços</Text>
          {/* Subtítulo da tela */}
          <Text style={styles.subtitle}>Escolha o serviço que melhor atende suas necessidades</Text>
        </View>

        {/* Lista de serviços */}
        <View style={styles.servicosList}>
          {servicos.map((servico) => (
            <View key={servico.id} style={styles.servicoCard}>
              {/* Container da imagem do serviço */}
              <View style={styles.servicoImagemContainer}>
                {/* Imagem do serviço */}
                <View style={styles.servicoImagem}>
                  <Text style={styles.servicoImagemText}>{servico.nome.charAt(0)}</Text>
                </View>
              </View>

              {/* Container das informações do serviço */}
              <View style={styles.servicoInfo}>
                {/* Nome do serviço */}
                <Text style={styles.servicoNome}>{servico.nome}</Text>
                {/* Descrição do serviço */}
                <Text style={styles.servicoDescricao}>{servico.descricao}</Text>
                {/* Container das informações adicionais */}
                <View style={styles.servicoDetalhes}>
                  {/* Duração do serviço */}
                  <Text style={styles.servicoDuracao}>{servico.duracao}</Text>
                  {/* Preço do serviço */}
                  <Text style={styles.servicoPreco}>{servico.preco}</Text>
                </View>
              </View>
            </View>
          ))}
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
  // Estilo do título
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a', // Cor do texto preto
    marginBottom: 10,
  },
  // Estilo do subtítulo
  subtitle: {
    fontSize: 16,
    color: '#666', // Cor do texto cinza
    textAlign: 'center',
  },
  // Lista de serviços
  servicosList: {
    padding: 20,
  },
  // Estilo do card de serviço
  servicoCard: {
    backgroundColor: '#fff', // Cor de fundo branco
    borderRadius: 10, // Borda arredondada
    marginBottom: 20,
    padding: 15,
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
  // Container da imagem do serviço
  servicoImagemContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  // Estilo da imagem do serviço
  servicoImagem: {
    width: 100,
    height: 100,
    borderRadius: 50, // Imagem circular
    backgroundColor: '#1a1a1a', // Cor de fundo preto
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Estilo do texto da imagem
  servicoImagemText: {
    fontSize: 40,
    color: '#fff', // Cor do texto branco
    fontWeight: 'bold',
  },
  // Container das informações do serviço
  servicoInfo: {
    flex: 1,
  },
  // Estilo do nome do serviço
  servicoNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a', // Cor do texto preto
    marginBottom: 5,
  },
  // Estilo da descrição do serviço
  servicoDescricao: {
    fontSize: 14,
    color: '#666', // Cor do texto cinza
    marginBottom: 10,
  },
  // Container dos detalhes do serviço
  servicoDetalhes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // Estilo da duração do serviço
  servicoDuracao: {
    fontSize: 14,
    color: '#666', // Cor do texto cinza
  },
  // Estilo do preço do serviço
  servicoPreco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a', // Cor do texto preto
  },
});

export default ServicosScreen; 