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
  
  const ContemporaryPage = ({merchandise, setMerchandise, category, setCategory}) => {
  
  const classes = useStyles();
  
  
  useEffect(() => {
      try {
          Promise.all([getMerchandiseByCat('Contemporary')])
          .then((data) => {
            setMerchandise(data[0]);
            setCategory('CONTEMPORARY')
         }); 
      } catch (error) {
          console.log(error);
      }
  }, []);
  
    return (
      <div>
      <span><h1>Pieces for Sale</h1></span>
      <div className={classes.root}>
          <Grid container spacing={6}>
            {merchandise.map((product, index) => 
            <Grid item xs={6} sm={4}>
              <ProductCard key={index} product={product}></ProductCard>
            </Grid>
            )}
          </Grid>
      </div> 
      </div>
    );
  }
  
  export default ContemporaryPage;