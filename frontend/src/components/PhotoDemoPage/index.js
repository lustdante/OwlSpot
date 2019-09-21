import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SimpleContainer, ContainedButtons } from './demoComponents'

const styles = {
    input: {
        display: 'none',
    }
};

class PhotoDemoPage extends Component {

  constructor() {
    super()
    this.state = {
      imgUrl: null
    }
  }

  render() {
    // console.log(this.props.classes.)  
    return (
      <div>
        <h2 align='center'>Try taking a photo or uploading a photo mother father</h2>
        <ContainedButtons
          className={this.props.classes.button}
          imgUrl={this.state.imgUrl}
          onImageChange={(newImage) => this.setState({ imgUrl: newImage })}
        />
        <SimpleContainer></SimpleContainer>
        {this.state.imgUrl && <img src={this.state.imgUrl} />}
      </div>
    );
  }
}

export default withStyles(styles)(PhotoDemoPage);
