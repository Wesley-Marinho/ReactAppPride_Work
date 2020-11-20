import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/pages/Home';
import Perfil from './src/pages/Perfil';
import Empresas from './src/pages/Empresas';
import Mensagens from "./src/pages/Mensagens";
import Curriculo from './src/pages/Curriculo';
import Lista from "./src/pages/Lista";
import Msg from "./src/pages/Msg";
import CustomDrawer from './src/components/CustomDrawer';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={CustomDrawer}
        drawerContentOptions={{
          style: {
            backgroundColor: '#FFFFFF'
          },
          activeTintColor: '#4A0A8A',
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Resultados mais recentes" component={Lista} />
        <Drawer.Screen name="Perfil" component={Perfil} />
        <Drawer.Screen name="Currículo" component={Curriculo} />
        <Drawer.Screen name="Empresas" component={Empresas} />
        <Drawer.Screen name="Mensagens" component={Mensagens} />
        <Drawer.Screen name="Conversas recentes" component={Msg} />
       
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
