import React from 'react';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import BackIcon from '@material-ui/icons/ArrowBack';

import BodyComponent from './BodyComponent/bodyComponent.js';
import UploadButton from './floatingUpload';

const useStyles = makeStyles(theme => ({
  fabBack: {
    margin: theme.spacing(1),
    background: 'gray',
    position: 'fixed',
    left: '1px',
    top: '20px',
  },
  fabUpload: {
    margin: theme.spacing(1),
    background: 'gray',
    position: 'fixed',
    right: '1px',
    top: '20px',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function HotspotPage(props) {
  const classes = useStyles();
  const hotspotName = props.match.params.hotspotId;

  // Top component
  // Butotns & Name

  // Bottom Component
  // Descript + Pic
  // Gallery

  return <BodyComponent hotspotName={hotspotName}></BodyComponent>;
}

export default HotspotPage;
