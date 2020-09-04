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
import EditPhotoModal from '../Modals/EditPhotoModal'
import DeletePhotoModal from '../Modals/DeletePhotoModal'

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

const Photo = ({title,url,description,jsonKey})  => {
    const classes = useStyles();
    return (
        <Grid
        container item
        sm={4}
        lg={2}
        xs={5}
        style={{marginTop:15, padding:10}}
        >
        <Card  className={classes.root}>
        <CardHeader title={title} />
        <CardMedia
          className={classes.media}
          image={url}
          title={title}
        />
        <CardContent>
        <Typography variant="body1"  component="p">{description}</Typography>
      </CardContent>
        <CardActions disableSpacing itemalign="center">
      <EditPhotoModal title={title} description={description} url={url} jsonKey={jsonKey}/>
      <DeletePhotoModal jsonKey={jsonKey}/>
        </CardActions>
      </Card>
        </Grid>
    )
}


Photo.propTypes = {
  title : PropTypes.string.isRequired,
  url : PropTypes.string.isRequired,
  description : PropTypes.string.isRequired,
  jsonKey : PropTypes.string.isRequired
}

export default Photo

