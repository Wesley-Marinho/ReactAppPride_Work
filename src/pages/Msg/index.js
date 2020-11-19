import React from 'react';
import { View, Image} from 'react-native';

export default function Msg() {
  return (
    <View>
     <Image
        source={require('../img/Mensagem.png')}
        style={{height: '100%',width: '100%',}}
        />
    </View>
  );
}