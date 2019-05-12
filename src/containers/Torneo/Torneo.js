import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-instance';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

import { Container } from 'react-bootstrap';
import Slider from 'react-slick';

import Fechas from '../../components/Fechas/Fechas';
import Posiciones from '../../components/Posiciones/Posiciones';
import Equipos from '../../components/Equipos/Equipos';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Spinner from '../../components/UI/Spinner/Spinner';

import './Torneo.css';

class Torneo extends Component {

    componentDidMount() {
        this.props.onInitTorneo();
        this.props.onFetchEquipos();
    }
    nextSlide() {
        this.refs.slider.slickNext();
    }
    prevSlide() {
        this.refs.slider.slickPrev();
    }
    render() {
        const categorias = this.props.torneo && this.props.equipos ? 
            this.props.torneo.categorias.map(
            (categoria, i) => 
                <React.Fragment key={'cat'+i}>
                    <SectionHeader titulo={'Fixture'} clase={'Fixture'} prev={() => this.prevSlide()} next={() => this.nextSlide()}
                        torneo={`Torneo ${this.props.torneo.nombre}`} categoria={`${categoria.nombre}`} />
                    {categoria.fechas.map((fecha, i) => 
                        <Fechas num={i+1} key={i} 
                            fecha={fecha} 
                            /> )}
                    {categoria.tabla ? <><SectionHeader titulo={'Tabla de Posiciones'} clase={'Posiciones'} />
                    <Posiciones key={i} posiciones={categoria.tabla} /> </> : null }
                    <SectionHeader titulo={'Equipos'} clase={'Equipos'} />
                        <Equipos equipos={this.props.equipos.filter(equipo => equipo.categoria === categoria.nombre)} />
                </React.Fragment>
            ) 
            : <Spinner />;
        // const fechas = this.props.torneo ? this.props.torneo.fechas.map((fecha, i) => <Fechas num={i+1} key={i} partidos={fecha} /> ) : null;
        const settings = {
            arrows: false,
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <Container fluid={true} className={'Torneo'} >
                <Slider ref="slider" {...settings}>
                    {categorias}
                </Slider>
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
