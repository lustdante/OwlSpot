import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BackButton from './backButton';
import UploadButton from './uploadButton';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    padding: theme.spacing(1, 1),
    display: 'flex',
    direction: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <BackButton />
      <h2>{props.hotspotTitle}</h2>
      <UploadButton name={props.hotspotName}></UploadButton>
    </Paper>
  );
}
