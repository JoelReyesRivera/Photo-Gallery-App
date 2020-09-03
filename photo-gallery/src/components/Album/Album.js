import React from 'react'
import PropTypes from 'prop-types'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteAlbumModal from '../Modals/DeleteAlbumModal'
import PlayAlbumModal from '../Modals/PlayAlbumModal'


const useStyles = makeStyles((theme) => ({
    root: {
      width:"100%",
      borderStyle:"solid",
      padding:"inherit"
    },
    media: {
      height: 0,
      paddingTop: "60%",
    }
  }));

const Album = ({name,description,tags,photos,albums,jsonKey,photosArray})  => {
    const classes = useStyles();
    const setTags = () =>{
      var array= [ ]
      for (let i = 0; i < tags.length;i++){
        array.push(<Typography key= {i} className={classes.tags} variant="body2"  component="p"> - {tags[i]}</Typography>)
      }
      return array
    }
    return (
        <Grid
        container item
        sm={4 }
        lg={3}
        xs={5}
        style={{marginTop:15, padding:10}}
        >
        <Card  className={classes.root}>
        <CardHeader title={name} />
        <CardMedia
          className={classes.media}
          image={photos[photosArray[0]].url}
          title={name}
        />
        <CardContent>
        <Typography variant="h6"  component="p"> Tags</Typography>
          {setTags()}
        </CardContent>
        <CardContent>
        <Typography variant="body1"  component="p">{description}</Typography>
      </CardContent>
      <CardActions>
        <DeleteAlbumModal albums={albums} jsonKey={jsonKey}/>
        <PlayAlbumModal albums={albums} jsonKey={jsonKey} photosArray={photos}/>
      </CardActions>
      </Card>
        </Grid>
    )
}


Album.propTypes = {
}

export default Album

