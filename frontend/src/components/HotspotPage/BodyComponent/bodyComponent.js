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

  return (
    <div>
      <BodyDescription
        className={classes.root}
        hotspotDescription={props.hotspotDescription}
        hotspotCoverPhoto={props.hotspotCoverPhoto}
      />

      {/* Jeffrey */}
      <BodyGallery
        hotspotName={props.hotspotName}
        hotspotPhotos={props.hotspotPhotos}
      />
    </div>
  );
}
