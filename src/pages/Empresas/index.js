import React from 'react';
import { View, Image} from 'react-native';

export default function Empresas() {
  return (
    <View>
     <Image
        source={require('../img/Empresas.png')}
        style={{height: '100%',width: '100%',}}
        />
    </View>
  );
}