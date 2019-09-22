import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BodyDescription from './bodyDescription';
import BodyGallery from './bodyGallery.js';

export default function BodyComponent(props) {
  const hotspotName = props.hotspotName;
  const hotspotDescription = 'DESCRIPTION WILL GO HERE';

  return (
    <div>
      <BodyDescription
        hotspotName={hotspotName}
        hotspotDescription={hotspotDescription}
      ></BodyDescription>
      <BodyGallery></BodyGallery>
    </div>
  );
}
