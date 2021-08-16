import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Link } from '@material-ui/core';
import { login } from '../api';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(10),
        width: '25ch',
      },
    },
  }));

const Login = ({
    
    username,
    setUsername,
    password,
    setPassword,
    userToken,
    setUserToken,
    history
}) => {

    const classes = useStyles();

    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const confirmPassword = (event) => {
        event.preventDefault();
        if (password !== passwordConfirmation) {
            alert('Passwords do not match')
        } else {
            fetchApi(event)
        }
    };

    const fetchApi = async (event) => {

        event.preventDefault();

        try {
            const data = await login(username, password)
            const token = data.token;

            if (userToken) {
                localStorage.setItem('userToken', token)
                setUserToken(token)
                setUsername(username)
                localStorage.setItem('Username', username)
            } else {
                console.log(data)
            }

            // history.push("/");

        } catch (error) {
            throw error;
        }
    }

    return (
        <Paper className={classes.root}>
        <form className={classes.form} onSubmit={fetchApi}>
        
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
        <TextField 
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
        
        <Button
        type="submit"
        >
            LOGIN
        </Button>
        </form>
        </Paper>
    );

//

}

export default Login;