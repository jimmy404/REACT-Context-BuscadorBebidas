import React, { useContext } from 'react'
import {ModalContext} from '../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const Receta = ({receta}) => {

    //extraer valores del context
    const {guardarIdReceta} = useContext(ModalContext);


    return (
        <div className="col-md-4 md-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>
                <img
                    className="card-img-wop"
                    src={receta.strDrinkThumb}
                    alt={`Imagen de ${receta.strDrink}`}
                />
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            guardarIdReceta(receta.idDrink)
                        }}
                    >Ver Receta</button>
                </div>
            </div>
        </div>
    );
}

export default Receta;