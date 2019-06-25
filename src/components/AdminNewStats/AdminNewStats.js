import React, { Component } from 'react';
import { Row } from "react-bootstrap";
// import Partido from './Partido';
import './AdminNewStats.css';

class adminNewStat extends Component {
    constructor(props) {
        super(props);
        // const parsedStat = this.arrayToObject(props.stat);
        this.state = {
            ...props.stat,
        }
    }

   /*  arrayToObject = array =>
        array.reduce((obj, item) => {
            obj[item.skill.replace(/\s/g,'_')] = item
            return obj
        }, {}) */

    onChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: {...this.state[event.target.name], level: event.target.value},
        });
    }

    onClick = () => {
        const stat = {...this.state};
        this.props.clicked(stat, this.props.socio, this.props.index);
        const statVacia = [
            {skill: 'Conduccion', level: 0},
            {skill: 'Pase y recepcion', level: 0},
            {skill: 'Definicion', level: 0},
            {skill: 'Fisico', level: 0},
            {skill: 'Conducta', level: 0},
            {skill: 'Tactica Grupal', level: 0},
        ];
        if(this.props.index === null) {
            this.setState({
                ...statVacia     
            });
        }
    }

    render() {
        const statsForm = Object.keys(this.state).map( key => (
            <React.Fragment key={key}>
                <div className={"  NewStat-row-label"}>
                {this.state[key].skill}
                </div>
                <div className={""}>
                    <input
                        type="number"
                        name={key}
                        min="1" max="10"
                        value={this.state[key].level}
                        onChange={this.onChange}
                    />
                </div>
            </React.Fragment>
        ));

        return (
            <Row className={`Partido-wrapper NewStat-row ${this.props.even}`} >
                { statsForm }
                <button 
                    onClick={this.onClick} 
                    disabled={this.state.isInvalid} >
                    Enviar
                </button>
            </Row>
        )
    }
};

export default adminNewStat;
