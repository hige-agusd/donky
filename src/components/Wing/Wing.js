import React from "react";
import './Wing.css';

const wing = props => {
    return (
            <div className={'Wing-wrapper'}>
                <div className={'Wing'}>
                    <div className={'Wing-name-container'}>
                        <span className={'Wing-name'}>{props.nombre}</span>    
                    </div>
                </div>
                <div className={'Wing-base'}></div>
            </div>
    );
};

export default wing;
