import React from "react";
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Jugadores from '../../components/Jugadores/Jugadores';
import ZigzagGrid from '../../components/ZigzagGrid/ZigzagGrid';
import Sumate2 from '../../components/Sumate-2/Sumate-2';
import './AcademiaPublic.css';

const academiaPublic = props => {
    return (
        <>
            <SectionHeader titulo={'Jugadores'} clase={'Posiciones'} />
            <Jugadores jugadores={props.jugadores} />
            <SectionHeader titulo={'Entrenamiento'} clase={'Posiciones'} />
            <div className={'AcademiaPublic-entrenamiento'}>
                <ZigzagGrid parrafos={props.parrafos} />
                <Sumate2>Sumate</Sumate2>
            </div>
    </> );

};

export default academiaPublic;
