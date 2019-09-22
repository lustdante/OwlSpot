import React from 'react';

import HeaderComponent from './Header/header'
import BodyComponent from './BodyComponent/bodyComponent.js';

function HotspotPage(props) {
  const hotspotName = props.match.params.hotspotId

  return (
    <div>
      {/* Floating header eventually */}
      <HeaderComponent
        hotspotName = {hotspotName}>
      </HeaderComponent>
      
      <BodyComponent 
        hotspotName={hotspotName}>
      </BodyComponent>;

    </div>
  );
}

export default HotspotPage;
