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
    alignItems: 'center'
  },
}));

export default function Header(props) {

  const classes = useStyles();
  const hotspotName = props.hotspotName

  return (
    <div>
      <Paper className={classes.root}>
        <BackButton/>
        <h2>{hotspotName}</h2>
        <UploadButton/>
      </Paper>
    </div>
  );
}