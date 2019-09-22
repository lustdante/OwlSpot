import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BodyDescription from './bodyDescription';
import BodyGallery from './bodyGallery.js';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '100px',
  },
}));

export default function BodyComponent(props) {

  const classes = useStyles();
  const hotspotName = props.hotspotName;
  const hotspotDescription = 'DESCRIPTION WILL GO HERE';

  return (
    <div>
      <BodyDescription className={classes.root}
        hotspotName={hotspotName}
        hotspotDescription={hotspotDescription}
      ></BodyDescription>

      {/* Jeffrey */}
      <BodyGallery></BodyGallery>
    </div>
  );
}
