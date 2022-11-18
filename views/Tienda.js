import React, { useContext, useEffect, Fragment } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Separator,
    Content,
    List,
    ListItem,
    Thumbnail,
    Body
} from 'native-base';
import globalStyles from '../styles/global';

import FirebaseContext from '../context/firebase/firebaseContext';
import PedidosContext from '../context/pedidos/pedidosContext';


const Tienda = () => {

    //context de Firebase
    const { menu, obtenerProductos } = useContext(FirebaseContext);

    //Contest pedido
    const { seleccionarArticulo } = useContext(PedidosContext);

    //hook para redireccionar
    const navigation = useNavigation();

    useEffect(() => {
        obtenerProductos();
    }, []);

const mostrarHeading = (categoria, i) => {
    if(i > 0){    
        const categoriaAnterior = menu [i - 1].categoria;
            if(categoriaAnterior !== categoria){
                return(
                    <Separator style = { styles.separador } >
                        <Text style= { styles.separadorTexto } > {categoria} </Text>
                    </Separator>
                )
            }
        } else {
            return(
                <Separator style = { styles.separador } >
                    <Text style= { styles.separadorTexto } > {categoria} </Text>
                </Separator>
            )
        }
    }

    return ( 
        <Container style = { globalStyles.contenedor } >
            <Content style= {{ backgroundColor: '#FFF' }} >
                <List>
                    {menu.map( (articulo, i) => {
                        const { imagen, nombre, descripcion,categoria ,precio , id } = articulo;
                        return (
                            <Fragment key={id}>
                                {mostrarHeading(categoria, i) }
                                <ListItem
                                    onPress = { () => {

                                    //Eliminar algunas propiedades del articulo
                                    const { existencia, ...articulo2 } = articulo;

                                        seleccionarArticulo(articulo2);
                                        navigation.navigate("DetalleArticulo");
                                    }}
                                >
                                <Thumbnail 
                                    large 
                                    square 
                                    source={{uri: imagen}}
                                    />
                                        <Body>
                                            <Text>{nombre}</Text>
                                            <Text
                                                note
                                                // numberOfLines={} limite de lineas en la descricion de un producto
                                            >
                                                {descripcion}
                                            </Text>
                                            <Text> Precio $ {precio} </Text>
                                        </Body>
                                </ListItem>
                            </Fragment>
                        )
                    })}
                </List>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    separador: {
        backgroundColor: '#000',
    },
    separadorTexto: {
        color: '#FFDA00',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
})

export default Tienda;