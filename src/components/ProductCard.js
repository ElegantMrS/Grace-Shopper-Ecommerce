import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    height: 'max-content'
  },
  media: {
    height: 140,
  },
  title: {
      fontStyle: 'italic',
      fontSize: '20px'
      
  },
  actionButtons: {
      display: 'flex',
  }
});


const ProductCard = (props) => {

    const { product, index } = props;

    const classes = useStyles();

    const addItemToCart = async (product) => {

        let cartItems = [];
    
        if (localStorage.getItem('cartItems')) {
            cartItems = JSON.parse(localStorage.getItem('cartItems'));
        }
        cartItems.push({
            artist: product.artist,
            cats: product.cats,
            'img_url': product.img_url,
            'merch_id': product.merch_id,
            name: product.name,
            price: product.price,
            rating: product.rating
        });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log(cartItems);
    }

    if (index % 2 !== 0) {
        return (
            <Box component="span" className="product-box-right">
    
            
            <div className="product-details-left">
                <Typography  className={classes.title} style={{gridRow: 2}}>
                    {product.name}
                </Typography>
                <Typography  style={{gridRow: 3}}>
                    {product.artist} 
                </Typography>
                <Typography  style={{gridRow: 5}}>
                    {product.price}
                </Typography>
                <div className={classes.actionButtons} style={{gridRow: 6}}>
                <Button type="" size="small" color="primary" onClick={() => addItemToCart(product)} >
                    Add to Collection
                </Button>
                <Button size="small" color="primary" style={{marginLeft: '30px'}}>
                    Learn More
                </Button>
                </div>
            </div>
            <div className="product-image-right">
                <img src={product.img_url} alt={product.name}></img>
            </div>
        
        </Box>
        )
    } else {
        return (
            <Box component="span" className="product-box-left">
            <div className="product-image-left">
                <img src={product.img_url} alt={product.name}></img>
            </div>
            <div className="product-details-right">
                <Typography className={classes.title} style={{gridRow: 2}}>
                    {product.name}
                </Typography>
                <Typography style={{gridRow: 3}}>
                    {product.artist}
                </Typography>
                <Typography style={{gridRow: 5}}>
                    {product.price}
                </Typography>
                <div className={classes.actionButtons} style={{gridRow: 6}}>
                <Button type="" size="small" color="primary" onClick={() => addItemToCart(product)}>
                    Add to Collection
                </Button>
                <Button size="small" color="primary" style={{marginLeft: '30px'}}>
                    Learn More
                </Button>
                </div>
            </div>
            
        </Box>
        )
    }

    }


export default ProductCard;