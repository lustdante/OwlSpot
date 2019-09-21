import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import UploadButton from './demoComponents';

const styles = {
  input: {
    display: 'none',
  },
};

class PhotoDemoPage extends Component {
  constructor() {
    super();
    this.state = {
      imgUrl: null,
    };
  }

  render() {
    return (
      <div>
        <h2 align="center">
          Try taking a photo or uploading a photo mother father
        </h2>
        <UploadButton
          className={this.props.classes.button}
          onImageChange={newImage => this.setState({ imgUrl: newImage })}
        />
        {this.state.imgUrl && <img src={this.state.imgUrl} />}
      </div>
    );
  }
}

export default withStyles(styles)(PhotoDemoPage);
