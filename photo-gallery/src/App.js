import React from 'react'
import './App.css' 
import Nav from './components/Nav/Nav'
import Status from './components/Status/Status'
import samplePhotos from './api/samplePhotos'
import sampleAlbums from './api/sampleAlbums'
import PhotoContainer from './components/PhotoContainer/PhotoContainer'
import {BrowserRouter as Router,
Switch, Route } from 'react-router-dom'
import StatusAlbums from './components/Status/StatusAlbums'
import AlbumContainer from './components/AlbumContainer/AlbumContainer'

const styles = {
    borderRadius: 4,
    borderColor:"black",
    border :1,
    borderStyle:"solid",
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
    paddingBottom:10
    }

const App = () =>{
    return(
        <Router>
            <Switch>
                <Route path="/Photos">
                <main className="App-Gallery" style={styles}>
                <div className="Nav">
                <Nav/>
                </div>
                <div className="Status">
                <Status photos = {samplePhotos}/>
                </div>
                <div className="PhotoContainer">
                <PhotoContainer photos = {samplePhotos}/>
                </div>
                </main>
                </Route>
                <Route path="/Albums">
                <main className="App-Gallery" style={styles}>
                <div className="Nav">
                <Nav/>
                <StatusAlbums albums = {sampleAlbums} photos = {samplePhotos}/>
                <AlbumContainer photos = {samplePhotos} albums= {sampleAlbums}/>
                </div>
                </main>
                </Route>
                <Route axact path="/">
                <h1>BIENVENIDO</h1>
                </Route>
                <Route>
                    Not Found
                </Route>
            </Switch>
        </Router>
    )
}

export default App