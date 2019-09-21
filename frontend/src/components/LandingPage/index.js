import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { withRouter } from 'react-router';
import Image from './rice.jpg';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'flex',
    margin: '50px',
  },
  body: {
    height: '100vh',
    backgroundImage: `url(${Image})`,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontSize: '90px',
    color: 'white',
  },
}));

var logIn = props => {
  props.history.push('/hotspots/');
};

function LandingPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <Box>
        <h1 className={classes.text}>OwlSpot</h1>
        <Button
          onClick={() => {
            logIn(props);
          }}
          variant="contained"
          color="primary"
          className={classes.button}
          component="span"
        >
          <h2>Start Exploring Rice</h2>
        </Button>
      </Box>
    </div>
  );
}

export default withRouter(LandingPage);
