import React from 'react';
import BodyComponent from './BodyComponent/bodyComponent.js';

function HotspotPage(props) {
  const hotspotName = props.match.params.hotspotId;

  return <BodyComponent hotspotName={hotspotName}></BodyComponent>;
}

export default HotspotPage;
