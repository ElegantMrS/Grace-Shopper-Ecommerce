import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Link } from '@material-ui/core';
import { registerUser } from '../api';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(10),
        width: '25ch',
      },
    },
  }));

const Register = ({
    email,
    setEmail,
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
            const data = await registerUser(username, password, email)
            const newUser = data.username;

            if (newUser) {

            } else {
                console.log(data)
            }

        } catch (error) {
            throw error;
        }
    }

    return (
        <Paper className={classes.root}>
        <form className={classes.form} onSubmit={confirmPassword}>
        <TextField 
            variant="outlined"
            required
            id="email"
            label="EMAIL"
            name="email"
            autoFocus
            value={email}
            onChange={(event => setEmail(event.target.value))}
        />
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
        <TextField
            variant="outlined"
            required
            type="password"
            label="CONFIRM PASSWORD"
            name="confirmation"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
        />
        <Button
        type="submit"
        >
            CREATE ACCOUNT
        </Button>
        </form>
        </Paper>
    );

//

}

export default Register;