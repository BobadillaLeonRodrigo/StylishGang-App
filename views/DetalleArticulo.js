import React, { useContext } from 'react';
import { Text, Image } from 'react-native';
import PedidosContext from '../context/pedidos/pedidosContext';
import {
    Container,
    Content,
    Footer,
    FooterTab,
    Button,
    Body,
    H1,
    Card,
    CardItem
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/global';

const DetalleArticulo = () => {

    //pedido contex
    const { articulo } = useContext(PedidosContext);
    const { nombre,imagen,descripcion,precio } = articulo;

    //redireccionar 
    const navigation = useNavigation();

    return ( 
        <Container style= { globalStyles.contenedor }>
            <Content style= { globalStyles.contenido }>
                <H1 style= { globalStyles.titulo } >{nombre}</H1>
                    <Card>
                        <CardItem>
                            <Body>
                                <Image style= { globalStyles.imagen } source= {{uri: imagen}} />
                                    <Text style= {{ marginTop: 20 }}> {descripcion} </Text>
                                    <Text style= { globalStyles.cantidad } > Precio: {precio} $ </Text>
                            </Body>
                        </CardItem>
                    </Card>
            </Content>
                <Footer>
                    <FooterTab>
                        <Button 
                        style = { globalStyles.boton } 
                        onPress = { () => navigation.navigate("FormularioArticulo") }

                        >
                            <Text style = { globalStyles.botonTexto } >
                                
                            </Text>
                        </Button>
                    </FooterTab>
                </Footer>
        </Container>
    );
}

export default DetalleArticulo;