import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import { getMerchandiseByCat } from '../api';
import ProductCard from './ProductCard';
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
    <div>
    {merchandise.map((product, index) => 
      <ProductCard index={index} product={product}></ProductCard>
    )}
    </div>
  )
  
  // merchandise.map((product, index) => {
  //   if (index % 2 !== 0) {
  //     return (
  //       <ProductCardRight index={index} product={product}/>
  //     )
  //   } else {
  //     return (
  //       <ProductCardLeft index={index} product={product}/>
  //     )
  //   }
  // })
    
  }
  
  export default CubismPage;