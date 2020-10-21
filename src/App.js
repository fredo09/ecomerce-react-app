import React from 'react';
import { TopMenu } from './Componentes/TopMenu';
import { ListProductos } from './Componentes/ListProductos';

import { FetchApi } from './hooks/FetchApi'; 
import { URL_API_PRODUCTS } from './utils/constantes'; 
 
import './App.css';

const App = () => {

  // Llamado a la API
  const data = FetchApi(URL_API_PRODUCTS, null);

  return(
    <div>
      <TopMenu/>
      <ListProductos
        productos={data}
      />
    </div>
  );
}

export default App;
