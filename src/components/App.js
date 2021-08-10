import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import {
//   getSomething
// } from '../api';

import {
  HomePage,
  ContemporaryPage
} from './'

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

  const [merchandise, setMerchandise] = useState([]);

  return (
    <div className="App">
    <Router>
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
    </Router>
    </div>
  );
}

export default App;