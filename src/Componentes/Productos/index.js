/**
*   Componente Productos 
**/

import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { BASE_URL } from './../../utils/constantes';

import './Producto.scss';

export const Producto = ({ producto }) => {

    console.log(producto);

    return (
        <Col xs={3} className="producto">
            <Card>
                <Card.Img variant="top" src={`${BASE_URL}/${producto.image}`} />
                <Card.Body>
                    <Card.Title>{producto.name}</Card.Title>
                    <Card.Text>{producto.extraInfo}</Card.Text>
                    <Card.Text>${producto.price} / Unidad</Card.Text>
                    <Button>
                        Añadir al carrito
                    </Button>
                </Card.Body> 
            </Card>
        </Col>
    );
}