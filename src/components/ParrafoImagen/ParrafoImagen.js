import React from "react";
import './ParrafoImagen.css';

const parrafoimagen = props => {
    // const images = require.context('../../assets/images', true);
    // const imagen = images(`./${props.parrafo.imagen}`);
    console.log(props);
    const imagen = props.parrafo.imagen;
    const even = props.index % 2 ? 'even' : '';
    
    return (
        <div className={`ParrafoImagen-wrapper ${even}`}>
            <div className={'ParrafoImagen-imagen'} style={{ backgroundImage: `url(${imagen})` }} ></div>
            <div className={'ParrafoImagen-parrafo'}> 
                <h3 className={'ParrafoImagen-parrafo-titulo'}>{props.parrafo.titulo}</h3>
                <span className={'ParrafoImagen-parrafo-texto'}>{props.parrafo.texto}</span>
            </div>
        </div>
    );
};

export default parrafoimagen;
