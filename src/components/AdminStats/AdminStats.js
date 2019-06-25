import React from "react";
import { Container, Row } from "react-bootstrap";
import AdminNewStat from '../AdminNewStats/AdminNewStats';
// import Partido from './Partido';
import "./AdminStats.css";

const adminStats = props => {

    const statVacia = [
        {skill: 'Conduccion', level: 0},
        {skill: 'Pase y recepcion', level: 0},
        {skill: 'Definicion', level: 0},
        {skill: 'Fisico', level: 0},
        {skill: 'Conducta', level: 0},
        {skill: 'Tactica Grupal', level: 0},
    ];

    const onClicked = (stat, nro_socio, index) => {
        const newStat = {
            key: nro_socio,
            index: index !== null ? index : !!props.stats[nro_socio] ? props.stats[nro_socio].length : 0,
            value: {
               ...stat
            }
        }
        props.clicked(newStat);
    }

    const stats = props.jugadoras && props.jugadoras.length ? 
        props.jugadoras.map( (jugadora, j) => {
            const existingStats = props.stats[jugadora.nro_socio] && props.stats[jugadora.nro_socio].length ?
            props.stats[jugadora.nro_socio].map( (stat, i) => (
                    <AdminNewStat key={`ans${j}${i}`} 
                        socio={jugadora.nro_socio} index={i}
                        stat={stat} clicked={onClicked}  />
            )) : null;
            return (
                <React.Fragment key={`ansj${j}`}>
                    <Row>
                        <div>{`${jugadora.nombre} (socia n°: ${jugadora.nro_socio})`}</div>
                    </Row>
                        <AdminNewStat socio={jugadora.nro_socio} index={null}
                            stat={statVacia} clicked={onClicked} />
                    { existingStats }
                </React.Fragment>
            );
        })  
        : null;

    return (
        <Container fluid={true} className={` NewStats-grid ${props.even}`}>
            { stats }
        </Container>
    );
};

export default adminStats;
