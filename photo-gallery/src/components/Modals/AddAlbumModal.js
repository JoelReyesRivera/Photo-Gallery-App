import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from 'react-select'

function getModalStyle() {
  const top = 40;
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  button: {
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
  },
  textField: {
    border: ".5px solid #000",
    boxShadow: theme.shadows[1],
  }
}));

const getTags = (albums) =>{
  var albumKeys = Object.keys(albums);
  var tags = []
  for (let index = 0; index < albumKeys.length; index++) {
        for (let i = 0; i < albums[albumKeys[index]].tags.length; i++) {
          if(!tags.includes(albums[albumKeys[index]].tags[i])){
            tags.push({
              label :albums[albumKeys[index]].tags[i],
              value:albums[albumKeys[index]].tags[i]}
              )
          }
      }
}
  return tags
}

export default function AddAlbumModal() {
  var photos = JSON.parse(localStorage.getItem('photos'))
  var albums = JSON.parse(localStorage.getItem('albums'))
  const [data,setData] = useState({
    name : " ",
    description:" ",
    photosIds : [],
    tags:[]
  })
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleInputChange = (event) =>{
    setData({
      ...data,
      [event.target.name] :event.target.value 
    })
}
  const handleChangePhotos = (selectedOption) => {
    if(selectedOption===null){
      setData({...data, photosIds:[]})
    return 
    }
    var photosIds = []
    for (let index = 0; index < selectedOption.length; index++) {
    photosIds.push(selectedOption[index].value)
    }
    setData({...data, photosIds:photosIds})
  }

  const handleChangeTags = (selectedOption) => {
    if(selectedOption===undefined){
      setData({...data, tags:[]})
    return 
    }
    var tags = []
    for (let index = 0; index < selectedOption.length; index++) {
      tags.push(selectedOption[index].value)
    }
    setData({...data, tags:tags})
  }


  const addAlbum = () => {
    if(data.name === ' ' || data.description === ' ' || data.photosIds.length===0 || data.tags.length===0){
      alert('INCOMPLETE INFO')
      return
    }
    var albumskeys = Object.keys(albums)
    var lastIndex = 0
    for (let i = 0; i < albumskeys.length; i++) {
      var index = parseInt(albumskeys[i].substring(5,albumskeys.length))
      if (lastIndex < index) 
        lastIndex = index
    }
    var newKey = 'album' + (lastIndex+1)
    albums[newKey] = data
    localStorage.setItem("albums", JSON.stringify(albums));
    handleClose()
  }
  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const options = () =>{
      var array = []
      var keys = Object.keys(photos)
      for (let i = 0; i < keys.length; i++) {
        array.push({value :keys[i], label: photos[keys[i]].title})
      }
      return array
  }
  options()
  const body = (
    <div style={modalStyle} className={classes.paper}>
    <Typography variant="h4" gutterBottom >
    New Album
    </Typography>
    <Typography variant="h6" gutterBottom >
    Name
    </Typography>
    <TextField
        className={classes.textField}
        id="Name"
        onChange={handleInputChange}
        placeholder="Name"
        fullWidth
        name="name"
        InputLabelProps={{
        shrink: true,
        }}
          variant="outlined"
        />
        <Typography variant="h6" gutterBottom style={{marginTop:20}}>
    Description
    </Typography>
    <TextField
          className={classes.textField}
          id="Description"
          onChange={handleInputChange}
          placeholder="Description"
          name="description"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
    <Typography variant="h6"  gutterBottom style={{marginTop:20, marginBottom:10}}>
    Tags
    </Typography>
    <Select
    isMulti
    name="tags"
    onChange={handleChangeTags}
    options = {getTags(albums)}
  />
    <Typography variant="h6"  gutterBottom style={{marginTop:20, marginBottom:10}}>
    Photos
    </Typography>
    <Select
    isMulti
    name="photosIds"
    onChange={handleChangePhotos}
    options = {options()}
  />
    <Button className = {classes.button} variant="contained" fullWidth style={{marginTop:25}} onClick={() => {addAlbum()}}> 
        SAVE
    </Button>
    </div>
  );

  return (
    <div>
      <Fab aria-label="add" onClick={handleOpen} flexdirection="row-reverse">
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
    </div>
  );
}
