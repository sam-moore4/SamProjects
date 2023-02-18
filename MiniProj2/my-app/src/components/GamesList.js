import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Grid } from '@mui/material';
import {useState, useEffect} from 'react';
import { SimpleDialog } from './SimpleDialogDemo';
import PlayerCard from './PlayerCard';

import '../App.css';
import games from '../games.json';


function GamesList(props) {
    const [open, setOpen] = useState(false)
    const [currentGame, setCurrentGame] = useState({})
    
    const handleButton = (thisGame) => {
        setCurrentGame(thisGame)
        setOpen(true)
    }

    console.log(props)
    

    return(
        <div className="games-container">
  
            {props.currentGame.map((game) => 
                <PlayerCard 
                    id={game.id} 
                    name={game.title} 
                    location={game.publisher} 
                    buttonHandler={() => handleButton(game)} 
                    image={game.thumbnail} />
                )}

        <SimpleDialog
                open={open}
                onClose={() => setOpen(false)}
                title={currentGame.title}
                sdescription={'Short Description: '+currentGame.short_description}
                genre={'Genre: '+currentGame.genre}
                publisher={'Publisher: '+currentGame.publisher}
                developer={'Developer: '+currentGame.developer}
                releasedate={'Release Date: '+currentGame.release_date}
                />     
        </div>
    );
}


export default GamesList;

