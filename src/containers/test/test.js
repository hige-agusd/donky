import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Sponsors from '../../components/Sponsors/Sponsors';
import DonkyLogo from '../../components/DonkyLogo/DonkyLogo';
import './test.css';
import Links from '../../components/Links/Links';
import Novedades from '../Novedades/Novedades';
import Staff from '../Staff/Staff';
import Frase from '../../components/Frase/Frase';
import Galeria from '../Galeria/Galeria';
import Sumate from '../../components/Sumate/Sumate';
import Footer from '../../components/Footer/Footer';

//<img src={logo} className="App-logo" alt="logo" />

class Home extends Component {

    render() {
        const frase = "No es grande aquel que nunca falla, sino el que nunca se da por vencido.";
        return (
        <Container fluid={true} className={'Home'} >
            <Sponsors />
            <DonkyLogo />
            <Links />
            <Novedades />
            <Staff />
            <Frase frase={frase} />
            <Galeria />
            <Sumate />
            <Footer />
        </Container>);
    }

}

export default Home;