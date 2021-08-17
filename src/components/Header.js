import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import { Link, useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({ loggedIn, setLoggedIn }) {

  const classes = useStyles();
  // const history = useHistory();


  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            JJRt COLLECTIONS
          </Typography>

          {loggedIn ? null :
          <Link to="/login">
            <Button color="inherit">LOGIN</Button>
          </Link>
          }
          <Link to="/register">
            <Button color="inherit">CREATE ACCOUNT</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}