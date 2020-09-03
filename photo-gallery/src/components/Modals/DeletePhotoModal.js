import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
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

export default function DeletePhotoModal({photos,jsonKey}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const deletePhoto = () => {
      delete (photos[jsonKey])
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
    Delete
    </Typography>
    <Typography variant="h6" gutterBottom >
    Are you sure you want to delete this photo?
    </Typography>
    <Button className = {classes.button} variant="contained" style={{marginTop:25, width:"50%"}} onClick={() => {handleClose()}}> 
        No
    </Button>
    <Button className = {classes.button} variant="contained" style={{marginTop:25, width:"50%"}} onClick={() => {deletePhoto()}}> 
        Yes
    </Button>
    </div>
  );

  return (
    <div>
      <IconButton aria-label="edit" onClick={handleOpen}>
            <Delete />
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
