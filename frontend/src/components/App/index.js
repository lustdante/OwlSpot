import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardPage from 'components/DashboardPage';
import GalleryPage from 'components/GalleryPage';
import HotspotPage from 'components/HotspotPage';
import LandingPage from 'components/LandingPage';
import PhotoDemoPage from 'components/PhotoDemoPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/hotspots/" component={DashboardPage} />
        <Route
          exact
          path="/hotspots/:hotspotId/gallery"
          component={GalleryPage}
        />
        <Route
          exact
          path="/hotspots/:hotspotId/gallery"
          component={GalleryPage}
        />
        <Route exact path="/hotspots/:hotspotId" component={HotspotPage} />
        <Route exact path="/photoDemo" component={PhotoDemoPage} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
