import React from 'react'
import PropTypes from 'prop-types'
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import AddPhotoModal from '../Modals/AddPhotoModal'
function Status(photos) {
    var photoQuantity = Object.keys(photos.photos).length
    const styles = {
        background: "white",
        color: "black",
        width:"100%",
        fontSize: "1.7rem",
        marginTop:15,
        paddingLeft:10,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10
        }
    return (
        <Grid
        container item
        justify="space-between"
        alignItems="baseline"
        p={3}
        style = {styles}
        >
            <Typography variant="h5" gutterBottom >
            {photoQuantity} Photos Total
            </Typography>
      <AddPhotoModal photos = {photos}/>
        </Grid>
    )
}

Status.propTypes = {
photos : PropTypes.object.isRequired
}

export default Status

