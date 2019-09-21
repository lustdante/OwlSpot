import React from 'react';
import PaperSheet from './hotspotInfo';

function HotspotPage(props) {
  const hotspotName = props.match.params.hotspotId

  return (
    <div>
      <PaperSheet
        hotspotName = {hotspotName}
      />
      <h2>The camera will be floating here</h2>
      <h2>The Gallery will be here</h2>
    </div>
  );
}

export default HotspotPage;
