import React from 'react';

import './StatBar.css';

const statBar = (props) => {
    
    return (
        <>
            <div className={'StatBar-skill-level'}>
                <div className={'StatBar-skill'}>{props.stat.skill} </div>
                <div className={'StatBar-level'}>{`Lvl ${props.empty? '?' : props.stat.level}`} </div>
            </div>
            <div className={'StatBar-background'}> 
                <div className={`StatBar-percentage ${props.empty}`} style={{ width: `${props.stat.level * 10}%` }}></div>
            </div>
        </>
    );
}
export default statBar;