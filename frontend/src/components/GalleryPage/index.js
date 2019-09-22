import React from 'react';
import { Query } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Gallery from './Gallery';
import { query } from './queries';

const useStyles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    position: 'relative',
  },
  gridList: {
    width: 500,
    height: 450,
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
});

const GalleryPage = ({ match }) => (
  <Query
    query={query.getHotspot}
    variables={{ name: match.params.name }}
    notifyOnWetworkStatusChange
  >
    {({ data, loading }) => {
      if (loading) return 'loading...';

      if (!data || !data.hotspot) {
        return <Redirect to="/" />;
      }

      return (
        <Gallery photos={data.hotspot.photos} title={data.hotspot.title} />
      );
    }}
  </Query>
);

export default withStyles(useStyles)(GalleryPage);
