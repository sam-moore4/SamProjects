import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Grid } from '@mui/material';
import {useState, useEffect} from 'react';
import { SimpleDialog } from './SimpleDialogDemo';
import PlayerCard from './PlayerCard';
import games from "../games.json";

function PlayerList(props) {
        const [open, setOpen] = useState(false)
        const [currentPlayer, setCurrentPlayer] = useState({})

        const handleButton = (thisPlayer) => {
        setCurrentPlayer(thisPlayer)
        setOpen(true)
    }

    console.log(props)

        return (
            <div className="StudentList componentBox">
            <h2>This API has ({players.length} NBA players currently in it)</h2>
            
            <Grid container spacing={2}>
            {
                props.currentPlayers.map((player) => 
                    
                    <Grid item xs={6} md={3} lg={2} key={player.id} >
                        <PlayerCard 
                            id={player.id} 
                            name={player.name} 
                            location={player.location} 
                            buttonHandler={() => handleButton(player)} 
                            image={`https://robohash.org/${player.name}?size=100x100&set=set2`} />
                    </Grid>
                )
            }
            </Grid>

            <SimpleDialog
                open={open}
                onClose={() => setOpen(false)}
                title={currentPlayer.name}
                content={'Currently plays in '+currentPlayer.location}
                />            
        </div>
        );
    }

export default PlayerList;