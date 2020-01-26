import React from 'react'

const Receta = ({receta}) => {
    return (
        <div className="col-md-4 md-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>
                <img
                    className="card-img-wop"
                    src={receta.strDrinkThumb}
                    alt={`Imagen de ${receta.strDrink}`}
                />
            </div>
        </div>
    );
}

export default Receta;