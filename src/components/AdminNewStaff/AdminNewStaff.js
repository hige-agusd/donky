import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";
// import Partido from './Partido';
import './AdminNewStaff.css';

class adminNewStaff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.staffMember,
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
                isInvalid: !this.state.nombre
            });
        });
    }

    onChangeCheckbox = event => {
        this.setState({ [event.target.name]: event.target.checked });
    };

    onClick = () => {
        const staffMember = {...this.state};
        staffMember.index = this.props.index;
        this.props.clicked(staffMember);
        if(!this.props.index) {
            this.setState({
                rol: '',
                foto: '',
                bio: '',
                nombre: '',
                activo: true ,
                isInvalid: true     
            });
        }
    }

    render() {
        console.log(this.props.index);
        return (
            <Row className={`Partido-wrapper NewStaff-row ${this.props.even}`} >
                <div className={"  NewStaff-row-label"}>
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
                <div className={"  NewStaff-row-label"}>
                Rol
                </div>
                <div className={""}>
                    <input
                        type="text"
                        name='rol'
                        value={this.state.rol}
                        onChange={this.onChange}
                    />
                </div>
                <div className={"  NewStaff-row-label"}>
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
                <div className={"  NewStaff-row-label"}>
                Bio:
                </div>
                <div className={""}>
                    <input
                        type="text"
                        name='bio'
                        value={this.state.bio}
                        onChange={this.onChange}
                    />
                </div>
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

export default adminNewStaff;
