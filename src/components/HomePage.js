import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import { getAllMerchandise } from '../api';
import ProductCard from './ProductCard';
import { Box, Typography } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 20,
  },
});

const HomePage = ({merchandise, setMerchandise, category, setCategory}) => {

const classes = useStyles();


useEffect(() => {
    try {
        Promise.all([getAllMerchandise()])
        .then((data) => {
            setMerchandise(data[0])
            setCategory('ART COLLECTIONS')
        });
        
    } catch (error) {
        console.log(error);
    }
}, []);

return (
  <div>
  <video id="background-video" autoPlay loop muted id="home-video">
    <source src='https://www.pexels.com/video/blue-abstract-colorful-background-7782667/' type='video/mp4'/>
  </video>
  <div style={{display: 'flex', justifyContent: "center", alignContent: "center", backgroundColor: "#DF7332"}}>
    <img src="https://c4.wallpaperflare.com/wallpaper/1019/758/373/abstraction-color-form-wallpaper-preview.jpg" 
    style={{boxShadow: "none", paddingTop: "20px", paddingBottom: "20px"}}></img>
  </div>
  <Box>
    <Typography></Typography>
  </Box>
  {merchandise.map((product, index) => 
    <ProductCard index={index} product={product}></ProductCard>
  )}
  </div>
)
}

export default HomePage;