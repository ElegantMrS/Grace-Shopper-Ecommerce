import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Link } from '@material-ui/core';
import { login } from '../api';
import { Redirect } from 'react-router';

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(10),
        width: '25ch',
      },
    input: {
        padding: '10px'
    }
    },
  }));

const Login = ({
    
    username,
    setUsername,
    password,
    setPassword,
    userToken,
    setUserToken,
    setLoggedIn,
    // history
}) => {

    const history = useHistory();
    const classes = useStyles();

    // const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const [redirect, setRedirect] = useState();

    // const confirmPassword = (event) => {
    //     event.preventDefault();
    //     if (password !== passwordConfirmation) {
    //         alert('Passwords do not match')
    //     } else {
    //         fetchApi(event)
    //     }
    // };

    const fetchApi = async (event) => {

        event.preventDefault();

        try {
            const data = await login(username, password)
            const token = data.token;

            if (userToken) {
                localStorage.setItem('userToken', token)
                setUserToken(token)
                setUsername(username)
                setLoggedIn(true)
                localStorage.setItem('Username', username)
                alert("You are now signed in").then(() => {
                    setRedirect(true);
                })
                
                // setRedirect(true)
                history.push("/");

            } else {
                console.log(data)
            }

            

        } catch (error) {
            throw error;
        }
    }

        return redirect ? (<Redirect push to="/api/"/>) : (
            <Paper className={classes.root}>
            <form className={classes.form} onSubmit={fetchApi}>
            <div className="input-field">
            <TextField
                variant="outlined"
                required
                id="username"
                label="USERNAME"
                name="username"
                autoFocus
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            </div>
            <div className="input-field">
            <TextField className="input-field"
                variant="outlined"
                required
                type="password"
                id="password"
                label="PASSWORD"
                name="password"
                autoFocus
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            </div>
            <Button type="submit">
                LOGIN
            </Button>
            </form>
            </Paper>
        );
    

//

}

export default Login;