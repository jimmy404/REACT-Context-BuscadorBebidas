import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear context

export const ModalContext = createContext();


const ModalProvider = () => {

    //state provider
    const [ idreceta, guardarIdReceta ] = useState(null);


    return (
        <ModalContext.Provider
            value={{
                guardarIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>>
    );
}

export default ModalProvider;

