import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SimpleContainer, ContainedButtons } from './demoComponents'

const styles = {
    button: {
        display: 'flex',
        justifyContent: 'center',
    },
};

function PhotoDemoPage(props) {
    console.log(props.classes)
  return (
    <div>
      <h2 align='center'>Try taking a photo or uploading a photo mother father</h2>
      <ContainedButtons className={props.classes.button} />
      <SimpleContainer></SimpleContainer>
    </div>
  );
}

export default withStyles(styles)(PhotoDemoPage);
