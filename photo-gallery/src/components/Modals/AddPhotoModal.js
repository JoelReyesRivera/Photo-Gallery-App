import React from "react";
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

export default function AddPhotoModal(photos) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const addPhoto = () => {
      //alert(jsonKey.substring(5,jsonKey.length))
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
        fullWidth
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