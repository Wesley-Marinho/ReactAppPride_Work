import React from 'react';
import { View, Image} from 'react-native';

export default function Lista() {
  return (
    <View>
     <Image
        source={require('../img/Lista.png')}
        style={{height: '100%',width: '100%',}}
        />
    </View>
  );
}