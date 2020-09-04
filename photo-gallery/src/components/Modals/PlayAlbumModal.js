import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import PlayArrow from "@material-ui/icons/PlayArrow";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
    width: "40%",
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

export default function PlayAlbumModal({photosArray,jsonKey}) {
  var albums = JSON.parse(localStorage.getItem('albums'))
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const photos = albums[jsonKey].photosIds
  const getImages = () =>{
    var array = []
    for (let i = 0; i < photos.length; i++){
        array.push(<div key={i}><img key= {i} alt={photosArray[photos[i]].title} src={(photosArray[photos[i]]).url} /></div>)
    }
    return array
}
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
              <Carousel>
                  {getImages()}
            </Carousel>
    </div>
  );

  return (
    <div>
      <IconButton aria-label="edit" onClick={handleOpen}>
            <PlayArrow />
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
