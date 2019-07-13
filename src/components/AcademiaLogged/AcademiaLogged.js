import React from "react";
import { connect } from 'react-redux';
import axios from '../../axios-instance';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

import Entrenamiento from '../../components/Entrenamiento/Entrenamiento';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Equipos from '../../components/Equipos/Equipos';
import Jugadores from '../../components/Jugadores/Jugadores';
import { withAuthorization } from '../../containers/Session';

class academiaLogged extends React.Component {

    componentDidMount() {
        if (!this.props.myStats || !this.props.myStats.length) {
            this.props.onFetchStatsById(this.props.authUser.nro_socio);
        }
    }

    render() {
        const myStats = !!this.props.myStats && this.props.myStats.length ?
            this.props.myStats[this.props.myStats.length - 1]
            : [];
        // eslint-disable-next-line
        const jugadora = this.props.jugadoras.filter(jugadora => jugadora.nro_socio == this.props.authUser.nro_socio);
        const entrenamiento = jugadora ?
        <Entrenamiento jugador={jugadora[0]} stats={myStats} />
        : null;
        return (
            <>
                <SectionHeader titulo={'Entrenamiento en curso'} clase={'Posiciones'} />
                { entrenamiento }
                <SectionHeader titulo={'Equipos'} clase={'Posiciones'} />
                <Equipos equipos={this.props.equipos} />
                <SectionHeader titulo={'Jugadoras'} clase={'Posiciones'} />
                <Jugadores jugadores={this.props.jugadores} />
            </>
        );
    }
};



const condition = (authUser) => { 
    return !!authUser && authUser.socioVerified
};

const mapStateToProps = state => {
    return {
        isLogged: state.auth.authUser,
        equipos: state.equipos.equipos,
        loadingEquipos: state.equipos.loading,
        jugadoras: state.jugadoras.jugadoras,
        loadingJugadoras: state.jugadoras.loading,
        myStats: state.stats.myStats
   };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchEquipos: () => dispatch( actions.fetchEquipos() ),
        onFetchJugadoras: () => dispatch( actions.fetchJugadoras() ),
        onFetchStatsById: (id) => dispatch(actions.fetchStatsById(id)),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( withAuthorization(condition)(academiaLogged), axios ) );