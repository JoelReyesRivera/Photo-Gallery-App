import React from 'react'
import Grid from "@material-ui/core/Grid";
import Photo from '../Photo/Photo'

const PhotoContainer = () => {
        var photos = JSON.parse(localStorage.getItem('photos'))
        var keys = Object.keys(photos)
        var photosArray = []
        for (let i = 0; i < keys.length; i++){
            photosArray.push(<Photo key={keys[i]} title={photos[keys[i]].title} description={photos[keys[i]].description} url={photos[keys[i]].url} photos={photos} jsonKey = {keys[i]}/>)
        }
        return(
        <Grid container spacing ={1} item className="Photos" justify="center">
            {photosArray}
        </Grid>
        )
    }

PhotoContainer.propTypes = {
} 

export default PhotoContainer

