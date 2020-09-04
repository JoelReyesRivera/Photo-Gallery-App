import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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

export default function AddPhotoModal() {
  var photos = JSON.parse(localStorage.getItem('photos'))
  const [data,setData] = useState({
    title : " ",
    description:" ",
    url : " "
  })
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const addPhoto = () => {
      if(data.title === ' ' || data.descripcion === ' ' || data.url === ' '){
        alert('INCOMPLETE INFO')
        return
      }
      var photosKeys = Object.keys(photos)
      var lastIndex = 0
      for (let i = 0; i < photosKeys.length; i++) {
        var index = parseInt(photosKeys[i].substring(5,photosKeys.length))
        if (lastIndex < index) 
          lastIndex = index
      }
      var newKey = 'photo' + (lastIndex+1)
      var newPhotos = photos
      newPhotos[newKey] = data
      localStorage.setItem("photos", JSON.stringify(newPhotos));
      handleClose()
  }
  const handleInputChange = (event) =>{
      setData({
        ...data,
        [event.target.name] :event.target.value 
      })
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
    <Typography variant="h4" gutterBottom >
    New Photo
    </Typography>
    <Typography variant="h6" gutterBottom >
    Title
    </Typography>
    <TextField
        className={classes.textField}
        id="Title"
        placeholder="Title"
        fullWidth
        name="title"
        onChange={handleInputChange}
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
        placeholder="Description"
        onChange={handleInputChange}
        fullWidth
        name="description"
        InputLabelProps={{
        shrink: true,
          }}
          variant="outlined"
        />
        <Typography variant="h6" gutterBottom style={{marginTop:20}} >
    URL
    </Typography>
    <TextField
          className={classes.textField}
          id="URL"
          placeholder="URL"
          onChange={handleInputChange}
          fullWidth
          name="url"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
    <Button className = {classes.button} variant="contained" fullWidth style={{marginTop:25}} onClick={() => {addPhoto()}}> 
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
