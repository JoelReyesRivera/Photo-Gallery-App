import React, {useState}from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";

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

export default function EditPhotoModal({title,description,url,jsonKey}) {
  var photos = JSON.parse(localStorage.getItem('photos'))
  const [data,setData] = useState({
    title : title,
    description:description,
    url : url
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

  const editPhoto = () => {
      photos[jsonKey] = data
      localStorage.setItem("photos", JSON.stringify(photos));
      handleClose()
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
    Edit Photo
    </Typography>
    <Typography variant="h6" gutterBottom >
    Title
    </Typography>
    <TextField
        className={classes.textField}
        id="Title"
        name="title"
        placeholder="Title"
        fullWidth
        onChange={handleInputChange}
        defaultValue=  {title}
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
        name="description"
        fullWidth
        onChange={handleInputChange}
        defaultValue=  {description}
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
          fullWidth
          name="url"
          onChange={handleInputChange}
          defaultValue=  {url}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
    <Button className = {classes.button} variant="contained" fullWidth style={{marginTop:25}} onClick={() => {editPhoto()}}> 
        SAVE
    </Button>
    </div>
  );

  return (
    <div>
      <IconButton aria-label="edit" onClick={handleOpen}>
            <Edit />
          </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
    </div>
  );
}
