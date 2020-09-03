import React from "react"
import Button from "@material-ui/core/Button"
import PropTypes from 'prop-types'
import Grid from "@material-ui/core/Grid";
import {Link} from 'react-router-dom'

const NavButton = ({text}) => {

  const stylePhotoButton = {
    background: "black",
    color: "white",
    borderRadius: 4,
    boxShadow: "0 3px 5px 2px gray",
    width:"100%",
    fontSize: "1.5rem"
    }
  
    const styleAlubumButton = {
    background: "white",
    color: "black",
    borderRadius: 4,
    boxShadow: "0 3px 5px 2px gray",
    width:"100%",
    fontSize: "1.7rem",
    }
    if(text === "Albums")
    return (
      <Grid container item sm={6}>
        <Link to="/Albums" style={{width:"100%"}}><Button style = {styleAlubumButton}>{text}</Button></Link>
      </Grid>
    );
    else{
      return (
        <Grid container item sm={6}>
          <Link to="/Photos" style={{width:"100%"}}><Button style = {stylePhotoButton}>{text}</Button></Link>
        </Grid>
      );
    }

}

NavButton.propTypes = {
    text : PropTypes.string.isRequired
}

export default NavButton