import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { makeStyles } from '@material-ui/core/styles';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Fab from '@material-ui/core/Fab';
import { mutation } from '../queries';

const useStyles = makeStyles(theme => ({
  fabCamera: {
    margin: theme.spacing(1),
    background: 'gray',
  },
  input: {
    display: 'none',
  },
}));

const UploadButton = props => {
  const { uploadPhoto, name } = props;
  const [disabled, setDisabled] = useState(false);
  const classes = useStyles();

  var button = (
    <div className={props.className}>
      <input
        accept="image/*"
        className={classes.input}
        id="upload-button-file"
        multiple
        type="file"
        onChange={event => {
          const file = event.target.files[0];
          setDisabled(true);
          return uploadPhoto({
            variables: { name, upload: file },
          }).finally(() => setDisabled(false));
        }}
      />
      <label htmlFor="upload-button-file">
        <Fab 
          component="span"
          size="small"
          color="primary"
          aria-label="back"
          className={classes.fabCamera}
          disabled={disabled}
        >
          <CameraIcon />
        </Fab>
      </label>
    </div>
  );

  return button;
}

export default graphql(mutation.uploadPhoto, {
  name: 'uploadPhoto',
})(UploadButton);
