import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BackIcon from '@material-ui/icons/ArrowBack';
import Fab from '@material-ui/core/Fab';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  fabBack: {
    margin: theme.spacing(1),
    background: 'gray',
  },
}));

export default function BackButton() {
  const classes = useStyles();
  return (
    <Link to='/hotspots'>
      <Fab 
        size="small"
        color="primary"
        aria-label="back"
        className={classes.fabBack}>
        <BackIcon/>
      </Fab>
    </Link>
  )
}
