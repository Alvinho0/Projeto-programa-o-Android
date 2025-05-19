/**
 * Tela inicial da aplicação
 * Exibe o menu principal com as opções de navegação
 */

// Importação das bibliotecas necessárias
import React from 'react';
// Importação dos componentes do React Native
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// Importação do SafeAreaView para garantir que o conteúdo seja exibido corretamente
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Componente da tela inicial
 * @param {Object} navigation - Objeto de navegação para mudar entre telas
 */
const HomeScreen = ({ navigation }) => {
  return (
    // SafeAreaView garante que o conteúdo seja exibido corretamente
    <SafeAreaView style={styles.container}>
      {/* ScrollView permite rolagem do conteúdo */}
      <ScrollView>
        {/* Container do cabeçalho */}
        <View style={styles.header}>
          {/* Título da barbearia */}
          <Text style={styles.title}>Barbearia</Text>
          {/* Subtítulo de boas-vindas */}
          <Text style={styles.subtitle}>Seja bem-vindo!</Text>
        </View>

        {/* Container do menu de opções */}
        <View style={styles.menuContainer}>
          {/* Botão para agendar horário */}
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('Agendamento')}
          >
            <Text style={styles.menuText}>Agendar Horário</Text>
          </TouchableOpacity>

          {/* Botão para ver serviços */}
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('Servicos')}
          >
            <Text style={styles.menuText}>Nossos Serviços</Text>
          </TouchableOpacity>

          {/* Botão para acessar o perfil */}
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('Perfil')}
          >
            <Text style={styles.menuText}>Meu Perfil</Text>
          </TouchableOpacity>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a', // Cor do texto preto
  },
  // Estilo do subtítulo
  subtitle: {
    fontSize: 16,
    color: '#666', // Cor do texto cinza
    marginTop: 5,
  },
  // Container do menu
  menuContainer: {
    padding: 20,
  },
  // Estilo dos itens do menu
  menuItem: {
    backgroundColor: '#fff', // Cor de fundo branco
    padding: 20,
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
  // Estilo do texto do menu
  menuText: {
    fontSize: 18,
    color: '#1a1a1a', // Cor do texto preto
    textAlign: 'center',
  },
});

export default HomeScreen; 