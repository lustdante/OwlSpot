import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';

export function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <h3 align='left'>After submitting a photo console.log should print the file name</h3>
      </Container>
    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    display: 'flex',
  },
  input: {
    display: 'none',
  },
}));

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

export default function UploadButton(props) {
  
  const fileUploadedHandler = (event) => {
    const file = event.target.files[0];
    console.log(file);
    uploadBase64(file, props);
    console.log(props.imgUrl)
  }

  const classes = useStyles();

  var button = (
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
        <Button variant="contained" component="span" className={classes.button}>
          <CameraIcon/>
        </Button>
      </label>
    </div>
  );

  return button;
}