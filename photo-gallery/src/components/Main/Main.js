import React, {useState} from 'react'
import Nav from '../Nav/Nav'
import Status from '../Status/Status'
import samplePhotos from '../../api/samplePhotos'
import sampleAlbums from '../../api/sampleAlbums'
import PhotoContainer from '../PhotoContainer/PhotoContainer'
import {BrowserRouter as Router,
Switch, Route } from 'react-router-dom'
import StatusAlbums from '../Status/StatusAlbums'
import AlbumContainer from '../AlbumContainer/AlbumContainer'

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

const Main = () =>{
    const StorageAlbums = localStorage.getItem("albums");
    const StoragePhotos = localStorage.getItem("photos");
    var useFulData = {}
    if (StorageAlbums !=="null" && StoragePhotos !== "null" && StorageAlbums !== undefined && StoragePhotos!==undefined) {
        var jsonStorageAlbums = JSON.parse(StorageAlbums)
        var jsonStoragePhotos = JSON.parse(StoragePhotos)
        useFulData = {
            photos: jsonStoragePhotos,
            albumns: jsonStorageAlbums
        }
    }
    else{
        useFulData = {
            photos: samplePhotos,
            albumns: sampleAlbums
        }
    }
    const [data] = useState({
        albums: useFulData.albumns,
        photos :useFulData.photos,
    })
    const saveData = () =>{
            localStorage.setItem("albums", JSON.stringify(data.albums));
            localStorage.setItem("photos", JSON.stringify(data.photos));
    }
    saveData()
    return(
        <Router>
            <Switch>
                <Route path="/Photos">
                <main className="App-Gallery" style={styles}>
                <div className="Nav">
                <Nav/>
                </div>
                <div className="Status">
                <Status/>
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

export default Main