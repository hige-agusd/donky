import React from "react";
import Entrenamiento from '../../components/Entrenamiento/Entrenamiento';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Equipos from '../../components/Equipos/Equipos';
import Jugadores from '../../components/Jugadores/Jugadores';
import { withAuthorization } from '../../containers/Session';

const academiaLogged = props => {
    return (
        <>
            <SectionHeader titulo={'Entrenamiento en curso'} clase={'Posiciones'} />
            <Entrenamiento jugador={props.jugador} />
            <SectionHeader titulo={'Equipos'} clase={'Posiciones'} />
            <Equipos equipos={props.equipos} />
            <SectionHeader titulo={'Jugadores'} clase={'Posiciones'} />
            <Jugadores jugadores={props.equipos} />
        </>);

};

const condition = (authUser) => { 
    return !!authUser 
};

// export default academiaLogged;
export default withAuthorization(condition)(academiaLogged);