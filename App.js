import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NuevaOrden from './views/NuevaOrden';
import Tienda from './views/Tienda';
import DetalleArticulo from './views/DetalleArticulo';
import FormularioArticulo from './views/FormularioArticulo';
import ResumenPedido from './views/ResumenPedido';
import ProgresoPedido from './views/ProgresoPedido';

// importar state de context
import FirebaseState from './context/firebase/firebaseState';
import PedidosState from './context/pedidos/pedidosState';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
    <FirebaseState>
      <PedidosState>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#FFDA00'
            },
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen 
            name = "NuevaOrden"
            component={NuevaOrden}
            options={{
              title: "Nueva Orden"
            }}
          />

          <Stack.Screen 
            name = "Tienda"
            component={Tienda}
            options={{
              title: "Nuestra Tienda"
            }}
          />

          <Stack.Screen 
            name = "DetalleArticulo"
            component={DetalleArticulo}
            options={{
              title: "Detalle Articulo"
            }}
          />

          <Stack.Screen 
            name = "FormularioArticulo"
            component={FormularioArticulo}
            options={{
              title: "Ordenar Articulo"
            }}
          />

          <Stack.Screen 
            name = "ResumenPedido"
            component={ResumenPedido}
            options={{
              title: "Resunem Pedido"
            }}
          />

          <Stack.Screen 
            name = "ProgresoPedido"
            component={ProgresoPedido}
            options={{
              title: "Progreso de Pedido"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </PedidosState>
    </FirebaseState>
    </>
  );
};

export default App;
