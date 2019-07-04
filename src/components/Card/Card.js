import React from "react";
import './Card.css';
import Wing from "../Wing/Wing";
import donkyLogo from '../../assets/images/Donky_logo.png';

const card = props => {
    const getLocalFoto = () => {
        let pic;
        try { pic = images(`./${props.card.foto}`);}
        catch(err) {
          console.log(err);
          pic = donkyLogo;
        }  
        return pic;
    }
       
    const images = require.context('../../assets/images', true);
    const escudo = props.card.escudo ? (props.card.escudo.match(/^http/) ? props.card.escudo : images(`./${props.card.escudo}`)) : '';
    const foto = props.card.foto.match(/^http/) ? props.card.foto : getLocalFoto();
    const nombre = props.card.nivel ? <Wing nombre={props.card.nombre} nivel={props.card.nivel} /> :
        <span className={'Card-name'}>{props.card.nombre}</span>;    
    return (
        <div className={`Card ${props.card.nivel ? 'Card-Wing' : ''}`}>
            <div className={'Card-escudo'} style={{ backgroundImage: `url(${escudo}` }} ></div>
            <div className={'Card-imagen'} style={{ backgroundImage: `url(${foto})` }} >
                { nombre }
            </div>
        </div>
    );
};

export default card;
