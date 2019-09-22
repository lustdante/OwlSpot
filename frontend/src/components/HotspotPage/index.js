import React from 'react';

import HeaderComponent from './Header/header'
import BodyComponent from './BodyComponent/bodyComponent.js';

function HotspotPage(props) {
  const hotspotName = props.match.params.hotspotId

  return (
    <div>
      <HeaderComponent
        hotspotName = {hotspotName}>
      </HeaderComponent>
      <br/>
      <br/>
      <br/>
      <br/>
      <BodyComponent
        hotspotName={hotspotName}>
      </BodyComponent>;

    </div>
  );
}

export default HotspotPage;
