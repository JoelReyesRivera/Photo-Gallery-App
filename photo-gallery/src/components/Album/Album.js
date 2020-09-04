import React from 'react'
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

const Album = ({name,description,tags,jsonKey,photosArray})  => {
  var photos = JSON.parse(localStorage.getItem('photos'))

    const classes = useStyles();
    const setTags = () =>{
      var array= [ ]
      array.push(<Typography variant="h6" key={'tags'}  component="p"> Tags</Typography>)
      for (let i = 0; i < tags.length;i++){
        array.push(<Typography key= {i} className={classes.tags} variant="body2"  component="p"> - {tags[i]}</Typography>)
      }
      return array
    }
    const getPhoto = () =>{
        if(photosArray.length===0){
          return "https://www.worldloppet.com/wp-content/uploads/2018/10/no-img-placeholder.png"
        }
        else{
          return photos[photosArray[0]].url
        }

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
          image={getPhoto()}
          title={name}
        />
        <CardContent>
          {setTags()}
        </CardContent>
        <CardContent>
        <Typography variant="body1"  component="p">{description}</Typography>
      </CardContent>
      <CardActions>
        <DeleteAlbumModal  jsonKey={jsonKey}/>
        <PlayAlbumModal  jsonKey={jsonKey} photosArray={photos}/>
      </CardActions>
      </Card>
        </Grid>
    )
}


Album.propTypes = {
}

export default Album

