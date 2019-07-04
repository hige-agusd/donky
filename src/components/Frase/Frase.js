import React from "react";
import { Container } from "react-bootstrap";
import './Frase.css';

const frase = props => {
    const frase = props.frase ? typeof props.frase === 'string' ? 
        (<span className={'Frase'} >{props.frase}</span>) :
        props.frase.map( (renglon, i) =>
            (<span className={'Frase'} key={`Frase${i}`} >{renglon}</span>) 
        ) : null;
    
    return (
        <Container fluid={true} className={"Frase-wrapper"} >
            <div className={'Frase-grid'}>
                { frase }
            </div>
        </Container>
)};

export default frase;
