import React, {useState} from 'react';
import CollectionList from "../components/CollectionList"
import PostCollection from "../components/PostCollection"
import {collection} from "../components/CollectionList"

function Collection(){

    const [arr, setArr] = useState(collection)

    return(
        <div>
            <h1> Add a Game to your collection</h1>
            <PostCollection updateGames={setArr} currentGames={arr}/>
            <h1> Games in your collection </h1>
            <CollectionList currentGames={arr}/>

                      
        </div>

    )
}

export default Collection;