import React, { useReducer } from 'react';


import PedidosReducer from './pedidosReducer';
import PedidosContext from './pedidosContext';

import { 
    SELECCIONAR_PRODUCTO 
} from '../../types';

const PedidosState = props => {

    //Crear state inicial
    const initialState = {
        pedido: [],
        articulo: null
    }

    //useReducer con dispatch para ejecutar las funciones
    const [state,dispatch] = useReducer(PedidosReducer, initialState);

    //Seleccionar el productos que el usuario desea ordenar
    const seleccionarArticulo = articulo => {
        dispatch({
            type: SELECCIONAR_PRODUCTO,
            payload: articulo
        })
    }

    return (
        <PedidosContext.Provider 
            value= {{ 
                pedido: state.pedido,
                articulo: state.articulo,
                seleccionarArticulo }} >
            {props.children}
        </PedidosContext.Provider>
    )
}

export default PedidosState;