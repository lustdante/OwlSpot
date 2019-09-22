import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
  fabCamera: {
    margin: theme.spacing(1),
    background: 'gray',
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButton(props) {

  function uploadBase64(file, props) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
  
    reader.onload = function () {
      props.onImageChange(reader.result);
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  const fileUploadedHandler = (event) => {
    const file = event.target.files[0];
    console.log(file);
    uploadBase64(file, props);
    console.log(props.imgUrl)
  }

  const classes = useStyles();
  return (
    <div className={props.className}>
      <input
        accept="image/*"
        className={classes.input}
        id="upload-button-file"
        multiple
        type="file"
        onChange={fileUploadedHandler}
      />
      <label htmlFor="upload-button-file">
        <Fab 
          component="span"
          size="small"
          color="primary"
          aria-label="back"
          className={classes.fabCamera}>
          <CameraIcon />
        </Fab>
      </label>
    </div>
  )
}
