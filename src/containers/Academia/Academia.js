import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-instance';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
// import * as actions from '../../store/actions/index';

import SectionHeader from '../../components/SectionHeader/SectionHeader';
// import Spinner from '../../components/UI/Spinner/Spinner';

import './Academia.css';

class Academia extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logged: false
        };
    }

    componentDidMount() {
    }
    nextSlide() {
        this.refs.slider.slickNext();
    }
    prevSlide() {
        this.refs.slider.slickPrev();
    }
    render() {
        const acade = this.state.logged  ? 
                (<>
                    
                    <SectionHeader titulo={'Entrenamiento en curso'} clase={'Posiciones'} />
                    <SectionHeader titulo={'Equipos'} clase={'Posiciones'} />
                    <SectionHeader titulo={'Equipos'} clase={'Posiciones'} />
                        {/* <Equipos equipos={this.props.equipos.filter(equipo => equipo.categoria === categoria.nombre)} /> */}
                </>)
             
            : (<>
                <SectionHeader titulo={'Jugadores'} clase={'Posiciones'} />
                <div className={'Carrousel'}>Carrousel</div>
                <SectionHeader titulo={'Entrenamiento'} clase={'Posiciones'} />
                <div className={'Entrenamiento'}>Entrenamiento</div>
                <div className={'Sumate'}>Sumate</div>
            </>);
        // const fechas = this.props.academia ? this.props.academia.fechas.map((fecha, i) => <Fechas num={i+1} key={i} partidos={fecha} /> ) : null;
        
        return (<>
                    {acade}
                    </>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( Academia, axios ) );
