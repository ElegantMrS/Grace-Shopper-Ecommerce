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
});


const ProductCard = (props) => {

    const { product } = props;

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


    return (
        <Box component="span" m={1} className="product-box">
            
            <div id="product-details">
                <Typography>
                    {product.name}
                </Typography>
                <Typography>
                    {product.artist}
                </Typography>
                <Typography>
                    {product.name}
                </Typography>
            </div>
            <div className="product-image">
                <img src={product.img_url} alt={product.name}></img>
            </div>
        </Box>
    );
    }


export default ProductCard;