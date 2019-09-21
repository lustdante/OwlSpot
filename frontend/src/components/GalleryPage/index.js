import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';
import { Dialog, withStyles } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';


const useStyles = (theme) => (
  {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  });

class GalleryPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  imageOnClick(tile) {
    console.log(tile);
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <h1> This is the Gallery Page</h1>
        <div className={this.props.classes.root}>
          <GridList cellHeight={160} className={this.props.classes.gridList} cols={3}>
            {tileData.map(tile => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} onClick={() => this.imageOnClick(tile)}/>
              </GridListTile>
            ))}
          </GridList>
          <Dialog fullScreen open={this.state.open} onClose={this.handleClose}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={() => this.handleClose()} aria-label="close">
                <CloseIcon/>
              </IconButton>
              <Typography variant="h6" className={this.props.classes.title}>
                Sound
              </Typography>
            </Toolbar>
          </Dialog>
        </div>
        );
      </div>
    );
  }

}

export default withStyles(useStyles)(GalleryPage);
