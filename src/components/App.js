import React, { useState } from 'react';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import './App.css';

import {
  HomePage,
  Header,
  Sidebar,
  RightSidebar,
  ContemporaryPage,
  ImpressionismPage,
  CubismPage,
  PopartPage,
  PostImpressionismPage,
  Register,
  Login,
  Cart,
  Checkout
} from './'


const theme = createTheme({
  typography: {
    fontFamily: 'Barlow',
  },
  palette: {
    primary: {
      light: '#c7c7c7',
      main: '#fafafa',
      dark: '#969696',
      contrastText: '#323232',
    },
    secondary: {
      light: '#DF7332',
      main: '#155DE9',
      dark: '#1E7827',
      contrastText: '#323232',
    },
    overrides: {
        MuiCssBaseline: {
          "@global": {
            body: {
              background: '#323232'
            }
          }
        },
      }
  },
});

const App = () => {
  
  const history = useHistory();
  const [merchandise, setMerchandise] = useState([]);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userToken, setUserToken] = useState('');
  const [loggedIn, setLoggedIn] = useState();
  const [category, setCategory] = useState('');


  return (
    <ThemeProvider theme={theme}>
    <div className="App" id="container">
    <Router>
      <Header />
      <Sidebar />
      <div className="content-wrap">
      <Route exact path="/">
        <HomePage
          merchandise={merchandise}
          setMerchandise={setMerchandise}
          category={category}
          setCategory={setCategory}
        />
      </Route>
      <Route exact path="/products/contemporary">
        <ContemporaryPage
          merchandise={merchandise}
          setMerchandise={setMerchandise}
          category={category}
          setCategory={setCategory}
        />
      </Route>
      <Route exact path="/products/cubism">
        <CubismPage

          merchandise={merchandise}
          setMerchandise={setMerchandise}
          category={category}
          setCategory={setCategory}
        />
      </Route>
      <Route exact path="/products/impressionism">
        <ImpressionismPage
          merchandise={merchandise}
          setMerchandise={setMerchandise}
          category={category}
          setCategory={setCategory}
        />
      </Route>
      <Route exact path="/products/popart">
        <PopartPage
          merchandise={merchandise}
          setMerchandise={setMerchandise}
          category={category}
          setCategory={setCategory}
        />
      </Route>
      <Route exact path="/products/post-impressionism">
        <PostImpressionismPage
          merchandise={merchandise}
          setMerchandise={setMerchandise}
          category={category}
          setCategory={setCategory}
        />
      </Route>
      <Route exact path="/register">
        <Register
          email={email}
          setEmail={setEmail}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          userToken={userToken}
          setUserToken={setUserToken}
        />
      </Route>
      <Route exact path="/login">
        <Login 
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          userToken={userToken}
          setUserToken={setUserToken}
          // history?
        />
      </Route>

      <Route exact path="/cart">
        <Cart />
      </Route>

      <Route exact path="/checkout">
        <Checkout />
      </Route>

      </div> 

      <RightSidebar category={category}/>
      
    </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;