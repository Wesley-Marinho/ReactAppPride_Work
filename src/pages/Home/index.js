import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilos from "../Estilos";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <Image
        source={require('../img/Home.png')}
        style={{ height: '100%', width: '100%', }}
      />
      <TouchableOpacity style={estilos.button}
      onPress={ () => navigation.navigate('Resultados mais recentes')}>
        <View style={estilos.btnArea}>
          <Text style={estilos.txt}>Pesquisar</Text>
        </View>
      </TouchableOpacity>

      
    </View>
  );
}