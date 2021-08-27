import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { Link, useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    letterSpacing: '0.5rem',
  },
}));

export default function ButtonAppBar({ loggedIn, setLoggedIn }) {

  const classes = useStyles();
  // const history = useHistory();


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" className={classes.title} style={{padding: '10px'}}>
            JJRt
          </Typography>

          <Link to="/login" style={{textDecoration:'none'}}>
            <Button color="inherit" style={{letterSpacing:'.2rem'}}>LOGIN</Button>
          </Link>
          
          <Link to="/register" style={{textDecoration:'none'}}>
            <Button color="inherit" style={{letterSpacing:'.2rem'}}>CREATE ACCOUNT</Button>
          </Link>
          <Link to="/cart" style={{paddingRight: '15%'}}>
            <Button>
              <ShoppingCartIcon />
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}