import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Grid } from '@mui/material';
import {useState, useEffect} from 'react';
import { SimpleDialog } from './SimpleDialogDemo';
import PlayerCard from './PlayerCard';

export const collection = [

    { id :540, 
        title :"Overwatch 2",
        thumbnail: "https:\/\/www.freetogame.com\/g\/540\/thumbnail.jpg",
        short_description: "A hero-focused first-person team shooter from Blizzard Entertainment.",
        game_url: "https:\/\/www.freetogame.com\/open\/overwatch-2",
        genre: "Shooter",
        platform:"PC (Windows)",
        publisher:"Activision Blizzard",
        developer:"Blizzard Entertainment",
        release_date: "2022-10-04",
        freetogame_profile_url:"https:\/\/www.freetogame.com\/overwatch-2",
    },
  
    
    {
        
        id:521,
        title:"Diablo Immortal",
        thumbnail:"https:\/\/www.freetogame.com\/g\/521\/thumbnail.jpg",
        short_description:"Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
        game_url:"https:\/\/www.freetogame.com\/open\/diablo-immortal",
        genre:"MMOARPG",
        platform:"PC (Windows)","publisher":"Blizzard Entertainment",
        developer:"Blizzard Entertainment",
        release_date:"2022-06-02",
        freetogame_profile_url:"https:\/\/www.freetogame.com\/diablo-immortal"
    },

    {
        id:517,
        title:"Lost Ark",
        thumbnail:"https:\/\/www.freetogame.com\/g\/517\/thumbnail.jpg",
        short_description:"Smilegate\u2019s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.",
        game_url:"https:\/\/www.freetogame.com\/open\/lost-ark",
        genre:"ARPG",
        platform:"PC (Windows)",
        publisher:"Amazon Games",
        developer:"Smilegate RPG",
        release_date:"2022-02-11",
        freetogame_profile_url:"https:\/\/www.freetogame.com\/lost-ark"
    },

    {
        id:516,
        title:"PUBG: BATTLEGROUNDS",
        thumbnail:"https:\/\/www.freetogame.com\/g\/516\/thumbnail.jpg",
        short_description:"Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
        game_url:"https:\/\/www.freetogame.com\/open\/pubg",
        genre:"Shooter",
        platform:"PC (Windows)",
        publisher:"KRAFTON, Inc.",
        developer:"KRAFTON, Inc.",
        release_date:"2022-01-12",
        freetogame_profile_url:"https:\/\/www.freetogame.com\/pubg"
    },


{id:508,title:"Enlisted","thumbnail":"https:\/\/www.freetogame.com\/g\/508\/thumbnail.jpg",short_description:"Get ready to command your own World War II military squad in Gaijin and Darkflow Software\u2019s MMO squad-based shooter Enlisted. ",game_url:"https:\/\/www.freetogame.com\/open\/enlisted",genre:"Shooter",platform:"PC (Windows)",publisher:"Gaijin Entertainment",developer:"Darkflow Software",release_date:"2021-04-08",freetogame_profile_url:"https:\/\/www.freetogame.com\/enlisted"
},
// {id:345,title:"Forge of Empires",thumbnail:"https:\/\/www.freetogame.com\/g\/345\/thumbnail.jpg",short_description:"A free to play 2D browser-based online strategy game, become the leader and raise your city.",game_url:"https:\/\/www.freetogame.com\/open\/forge-of-empires",genre:"Strategy",platform:"Web Browser",publisher:"InnoGames",developer:"InnoGames",release_date:"2012-04-17",freetogame_profile_url:"https:\/\/www.freetogame.com\/forge-of-empires"},
// {id:427,title:"Drakensang Online",thumbnail:"https:\/\/www.freetogame.com\/g\/427\/thumbnail.jpg",short_description:"A free to play browser-based top-down hack-and-slash 3D MMORPG similar to games in the Diablo series.",game_url:"https:\/\/www.freetogame.com\/open\/drakensang-online",genre:"MMORPG",platform:"Web Browser",publisher:"Bigpoint",developer:"Bigpoint",release_date:"2011-08-08",freetogame_profile_url:"https:\/\/www.freetogame.com\/drakensang-online"},
// {id:525,title:"MultiVersus",thumbnail:"https:\/\/www.freetogame.com\/g\/525\/thumbnail.jpg",short_description:"The Warner Bros lineup meets Smash in Player First Games\u2019 MultiVersus.",game_url:"https:\/\/www.freetogame.com\/open\/multiversus",genre:"Fighting",platform:"PC (Windows)",publisher:"Warner Bros. Games",developer:"Player First Games",release_date:"2022-07-19",freetogame_profile_url:"https:\/\/www.freetogame.com\/multiversus"},
// {id:475,title:"Genshin Impact",thumbnail:"https:\/\/www.freetogame.com\/g\/475\/thumbnail.jpg",short_description:"If you\u2019ve been looking for a game to scratch that open-world action RPG itch, one with perhaps a bit of Asian flair, then you\u2019re going to want to check out miHoYo\u2019s Genshin Impact.",game_url:"https:\/\/www.freetogame.com\/open\/genshin-impact",genre:"Action RPG",platform:"PC (Windows)",publisher:"miHoYo",developer:"miHoYo",release_date:"2020-09-28",freetogame_profile_url:"https:\/\/www.freetogame.com\/genshin-impact"}


]

function CollectionList(props) {
     const [open, setOpen] = useState(false)
     const [currentGame, setCurrentGame] = useState({})

     const handleButton = (thisGame) => {
     setCurrentGame(thisGame)
     setOpen(true)
    }

    return(
        <div className="games-container">

            {props.currentGames.map((game) => 
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

export default CollectionList;