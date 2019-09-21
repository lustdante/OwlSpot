import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Dialog, withStyles } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Image from 'material-ui-image'


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

const hotspotName = 'Coffee House';

const sliderSettings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  variableWidth: true,
  initialSlide: 0
};

const images = [
  {
    img: 'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg',
    title: 'Bird',
    timestamp: 'jill111',
  },
  {
    img: 'https://www.fujifilmusa.com/products/digital_cameras/x/fujifilm_x20/sample_images/img/index/ff_x20_008.JPG',
    title: 'Flower',
    timestamp: 'director90',
  },
  {
    img: 'https://www.tompetty.com/sites/g/files/g2000007521/f/Sample-image10-highres.jpg',
    title: 'Apples',
    timestamp: 'Danson67',
  },
  {
    img: 'https://googlechrome.github.io/samples/picture-element/images/butterfly.jpg',
    title: 'Butterfly',
    timestamp: 'fancycrave1',
  },
  {
    img: 'https://sugarfactory.com/wp-content/uploads/2016/10/sample4_2.jpg',
    title: 'Hot balloons',
    timestamp: 'Hans',
  },
  {
    img: 'https://miro.medium.com/max/10704/1*42VaFA9d-d7AqW8TtUcUtA.jpeg',
    title: 'Star War',
    timestamp: 'Hans',
  },
  {
    img: 'http://www.tompetty.com/sites/g/files/g2000007521/f/sample1_0.jpg',
    title: 'Mechanics',
    timestamp: 'Hans',
  },
  {
    img: 'https://kbob.github.io/images/sample-5.jpg',
    title: 'Pencils',
    timestamp: 'Hans',
  },
  {
    img: 'https://9to5mac.com/wp-content/uploads/sites/6/2019/09/iPhone-11-Pro-sample-photos.jpg?quality=82&strip=all',
    title: 'iPhone',
    timestamp: 'Hans',
  },

];

class GalleryPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedImageIndex: -1
    };
  }

  imageOnClick(tile) {
    console.log(tile);
    this.setState({ open: true });
    console.log(images.indexOf(tile));
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
            {images.map(tile => (
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
                {hotspotName}
              </Typography>
            </Toolbar>
            <Slider {...sliderSettings} initialSlide={this.state.selectedImageIndex}>
              {/*{images.map(image => (*/}
              {/*  <div key={image.img}>*/}
              {/*    <img src={image.img} alt={image.timestamp}/>*/}
              {/*  </div>*/}
              {/*))}*/}
              <div>
                <h1>1</h1>
                <img src='https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'
                     alt={'Name'}/>
              </div>
              <div>
                <h1>2</h1>
                <img src='https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'
                     alt={'Name'}/>
              </div>
              <div>
                <h1>3</h1>
                <img src='https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'
                     alt={'Name'}/>
              </div>
            </Slider>
          </Dialog>
        </div>
      </div>
    );
  }

}

export default withStyles(useStyles)(GalleryPage);
