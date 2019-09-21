import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 10),
  },
}));

export default function HotspotInfo(props) {
  const classes = useStyles();
  const hotspotName = props.hotspotName
  const hotspotDescription = 'DESCRIPTION WILL GO HERE'

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {hotspotName}
        </Typography>
        <Typography component="p">
          {hotspotDescription}
        </Typography>
      </Paper>
    </div>
  );
}
