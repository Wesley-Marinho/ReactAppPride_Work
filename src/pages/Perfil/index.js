import React from 'react';
import { View, Image} from 'react-native';

export default function Perfil() {
  return (
    <View >
      <Image
        source={require('../img/Perfil.png')}
        style={{height: '100%',width: '100%',}}
        />
    </View>
  );
}