import React from 'react';
import Demo from './Demo';

function HotspotPage({ match }) {
  return (
    <div>
      This is Hotspot Page
      <Demo name={match.params.name} />
    </div>
  );
}

export default HotspotPage;
