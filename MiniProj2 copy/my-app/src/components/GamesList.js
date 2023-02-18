import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Grid } from '@mui/material';
import {useState, useEffect} from 'react';
import { SimpleDialog } from './SimpleDialogDemo';
import PlayerCard from './PlayerCard';

import '../App.css';
import games from '../games.json';


const GamesList = () => {
    const [data, setData] = useState(games);
    

    return(
        <div className="games-container">
           {data.map((games) => (
                <div key={games.id} className="games-div">
                    <img src={games.thumbnail} alt="#"/>
                    <h1>{games.title}</h1>
                    <button>Show More</button>
                </div>
           ))}               
        </div>
    );
}


export default GamesList;

