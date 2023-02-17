import React, {useState} from 'react';
import '../App.css';
import Leagues from './Leagues';
import Standings from './Standings';

const StandingsTable = () => {

    
    const [active, setActive] = useState(true);
    





    return(
        <div className='standingstable-container'>
            <div className='tabs'>
                <div className='tab-leagues' onClick={()=> setActive(true)}>
                    <h2>Leagues</h2>
                </div>

                <div className='tab-standings' onClick={()=> setActive(false)}>
                    <h2>Standings</h2>
                </div>
            </div>

            { active ? <Leagues /> : <Standings />}

        </div>
    );
};

export default StandingsTable;
