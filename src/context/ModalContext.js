import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear context

export const ModalContext = createContext();


const ModalProvider = (props) => {

    //state provider
    const [ idreceta, guardarIdReceta ] = useState(null);
    const [informacion, guardarReceta ] = useState({});

    // cuando tengo la receta, llamado a al api

    useEffect(() => {
        const obtenerReceta = async () => {
            if(!idreceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}
            `;
            const resultado = await axios.get(url);
            guardarReceta(resultado.data.drinks[0]);
        }
        obtenerReceta();
    }, [idreceta]);


    return (
        <ModalContext.Provider
            value={{
                informacion,
                guardarIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;

