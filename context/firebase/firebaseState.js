import React, { useReducer } from 'react';

import firebase from '../../firebase';
import firebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

import { OBTENER_PRODUCTOS_EXITO } from '../../types';

import _ from 'lodash';

const FirebaseState = props => {

    //Crear state inicial
    const initialState = {
        menu: []
    }

    //useReducer con dispatch para ejecutar las funciones
    const [state,dispatch] = useReducer(firebaseReducer, initialState);

    //funcion que se ejecunta para traer los productos
    const obtenerProductos = () => {
    

        //consultar firebase
        firebase.db
            .collection('Artuculos')
            .where('existencia', '==', true) //traer solo los que esten en existencia (true)
            .onSnapshot(manejarSnapshot);
        function manejarSnapshot(snapshot){
            let articulos = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            //Ordenar por categoria con lodash
            articulos = _.sortBy(articulos, 'categoria');


            //Tenemos resultado de la base de datos
            dispatch({
                type: OBTENER_PRODUCTOS_EXITO,
                payload: articulos
            });
        }
    }


    return (
        <FirebaseContext.Provider value= {{ menu: state.menu,firebase,obtenerProductos }} >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;