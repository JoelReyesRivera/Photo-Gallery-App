import React from 'react'
import Grid from "@material-ui/core/Grid";
import Album from '../Album/Album'

const AlbumContainer = () => {
        var photos = JSON.parse(localStorage.getItem('photos'))
        var albums = JSON.parse(localStorage.getItem('albums'))
        var keys = Object.keys(albums)
        var albumsArray = []
        for (let i = 0; i < keys.length; i++){
            albumsArray.push(<Album 
                key={keys[i]} 
                name={albums[keys[i]].name} 
                description={albums[keys[i]].description} 
                tags={albums[keys[i]].tags} 
                photos={photos} 
                photosArray={albums[keys[i]].photosIds} 
                jsonKey = {keys[i]}
                albums = {albums}/>)
        }
        return(
        <Grid container spacing ={1} item className="Photos" justify="center">
            {albumsArray}
        </Grid>
        )
    }

AlbumContainer.propTypes = {
}

export default AlbumContainer

