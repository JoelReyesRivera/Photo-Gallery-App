import React from 'react'
import NavButton from '../NavButton/NavButton'
import Grid from "@material-ui/core/Grid";
const Nav = () => {
    return (
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
        >
            <NavButton  text= "Albums"/>
            <NavButton  text= "Photos"/>
        </Grid>
    )
}

export default Nav
