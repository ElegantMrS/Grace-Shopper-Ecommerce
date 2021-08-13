import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import {
//   getSomething
// } from '../api';

import {
  HomePage,
  Header,
  ContemporaryPage,
  ImpressionismPage,
  CubismPage,
  PopartPage,
  PostImpressionismPage,
  Register,
  // Login
} from './'

const App = () => {
  

  const [merchandise, setMerchandise] = useState([]);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userToken, setUserToken] = useState('');


  return (
    <div className="App">
    <Router>
      <Header />
      <Route exact path="/">
        <h1>Hello, World!</h1>
        {/* <h2>{ message }</h2> */}
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
      {/* <Route exact path="/login">
        <Login 
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          userToken={userToken}
          setUserToken={setUserToken}
          // history?
        />
      </Route> */}
    </Router>
    </div>
  );
}

export default App;