import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
  title: {
    fontFamily: 'Open Sans',
    fontSize: '35px',
    marginTop: '.5em',
    color: '#666',
    textAlign: 'center',
    padding: '20px',
  },
}));

export default function BodyGallery(props) {
  const classes = useStyles();
  const pics = [
    'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
  ];

  const formatedPic = pics.map((x, idx) => {
    return <img className={classes.image} src={x} key={idx} alt="new" />;
  });
  return (
    <div>
      <div className={classes.title}>Gallery</div>
      {formatedPic}
    </div>
  );
}
