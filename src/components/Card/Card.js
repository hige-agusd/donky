import React from "react";
import './Card.css';
import Wing from "../Wing/Wing";

const card = props => {
    const images = require.context('../../assets/images', true);
    const escudo = images(`./${props.card.escudo}`);
    const foto = props.card.foto ? props.card.foto : images(`./${props.card.pic_equipo}`);
    const nombre = props.card.ala ? <Wing nombre={props.card.nombre} /> :
        <span className={'Card-name'}>{props.card.nombre}</span>;    
    return (
        <div className={'Card'}>
            <div className={'Card-escudo'} style={{ backgroundImage: `url(${escudo}` }} ></div>
            <div className={'Card-imagen'} style={{ backgroundImage: `url(${foto})` }} >
                { nombre }
            </div>
        </div>
    );
};

export default card;
