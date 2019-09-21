import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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
  },
  input: {
    display: 'none',
  },
}));

export function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div className={props.className}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
    </div>
  );
}
