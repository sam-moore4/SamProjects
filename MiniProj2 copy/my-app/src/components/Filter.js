import React, {useState, useEffect} from "react";
import Loader from "react-loader-spinner";
import games from "../games.json";
import GamesList from "./GamesList";

const Filter = () => {

    const [data, setData] = useState(games)
    const [selectedGenre, setSelectedGenre] = useState('All')
    const [selectedYear, setSelectedYear] = useState('All')

    const gameFilter = (selectedGenre == 'All' && selectedYear == 'All') ? games : 
        games.filter( game => 
            (game.genre === selectedGenre || selectedGenre == 'All') && (game.release_date.includes(selectedYear) || selectedYear == 'All')
        
        )
    

    return(
        <div className="standings-container">
            <div className="select-container">
                <select 
                    name="select-genre"
                    id="select-genre"
                    defaultValue={selectedGenre}
                    onChange={(e) => setSelectedGenre(e.target.value)}>

                    <option value="All"> All</option>
                    <option value="MMORPG"> MMORPG</option>
                    <option value="ARPG"> ARPG</option>
                    <option value="Battle Royale"> Battle Royale </option>
                    <option value="Card Game"> Card Game </option>
                    <option value="Fantasy"> Fantasy </option>
                    <option value="Fighting"> Fighting </option>
                    <option value="MMO"> MMO </option>
                    <option value="MOBA">MOBA</option>
                    <option value="Racing">Racing</option>
                    <option value="Shooter">Shooter</option>
                    <option value="Social">Social</option>
                    <option value="Sports">Sports</option>
                    <option value="Strategy">Strategy</option>
                </select>
                <select
                    name="select-year"
                    id="select-year"
                    onChange={(e) => setSelectedYear(e.target.value)}
                    defaultValue = {selectedYear}>
                        <option value="All"> All </option>
                        <option value="2023"> 2023</option>
                        <option value="2022"> 2022</option>
                        <option value="2021"> 2021</option>
                        <option value="2020"> 2020</option>
                        <option value="2019"> 2019</option>
                        <option value="2018"> 2018</option>
                        <option value="2017"> 2017</option>
                        <option value="2016"> 2016</option>
                        <option value="2015"> 2015</option>
                        <option value="2014"> 2014</option>
                        <option value="2013"> 2013</option>
                        <option value="2012"> 2012</option>
                        <option value="2011"> 2011</option>
                        <option value="2010"> 2010</option>
                        <option value="2009"> 2009</option>
                        <option value="2008"> 2008</option>
                        <option value="2007"> 2007</option>
                        <option value="2006"> 2006</option>
                        <option value="2005"> 2005</option>
                        <option value="2004"> 2004</option>
                        <option value="2003"> 2003</option>
                        <option value="2002"> 2002</option>
                        <option value="2001"> 2001</option>
                        <option value="2000"> 2000</option>
                        <option value="1999"> 1999</option>
                        <option value="1998"> 1998</option>
                        <option value="1997"> 1997</option>
                        

                </select>

                <div className="games-container">
                    {gameFilter.map((games) => (
                    <div key={games.id} className="games-div">
                        <img src={games.thumbnail} alt="#"/>
                        <h1>{games.title}</h1>
                    </div>
            ))}
                    
            </div>
                
            </div>
        </div>
    )
}

export default Filter;