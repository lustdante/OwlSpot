import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Dialog } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'material-ui-image';

const useStyles = makeStyles(theme => ({
  gridList: {
    width: 500,
    height: 450,
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const sliderSettings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 0,
  // adaptiveHeight: true,
  // variableWidth: true,
  initialSlide: 0,
  draggable: true,
};

const Gallery = props => {
  const classes = useStyles();
  const { photos, title } = props;
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <React.Fragment>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {photos.map(photo => (
          <GridListTile key={photo.id} cols={1}>
            <img
              src={photo.url}
              alt={photo.id}
              onClick={() => {
                setOpen(true);
                setSelectedIndex(0);
              }}
            />
          </GridListTile>
        ))}
      </GridList>
      <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setOpen(false)}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
        <Slider {...sliderSettings} initialSlide={selectedIndex}>
          {photos.map((photo, index) => (
            <div key={index}>
              <h1>{index}</h1>
              <Image src={photo.url} alt={photo.id} />
            </div>
          ))}
        </Slider>
      </Dialog>
    </React.Fragment>
  );
};

export default Gallery;
