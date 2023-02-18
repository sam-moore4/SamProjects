import React, {useState} from 'react';
import '../App.css';
import GamesList from './GamesList';
import Filter from './Filter';

const Table = () => {

    
    const [active, setActive] = useState(true);
    





    return(
        <div className='standingstable-container'>
            <div className='tabs'>
                <div className='tab-leagues' onClick={()=> setActive(true)}>
                    <h2>Games</h2>
                </div>

                <div className='tab-standings' onClick={()=> setActive(false)}>
                    <h2>Filter</h2>
                </div>
            </div>

            { active ? <GamesList /> : <Filter />}
            

        </div>
    );
};

export default Table;
