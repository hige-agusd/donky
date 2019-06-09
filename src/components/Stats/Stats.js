import React from "react";
import StatBar from "../UI/StatBar/StatBar";
import './Stats.css';

const stats = props => {
    const stats = props.stats.length ? props.stats.map((stat, i) => (
            <StatBar key={`stat${i}`} stat={stat} />
    )) : [];

    return (
        <div className={`Stats`} >
            {stats}
        </div>
    );
};

export default stats;
