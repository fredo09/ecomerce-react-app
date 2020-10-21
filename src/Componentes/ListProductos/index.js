/**
*   Componente Productos
**/

import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Loading } from '../Loading';
import { Producto } from './../Productos';

export const ListProductos = ({productos}) => {
    const { loading, result, error } = productos;

    return (
        <Container>
            <Row>
                { loading || !result ? (
                    <Loading/>
                ) : result.map((producto, idx) => {
                    return (
                        <Producto 
                            key={idx}
                            producto={producto}
                        />
                    );
                })}
            </Row>
        </Container>
    );
}