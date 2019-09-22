import React from 'react';
import { Query } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import HeaderComponent from './Header/header';
import Gallery from './Gallery';
import { query } from './queries';

const useStyles = makeStyles(theme => ({
  imageContainer: {
    paddingTop: 80,
    height: 300,
    overflow: 'hidden',
  },
  image: {
    width: '100vw',
  },
  description: {
    paddingLeft: 16,
    paddingRight: 16,
    color: '#4f5f76',
    fontSize: 16,
  },
}));

const HotspotPage = ({ match }) => {
  const classes = useStyles();

  return (
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

        const { hotspot } = data;
        return (
          <React.Fragment>
            <HeaderComponent
              hotspotTitle={hotspot.title}
              hotspotName={hotspot.name}
            />
            <div className={classes.imageContainer}>
              <img className={classes.image} src={hotspot.image} alt="Logo" />
            </div>
            <p className={classes.description}>{hotspot.description}</p>
            <Gallery photos={data.hotspot.photos} title={data.hotspot.title} />
          </React.Fragment>
        );
      }}
    </Query>
  );
};

export default HotspotPage;
