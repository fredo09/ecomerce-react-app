/**
*   Hook personalizado para peticiones HTTPS 
**/

import  { useEffect, useState } from 'react';


export const FetchApi = (url, options) =>{
    
    // States
    const [ loading, setLoading ] = useState(true);
    const [ result, setResult ] = useState(null);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                // Llamado a api
                const result = await fetch(url, options);
                const json = await result.json();

                // asignamos el estado al state y dejamos de cargar
                setResult(json);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);   
            }
        })();
    }, [options, url]);

    //Retornamos los tres estados
    return { loading, result, error };
}
 