import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import { getMerchandiseByCat } from '../api';
import ProductCard from './ProductCard';
import { Typography } from '@material-ui/core';
// import ProductCardRight from './ProductCard';
// import ProductCardLeft from './ProductCardLeft';


const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      padding: 20,
    },
  });

  
  
  const CubismPage = ({merchandise, setMerchandise, category, setCategory}) => {
  
  const classes = useStyles();
  
  useEffect(() => {
      try {
          Promise.all([getMerchandiseByCat('Cubism')])
          .then((data) => {
            setMerchandise(data[0]);
            setCategory('CUBISM');
         }); 
      } catch (error) {
          console.log(error);
      }
  }, []);

  return (
      <div id="cubism-content">
        <div className="category-intro">
        <Typography><p>Cubist paintings reject the inherited concept that art should copy nature, 
          or that artists should adopt the traditional techniques of perspective, modeling, and foreshortening.</p></Typography>
        </div>
        {merchandise.map((product, index) => 
          <ProductCard index={index} product={product}></ProductCard>
        )}
      </div>
    
  )
  
    
  }
  
  export default CubismPage;