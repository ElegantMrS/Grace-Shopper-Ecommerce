import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import { getAllMerchandise } from '../api';
import ProductCard from './ProductCard';


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
            setCategory('Art Collections')
        });
        
    } catch (error) {
        console.log(error);
    }
}, []);

  return (
    
    <div className={classes.root}>
    <h2>{category}</h2>
        <Grid container spacing={2}>
          {merchandise.map((product, index) => 
          <Grid item xs={6} sm={4}>
            <ProductCard key={index} product={product}></ProductCard>
          </Grid>
          )}
        </Grid>
    </div>

  );
}

export default HomePage;