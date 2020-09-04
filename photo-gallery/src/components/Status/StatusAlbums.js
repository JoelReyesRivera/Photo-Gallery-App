import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import AddAlbumModal from '../Modals/AddAlbumModal'

function StatusAlbums() {
    var albums = JSON.parse(localStorage.getItem('albums'))
    var albumsQuantity = Object.keys(albums).length
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
            {albumsQuantity} Albums Total
            </Typography>
      <AddAlbumModal/>

        </Grid>
    )
}

StatusAlbums.propTypes = {
}

export default StatusAlbums

