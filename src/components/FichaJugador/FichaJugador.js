import React from "react";
import Card from "../Card/Card";
import './FichaJugador.css';

const fichaJugador = props => {
    const ficha = props.ficha ? 
        <>
            <div className={'FichaJugador-foto'}>
                <Card card={props.ficha} />
            </div>
            <div className={'FichaJugador-datos'}>
                <div className={'FichaJugador-dato'}>
                    <span className={'FichaJugador-dato-etiqueta'}>nombre</span>
                    <div className={'FichaJugador-dato-valor'}>{props.ficha.nombre} </div>
                </div>
                <div className={'FichaJugador-dato'}>
                    <span className={'FichaJugador-dato-etiqueta'}>edad</span>
                    <div className={'FichaJugador-dato-valor'}>{props.ficha.edad?props.ficha.edad:'?'} </div>
                </div>
                <div className={'FichaJugador-dato'}>
                    <span className={'FichaJugador-dato-etiqueta'}>equipo</span>
                    <div className={'FichaJugador-dato-valor'}>{props.ficha.equipo} </div>
                </div>
                <div className={'FichaJugador-dato'}>
                    <span className={'FichaJugador-dato-etiqueta'}>n° camiseta</span>
                    <div className={'FichaJugador-dato-valor'}>{props.ficha.camiseta?props.ficha.camiseta:'?'} </div>
                </div>
                <div className={'FichaJugador-dato'}>
                    <span className={'FichaJugador-dato-etiqueta'}>nº socix</span>
                    <div className={'FichaJugador-dato-valor'}>{props.ficha.nro_socio} </div>
                </div>
            </div>
        </>
    : null;

    return (
        <div className={`FichaJugador`} >
            { ficha }
        </div>
    );
};

export default fichaJugador;
