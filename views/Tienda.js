import React, { useContext, useEffect, Fragment } from 'react';
import { StyleSheet } from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import {
    Container,
    Separator,
    Content,
    List,
    ListItem,
    Thumbnail,
    Text,
    Body
} from 'native-base';
import globalStyles from '../styles/global';

const Tienda = () => {

    //context de Firebase
    const { menu, obtenerProductos } = useContext(FirebaseContext);

    useEffect(() => {
        obtenerProductos();
    }, []);

    return ( 
        <Container style = { globalStyles.contenedor } >
            <Content style= {{ backgroundColor: '#FFF' }} >
                <List>
                    {menu.map(articulo => {
                        const { imagen, nombre, descripcion, categoria,precio,id } = articulo;
                        return (
                            <Fragment key={id}>
                                <ListItem
                                
                                >
                                <Thumbnail large square source={{uri: imagen}}/>
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

export default Tienda;