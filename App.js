import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//função para criar a navegação
import createAppbarStyle from './src/utils/createAppBar'
import HomeScreen     from './src/screens/HomeScreen'
import ListagemScreen from './src/screens/ListagemScreen';
import CadastroScreen from './src/screens/CadastroScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home"     component={HomeScreen}     options={createAppbarStyle('Imobiliaria')} />
          <Stack.Screen name="Listagem" component={ListagemScreen} options={createAppbarStyle('Imobiliaria')} />
          <Stack.Screen name="Cadastro" component={CadastroScreen} options={createAppbarStyle('Imobiliaria')} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}