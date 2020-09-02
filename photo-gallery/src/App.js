import React from 'react'
import './App.css' 
import Nav from './components/Nav/Nav'
import Status from './components/Status/Status'
import samplePhotos from './api/samplePhotos'
import PhotoContainer from './components/PhotoContainer/PhotoContainer'

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
    )
}

export default App