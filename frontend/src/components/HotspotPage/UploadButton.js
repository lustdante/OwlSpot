import React, { useState } from 'react';
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

const UploadButton = props => {
  const { uploadPhoto, name } = props;
  const [disabled, setDisabled] = useState(false);
  const classes = useStyles();
  var button = (
    <div>
      <input
        accept="image/*"
        className={classes.input}
        id="upload-button-file"
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
        <Button
          variant="contained"
          component="span"
          className={classes.button}
          disabled={disabled}
        >
          Upload
        </Button>
      </label>
    </div>
  );

  return button;
};

export default graphql(mutation.uploadPhoto, {
  name: 'uploadPhoto',
})(UploadButton);
