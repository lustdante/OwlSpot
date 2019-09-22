import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from './coffeehouse.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 10),
  },
  image: {
    height: '30vw',
    width: '30vh',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  description: {
    fontFamily: 'Open Sans',
    color: '#4f5f76',
    fontSize: '15px',
  },
}));

export default function BodyDescription(props) {
  const classes = useStyles();
  const hotspotDescription =
    'This place is located in Rice University. Go check out the gallery to see what has been upto';
    
  return (
    <div className={classes.root}>
      <img className={classes.image} src={Image} alt="Logo" />
      <div className={classes.description}>{hotspotDescription}</div>
    </div>
  );
}
