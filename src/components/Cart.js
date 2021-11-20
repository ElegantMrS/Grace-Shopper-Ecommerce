import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

// also loggedIn, etc.

const Cart = (
  // {cartItems, setCartItems}
  ) => {

  const classes = useStyles();

  let cartItems = [];

  if (localStorage.getItem('cartItems')) {
    cartItems = JSON.parse(localStorage.getItem('cartItems'));
}
  
// Write click functions for buttons - remove from cart and checkout

const removeFromCart = async (index) => {

  let cartItems = []

  cartItems = JSON.parse(localStorage.getItem('cartItems'));
  cartItems.splice(index, 1)
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  console.log(cartItems);

}

  return (
    
    <Card className={classes.root}>
    <Typography>My Collection</Typography>
    {cartItems.map((product, index) => 
    <div key={index}>
      <CardActionArea>
        <CardMedia
            className={classes.media}
            image={product.img_url}
            title={product.name}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.artist}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => removeFromCart(index) }
        >
          Remove From Cart
        </Button>
      </CardActions>
    </div>
    )}
    {/* <Link to="/checkout" >
      <Button size="small" color="primary">
        Continue to Checkout
      </Button>
    </Link> */}
    </Card>
    
  );
}

export default Cart;