import React, {useState, useEffect} from "react";
import axios from 'axios';
import '../App.css';

const Leagues = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios('/api/games')
        // axios('https://www.balldontlie.io/api/v1/teams')
        .then((res) => {
            console.log(res.data.data)
        })
    },[])
    

    return(
        <div className="leagues-container">Leagues</div>
    )
}

export default Leagues;

//delete