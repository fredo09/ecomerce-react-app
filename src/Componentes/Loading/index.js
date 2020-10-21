/**
*   Componente Loading 
**/

import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.scss';

export const Loading = () => {
    return (
        <div className="loading">
            <Spinner animation="grow" role="status"/>
            <h5>Cargando...</h5>
        </div>
    );
}