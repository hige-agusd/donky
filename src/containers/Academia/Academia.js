import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-instance';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

import AcademiaLogged from '../../components/AcademiaLogged/AcademiaLogged';
import AcademiaPublic from '../../components/AcademiaPublic/AcademiaPublic';
import Spinner from '../../components/UI/Spinner/Spinner';

import './Academia.css';

class Academia extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logged: true
        };
    }
    parrafos = [
        {imagen: 'http://www.fillmurray.com/100/100', titulo: 'INICIAL', texto: 'Ea proident ea ipsum culpa officia nisi ad do. Aute duis ex deserunt ut duis fugiat exercitation Lorem dolor id. Irure Lorem ad do eu. Amet est elit magna ea officia aute in occaecat proident. Eu sunt commodo fugiat consequat ex sit do deserunt et culpa aliquip est.'},
        {imagen: 'http://www.fillmurray.com/g/100/100', titulo: 'INTERMEDIO', texto: 'Consectetur sint officia sit consequat officia ut amet nulla enim do deserunt magna velit. Quis fugiat ex nisi nulla elit aliqua aute esse aliqua pariatur nulla. Lorem ex nulla mollit magna qui dolor dolore nostrud velit quis.'},
        {imagen: 'http://www.fillmurray.com/100/100', titulo: 'AVANZADO', texto: 'Veniam ex elit officia reprehenderit eiusmod labore minim dolore ex labore in. Laborum magna culpa est occaecat. Reprehenderit nisi magna ipsum consequat reprehenderit sunt irure do cupidatat eiusmod culpa. Non exercitation consequat laborum irure amet cillum cillum reprehenderit.'},
    ];
    jugador = {
        ficha: {
            foto: 'http://www.fillmurray.com/100/100',
            nombre: 'Bill Murray',
            edad: '68 años',
            equipo: 'Cazafantasmas',
            nro_socio: '314159265358',
            ala: true,
        },
        stats: [
            {skill: 'Conduccion', level: '10'},
            {skill: 'Pase y recepcion', level: '10'},
            {skill: 'Definicion', level: '7'},
            {skill: 'Fisico', level: '4'},
            {skill: 'Conducta', level: '8'},
            {skill: 'Tactica Grupal', level: '6'},
        ]
    };
    
    componentDidMount() {
        this.props.onFetchEquipos();
    }
    nextSlide() {
        this.refs.slider.slickNext();
    }
    prevSlide() {
        this.refs.slider.slickPrev();
    }
    render() {
        if ( this.props.isLogged ) {
            console.log( this.props.isLogged );
        }
        if (this.props.equipos.length) {
            this.jugador.ficha = {
                ...this.jugador.ficha,
                escudo: this.props.equipos.filter(eq => {
                    return eq.nombre === 'Medusas F.C.'
                })[0].escudo
            };
        }
        const acade = this.props.equipos.length ? ( this.props.isLogged  ? 
                (<AcademiaLogged authUser={this.props.isLogged} jugador={this.jugador} equipos={this.props.equipos} />)
                
            : (<AcademiaPublic jugadores={this.props.equipos} parrafos={this.parrafos} />) )
            : <Spinner />;
        
        return (
            <>
                {acade}
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.auth.authUser,
        equipos: state.equipos.equipos,
        loadingEquipos: state.equipos.loading
   };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchEquipos: () => dispatch( actions.fetchEquipos() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( Academia, axios ) );
