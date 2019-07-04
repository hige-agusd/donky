import React from "react";
import './ParrafoImagen.css';

const parrafoimagen = props => {
    // const images = require.context('../../assets/images', true);
    // const imagen = images(`./${props.parrafo.imagen}`);
    const imagen = props.parrafo.imagen;
    const even = props.index % 2 ? 'even' : '';
    
    return (
        <div className={`ParrafoImagen-wrapper ${even}`}>
            <img className={'ParrafoImagen-imagen'} src={imagen} alt={`imagen de ${props.parrafo.titulo}`} />
            <div className={'ParrafoImagen-parrafo'}> 
                <h3 className={'ParrafoImagen-parrafo-titulo'}>{props.parrafo.titulo}</h3>
                <p className={'ParrafoImagen-parrafo-texto'}>{
                    props.parrafo.texto ? (typeof props.parrafo.texto === 'string' ? props.parrafo.texto :
                    props.parrafo.texto.map(renglon => (
                        <li>{renglon}</li>
                    ))) : null
                }</p>
            </div>
        </div>
    );
};

export default parrafoimagen;
