import React from "react";
import './Wing.css';

const wing = props => {
    const nivel = props.nivel / 7 > 1 ? 'Oro'
                  : props.nivel / 3 > 1 ? 'Plata' : 'Bronce';
    return (
            <div className={'Wing-wrapper'}>
                <div className={`Wing ${nivel}`}>
                    <div className={'Wing-name-container'}>
                        <span className={'Wing-name'}>{props.nombre}</span>    
                    </div>
                </div>
                <div className={'Wing-base'}></div>
            </div>
    );
};

export default wing;
