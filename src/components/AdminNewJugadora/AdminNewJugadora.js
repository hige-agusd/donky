import React, { Component } from 'react';
import { Row } from "react-bootstrap";
// import Partido from './Partido';
import './AdminNewJugadora.css';

class adminNewJugadora extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.jugadora,
            disableNroSocio: props.jugadora.nro_socio,
            isInvalid: true
        }
    }
    onChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        }, () => {
            this.setState({
                ...this.state,
                isInvalid: !this.state.nro_socio || !this.state.nombre
            });
        });
    }

    onChangeCheckbox = event => {
        this.setState({ [event.target.name]: event.target.checked });
    };

    onClick = () => {
        const jugadora = {...this.state};
        this.props.clicked(jugadora);
        if(!this.state.disableNroSocio) {
            this.setState({
                nro_socio: '',
                equipo: '',
                foto: '',
                nivel: '',
                nombre: '',
                activa: true ,
                disableNroSocio: this.props.jugadora.nro_socio,
                isInvalid: true     
            });
        }
    }

    render() {
        return (
            <Row className={`Partido-wrapper NewJugadora-row ${this.props.even}`} >
                <div className={"  NewJugadora-row-label"}>
                N° Socia:
                </div>
                <div className={""}>
                    <input
                        type="text"
                        name='nro_socio'
                        disabled={this.state.disableNroSocio}
                        value={this.state.nro_socio}
                        onChange={this.onChange}
                    />
                </div>
                <div className={"  NewJugadora-row-label"}>
                Nombre:
                </div>
                <div className={""}>
                    <input
                        type="text"
                        name='nombre'
                        value={this.state.nombre}
                        onChange={this.onChange}
                    />
                </div>
                <div className={"  NewJugadora-row-label"}>
                Equipo
                </div>
                <div className={""}>
                    <input
                        type="text"
                        name='equipo'
                        value={this.state.equipo}
                        onChange={this.onChange}
                    />
                </div>
                <div className={"  NewJugadora-row-label"}>
                Foto
                </div>
                <div className={""}>
                    <input
                        type="text"
                        name='foto'
                        value={this.state.foto}
                        onChange={this.onChange}
                    />
                </div>
                <div className={"  NewJugadora-row-label"}>
                Nivel:
                </div>
                <div className={""}>
                    <input
                        type="text"
                        name='nivel'
                        min="1" max="10"
                        value={this.state.nivel}
                        onChange={this.onChange}
                    />
                </div>
                <label>
                Activa:
                    <input
                        name="activa"
                        type="checkbox"
                        checked={this.state.activa}
                        onChange={this.onChangeCheckbox}
                    />
                </label>
                <button 
                    onClick={this.onClick} 
                    disabled={this.state.isInvalid} >
                    Enviar
                </button>
            </Row>
        )
    }
};

export default adminNewJugadora;
