import React from "react";
import StatBar from "../UI/StatBar/StatBar";
import './Stats.css';

const stats = props => {

    const statVacia = [
        {skill: 'Conduccion', level: 10},
        {skill: 'Pase y recepcion', level: 10},
        {skill: 'Definicion', level: 10},
        {skill: 'Fisico', level: 10},
        {skill: 'Conducta', level: 10},
        {skill: 'Tactica Grupal', level: 10},
    ];
    console.log(props.stats);

    const myStats = !!props.stats && props.stats.length ? props.stats : statVacia;
    const empty = !!props.stats && props.stats.length ? '' : 'no-stats';
    console.log(myStats);

    const stats = myStats.map((stat, i) => (
            <StatBar key={`stat${i}`} stat={stat} empty={empty}/>
    ));

    return (
        <div className={`Stats`} >
            {stats}
        </div>
    );
};

export default stats;
