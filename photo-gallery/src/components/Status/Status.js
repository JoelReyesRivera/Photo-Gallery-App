import React from 'react'
import PropTypes from 'prop-types'
import Grid from "@material-ui/core/Grid";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

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
      <Fab aria-label="add"  flexdirection="row-reverse">
        <AddIcon />
      </Fab>
        </Grid>
    )
}

Status.propTypes = {
photos : PropTypes.object.isRequired
}

export default Status

