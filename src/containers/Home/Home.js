import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-instance';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

import { Container } from 'react-bootstrap';
import Sponsors from '../../components/Sponsors/Sponsors';
import DonkyLogo from '../../components/DonkyLogo/DonkyLogo';
import './Home.css';
import Links from '../../components/Links/Links';
import Novedades from '../Novedades/Novedades';
import Staff from '../Staff/Staff';
import Frase from '../../components/Frase/Frase';
import Galeria from '../Galeria/Galeria';
import Sumate from '../../components/Sumate/Sumate';

//<img src={logo} className="App-logo" alt="logo" />

class Home extends Component {

    componentDidMount() {
        if (!this.props.staff.length) {
            this.props.onFetchStaff();
        }
        if(!this.props.galeria && !this.props.novedades) {
            this.props.onFetchIGFeed();
        }
    }

    render() {
        const frase = ['Potenciar enseñar descubrir y amar el juego...',
        '...porque la pasión no es cuestion de generos'];
        return (
        <Container fluid={true} className={'Home'} >
            <Sponsors />
            <DonkyLogo />
            <Links />
            <Novedades novedades={this.props.novedades} />
            <Staff staff={this.props.staff} />
            <Frase frase={frase} />
            <Galeria fotos={this.props.galeria} />
            <Sumate />
        </Container>);
    }

}

const mapStateToProps = state => {
    return {
        staff: state.staff.staff,
        loadingJugadoras: state.staff.loading,
        novedades: state.ig.novedades,
        galeria: state.ig.galeria,
        igLoading: state.ig.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchStaff: () => dispatch( actions.fetchStaff() ),
        onFetchIGFeed: () => dispatch( actions.fetchIGFeed()),
    };
};
  
export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( Home, axios ) );