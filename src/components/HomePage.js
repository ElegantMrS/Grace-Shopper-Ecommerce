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
      
        {merchandise.map((product, index) => 
        
          <ProductCard key={index} product={product}></ProductCard>
        
        )}
        
    </div>

  );
}

export default HomePage;