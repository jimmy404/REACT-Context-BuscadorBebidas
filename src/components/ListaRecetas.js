import React, { useContext } from 'react';
import { RecetasContext } from '../context/RecetasContext';


const ListaRecetas = () => {

    //Extraer recetas
    const {recetas} = useContext(RecetasContext);

    return (
        <h1>Lista Recetas</h1>
    );
}

export default ListaRecetas;