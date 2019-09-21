import React from 'react';
import { graphql } from 'react-apollo';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { mutation } from './queries';

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

  reader.onload = function() {
    props.onImageChange(reader.result);
    console.log(reader.result);
  };
  reader.onerror = function(error) {
    console.log('Error: ', error);
  };
}

const UploadButton = props => {
  const fileUploadedHandler = async event => {
    const file = event.target.files[0];
    await props.updatePhoto({ variables: { upload: file, hotspotId: 123 } });
    uploadBase64(file, props);
    console.log(props.imgUrl);
  };

  const classes = useStyles();
  var button = (
    <div className={props.className}>
      <input
        accept="image/*"
        className={classes.input}
        id="upload-button-file"
        type="file"
        onChange={fileUploadedHandler}
      />
      <label htmlFor="upload-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
    </div>
  );

  return button;
};

export default graphql(mutation.updatePhoto, {
  name: 'updatePhoto',
})(UploadButton);
