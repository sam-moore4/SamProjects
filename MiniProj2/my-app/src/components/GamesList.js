import React, {useState, useEffect} from "react";
import axios from 'axios';
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
                </div>
           ))}
                
        </div>
    );
}

export default GamesList;

