import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilos from "../Estilos";

export default function Mensagens() {
  const navigation = useNavigation();
  return (
    <View>
     <Image
        source={require('../img/Chat.png')}
        style={{height: '100%',width: '100%',}}
        />

<TouchableOpacity style={estilos.btnMsg}
      onPress={ () => navigation.navigate('Conversas recentes')}>
        <View style={estilos.btnArea}>
          <Image
            source={require('../img/msg.png')
          }
            style={estilos.imgMSG}
          />
        </View>
      </TouchableOpacity>


    </View>
  );
}