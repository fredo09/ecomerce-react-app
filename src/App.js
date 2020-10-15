import React from 'react';
import { TopMenu } from './Componentes/TopMenu';
import { FetchApi } from './hooks/FetchApi'; 
import { URL_API_PRODUCTS } from './utils/constantes'; 
 
import './App.css';

const App = () => {

  // Llamado a la API
  const data = FetchApi(URL_API_PRODUCTS);

  console.log(data);

  return(
    <div>
      <TopMenu/>
      <h1>Hola Page</h1>
    </div>
  );
}

export default App;
