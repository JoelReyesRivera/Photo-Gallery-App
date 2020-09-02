import React from 'react'
import PropTypes from 'prop-types'
import Grid from "@material-ui/core/Grid";
import Photo from '../Photo/Photo'


const PhotoContainer = ({photos}) => {
        var keys = Object.keys(photos)
        var photosArray = []
        for (let i = 0; i < keys.length; i++){
            photosArray.push(<Photo key= {i} title={photos[keys[i]].title} description={photos[keys[i]].description} url={photos[keys[i]].url}/>)
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

