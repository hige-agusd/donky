import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-instance';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

import { Container } from 'react-bootstrap';

import Fechas from '../../components/FechasEdit/Fechas';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Spinner from '../../components/UI/Spinner/Spinner';

import './Torneo.css';

class Torneo extends Component {
    constructor(props) {
        super(props);
        this.updatePartido = this.updatePartido.bind(this);
    }
    componentDidMount() {
        this.props.onInitTorneo();
        this.props.onFetchEquipos();
    }
    updateTabla(url, data) {
        axios.put(url, data);
    }
    updatePartido(cat, fec, part, dia, local, visitante, pendiente) {
        const partido = {
            dia,
            local,
            pendiente,
            visitante
        };
        axios.put(`torneos/0/categorias/${cat}/fechas/${fec}/partidos/${part}.json`, partido).then(res => {
            const tabla = [...this.props.torneo.categorias[cat].tabla];
            let localInd, visitInd;
            const local = tabla.filter((eq, index) => {
                let retVal = false; 
                if(eq.nombre === res.data.local.nombre) {
                    localInd = index;
                    retVal = true;
                 }
                 return retVal;
                })[0];
            const visitante = tabla.filter((eq, index) => {
                let retVal = false; 
                if(eq.nombre === res.data.visitante.nombre) {
                    visitInd = index;
                    retVal = true;
                    }
                    return retVal;
                })[0];
            if (res.data.local.goles > res.data.visitante.goles) {
                local.pg = Number(local.pg) + 1;
                local.puntos = Number(local.puntos) + 3;
                visitante.pp = Number(visitante.pp) + 1;
            } else if (res.data.local.goles < res.data.visitante.goles) {
                visitante.pg = Number(visitante.pg) + 1;
                visitante.puntos = Number(visitante.puntos) + 3;
                local.pp = Number(local.pp) + 1;
            } else {
                local.puntos = Number(local.puntos) + 1;
                local.pe = Number(local.pe) + 1;
                visitante.pe = Number(visitante.pe) + 1;
                visitante.puntos = Number(visitante.puntos) + 1;
            }
            local.pj = Number(local.pj) + 1;
            local.gf = Number(local.gf) + Number(res.data.local.goles);
            local.gc = parseInt(Number(local.gc) + Number(res.data.visitante.goles));
            
            visitante.pj = Number(visitante.pj) + 1;
            visitante.gf = Number(visitante.gc) + Number(res.data.visitante.goles);
            visitante.gc = Number(visitante.gf) + Number(res.data.local.goles);
            const localUrl = `torneos/0/categorias/${cat}/tabla/${localInd}.json`;
            const visitUrl = `torneos/0/categorias/${cat}/tabla/${visitInd}.json`;
            this.updateTabla(localUrl, local);
            this.updateTabla(visitUrl, visitante);
        });
    }
   
    render() {
        const categorias = this.props.torneo && this.props.equipos ? 
            this.props.torneo.categorias.map(
            (categoria, cati) => 
                <React.Fragment key={'cat'+cati}>
                    <SectionHeader titulo={'Fixture'} clase={'Fixture'}
                        torneo={`Torneo ${this.props.torneo.nombre}`} categoria={`Categoria ${categoria.nombre}`} />
                    {categoria.fechas.map((fecha, i) => 
                        <Fechas num={i+1} key={i} cat={cati} fecha={fecha} upd={this.updatePartido}
                            equipos={this.props.equipos.filter(equipo => equipo.categoria === categoria.nombre)} 
                            /> )}
                </React.Fragment>
            )
            : <Spinner />;
            if (this.props.torneo && this.props.equipos) {
            // const tabla = [...this.props.torneo.categorias[0].tabla];
        }
        // const fechas = this.props.torneo ? this.props.torneo.fechas.map((fecha, i) => <Fechas num={i+1} key={i} partidos={fecha} /> ) : null;
        return (
            <Container fluid={true} className={'Torneo-Edit'} >
                {categorias}
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        torneo: state.torneos.currentTournament,
        loading: state.torneos.loading,
        equipos: state.equipos.equipos,
        loadingEquipos: state.equipos.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitTorneo: () => dispatch( actions.initTorneo() ),
        onFetchEquipos: () => dispatch( actions.fetchEquipos() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( Torneo, axios ) );
