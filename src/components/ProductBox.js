import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={product.img_url}
            title={product.name}
            />
            <CardContent>
            <Typography gutterBottom constiant="h5" component="h2">
                {product.name}
            </Typography>
            <Typography constiant="body2" color="textSecondary" component="p">
                {product.artist}
            </Typography>
            
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button type="" size="small" color="primary" onClick={() => addItemToCart(product)} >
            Add to Collection
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
            <Typography constiant="body2" color="textSecondary" component="p" >
                {product.price}
            </Typography>
        </CardActions>
        </Card>
    );
    }

export default ProductCard;