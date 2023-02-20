import { appendOwnerState } from '@mui/base';
import React, {useState} from 'react';
import { collection } from './CollectionList';

function PostCollection(props) {
    const [data, setData] = useState({
        
        title :"",
        thumbnail: "",
        short_description: "",
        genre: "",
        publisher:"",
        developer:"",
        release_date: "",  
    
    })

    function submit(e){
        e.preventDefault();
        props.updateGames([...props.currentGames, data])
        console.log(data)
    }

    function handle(e){
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    return (
        <div>
            <form onSubmit={(e)=> submit(e)}>
                <input onChange={(e)=> handle(e)} id='title' value={data.title} placeholder='title' type='text'></input>
                <input onChange={(e)=> handle(e)} id='thumbnail' value={data.thumbnail} placeholder='thumbnailurl' type='text'></input>
                <input onChange={(e)=> handle(e)} id='short_description' value={data.short_description} placeholder='shortdescription' type='text'></input>
                <input onChange={(e)=> handle(e)} id='genre' value={data.genre} placeholder='genre' type='text'></input>
                <input onChange={(e)=> handle(e)} id='publisher' value={data.publisher} placeholder='publisher' type='text'></input>
                <input onChange={(e)=> handle(e)} id='developer' value={data.developer} placeholder='developer' type='text'></input>
                <input onChange={(e)=> handle(e)} id='release_date' value={data.release_date} placeholder='release_date' type='text'></input>
                <button> Submit </button>
            </form>
        </div>
    )

}

export default PostCollection;