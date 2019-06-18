import React from "react";
import ParrafoImagen from "../ParrafoImagen/ParrafoImagen";
import './ZigzagGrid.css';

const zigzaggrid = props => {
    const parrafos = props.parrafos.length ? props.parrafos.map((parrafo, i) => (
            <ParrafoImagen key={`pi${i}`} index={i} parrafo={parrafo} />
    )) : [];

    return (
        <div className={`ZigzagGrid`} >
            {parrafos}
        </div>
    );
};

export default zigzaggrid;
