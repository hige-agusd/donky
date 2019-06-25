import React from "react";
import FichaJugador from "../FichaJugador/FichaJugador";
import './Entrenamiento.css';
import Stats from "../Stats/Stats";

const entrenamiento = props => {
    const jugador = props.jugador ? 
        <>
            <FichaJugador ficha={props.jugador.ficha} />
            <Stats stats={props.jugador.stats} />
        </>
    : null;

    return (
        <div className={`Entrenamiento`} >
            {jugador}
        </div>
    );
};

export default entrenamiento;