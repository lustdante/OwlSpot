import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';
import { makeStyles, withStyles } from '@material-ui/core';

const useStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
};

class GalleryPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <div>
        <h1> This is the Gallery Page</h1>
        <div className={this.props.classes.root}>
          <GridList cellHeight={160} className={this.props.classes.gridList} cols={3}>
            {tileData.map(tile => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title}/>
              </GridListTile>
            ))}
          </GridList>
        </div>
        );
      </div>
    );
  }
}

export default withStyles(useStyles) (GalleryPage);
