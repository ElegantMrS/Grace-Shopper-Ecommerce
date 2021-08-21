import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import {
//   getSomething
// } from '../api';

import './App.css';

import {
  HomePage,
  Header,
  Sidebar,
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

const App = () => {
  

  const [merchandise, setMerchandise] = useState([]);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userToken, setUserToken] = useState('');
  const [loggedIn, setLoggedIn] = useState();

  const items = [
    { name: 'home', label: 'Home' },
    { name: 'sales', label: 'Sales' },
    { name: 'orders', label: 'Orders' },
    { name: 'billing', label: 'Billing' },
    { name: 'settings', label: 'Settings' }]


  return (
    <div className="App" id="container">
    <Router>
      <Header />
      
      <Sidebar items={items}/>
      

      <div className="content-wrap">
      <Route exact path="/">
        <HomePage
          merchandise={merchandise}
          setMerchandise={setMerchandise}
        />
      </Route>
      <Route exact path="/products/contemporary">
        <ContemporaryPage
          merchandise={merchandise}
          setMerchandise={setMerchandise}
        />
      </Route>
      <Route exact path="/products/cubism">
        <CubismPage
          merchandise={merchandise}
          setMerchandise={setMerchandise}
        />
      </Route>
      <Route exact path="/products/impressionism">
        <ImpressionismPage
          merchandise={merchandise}
          setMerchandise={setMerchandise}
        />
      </Route>
      <Route exact path="/products/popart">
        <PopartPage
          merchandise={merchandise}
          setMerchandise={setMerchandise}
        />
      </Route>
      <Route exact path="/products/post-impressionism">
        <PostImpressionismPage
          merchandise={merchandise}
          setMerchandise={setMerchandise}
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

    </Router>
    </div>
  );
}

export default App;