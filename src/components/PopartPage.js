import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import { getMerchandiseByCat } from '../api';
import ProductCard from './ProductCard';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      padding: 20,
    },
  });
  
  const PopartPage = ({merchandise, setMerchandise, category, setCategory}) => {
  
  const classes = useStyles();
  
  
  useEffect(() => {
      try {
          Promise.all([getMerchandiseByCat('Popart')])
          .then((data) => {
            setMerchandise(data[0]);
            setCategory('POPART')
         }); 
      } catch (error) {
          console.log(error);
      }
  }, []);
  
  return (
    <div>
    {merchandise.map((product, index) => 
      <ProductCard index={index} product={product}></ProductCard>
    )}
    </div>
  );
  }
  
  export default PopartPage;