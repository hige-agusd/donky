import React from 'react';

import './StatBar.css';

const statBar = (props) => (
    <>
        <div className={'StatBar-skill-level'}>
            <div className={'StatBar-skill'}>{props.stat.skill} </div>
            <div className={'StatBar-level'}>{`Lvl ${props.stat.level}`} </div>
        </div>
        <div className={'StatBar-background'}> 
            <div className={'StatBar-percentage'} style={{ width: `${props.stat.level * 10}%` }}></div>
        </div>
    </>
);

export default statBar;