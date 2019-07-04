import React, { Component } from 'react';
import { Row } from "react-bootstrap";
// import Partido from './Partido';
import './AdminNewEquipo.css';

class adminNewEquipo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.equipo,
            isNew: props.equipo.id === '',
            isInvalid: true
        }
    }
    onChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        }, () => this.setState({
                ...this.state,
                isInvalid: !this.state.nombre
            })
        );
    }

    onChangeCheckbox = event => {
        this.setState({ [event.target.name]: event.target.checked });
    };

    onClick = () => {
        const equipo = {...this.state};
        this.props.clicked(equipo);
        if(this.state.isNew) {
            this.setState({
                id: '',
                nombre: '',
                foto: '',
                escudo: '',
                categoria: '',
                link: '',
                interno: true,
                activo: true,
                isInvalid: true     
            });
        }
    }

    render() {
        return (
            <Row className={`Partido-wrapper NewEquipo-row ${this.props.even}`} >
                <div className={"  NewEquipo-row-label"}>
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
                <div className={"  NewEquipo-row-label"}>
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
                <div className={"  NewEquipo-row-label"}>
                Escudo
                </div>
                <div className={""}>
                    <input
                        type="text"
                        name='escudo'
                        value={this.state.escudo}
                        onChange={this.onChange}
                    />
                </div>
                <div className={"  NewEquipo-row-label"}>
                Link
                </div>
                <div className={""}>
                    <input
                        type="text"
                        name='link'
                        value={this.state.link}
                        onChange={this.onChange}
                    />
                </div>
                <div className={"  NewEquipo-row-label"}>
                Categoria:
                </div>
                <div className={"NewEquipo-categoria"}>
                    <input
                        type="text"
                        name='categoria'
                        value={this.state.categoria}
                        onChange={this.onChange}
                    />
                </div>
                <label>
                Interno:
                    <input
                        name="interno"
                        type="checkbox"
                        checked={this.state.interno}
                        onChange={this.onChangeCheckbox}
                    />
                </label>
                <label>
                Activo:
                    <input
                        name="activo"
                        type="checkbox"
                        checked={this.state.activo}
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

export default adminNewEquipo;
