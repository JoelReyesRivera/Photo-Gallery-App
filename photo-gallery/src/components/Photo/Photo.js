import React from 'react'
import PropTypes from 'prop-types'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



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

const Photo = ({title,url,description})  => {
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
        <IconButton aria-label="edit">
            <Edit />
          </IconButton>
          <IconButton aria-label="delete">
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
        </Grid>
    )
}


Photo.propTypes = {
}

export default Photo

