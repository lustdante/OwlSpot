import React from 'react';

import HeaderComponent from './Header/header'

function HotspotPage(props) {
  const hotspotName = props.match.params.hotspotId

  return (
    <div>
      {/* Floating header eventually */}
      <HeaderComponent
        hotspotName = {hotspotName}
      ></HeaderComponent>

      {/* <BodyComponent></BodyComponent> */}

    </div>
  );
}

export default HotspotPage;


