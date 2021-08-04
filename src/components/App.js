import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  getSomething
} from '../api';

const App = () => {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   getSomething()
  //     .then(response => {
  //       setMessage(response.message);
  //     })
  //     .catch(error => {
  //       setMessage(error.message);
  //     });
  // });

  return (
    <div className="App">
    <Router>
      <Route exact path="/products">
        <h1>Hello, World!</h1>
        {/* <h2>{ message }</h2> */}
      </Route>
    </Router>
    </div>
  );
}

export default App;