import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';

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
  Login,
  Cart,
  Checkout
} from './'

const App = () => {



  
   class Sidebar extends React.Component {
      constructor(props) {
          super(props);
          this.type = 'Push';
          this.leftToggle = this.leftToggle.bind(this);
          this.rightToggle = this.rightToggle.bind(this);
          this.onCreate = this.onCreate.bind(this);
      }
      onCreate() {
          this.leftSidebarObj.element.style.visibility = '';
          this.rightSidebarObj.element.style.visibility = '';
      }
      // Toggle(Open/Close) the Sidebar1
      leftToggle() {
          this.leftSidebarObj.toggle();
      }
      // Toggle(Open/Close) the Sidebar2
      rightToggle() {
          this.rightSidebarObj.toggle();
      }
      render() {

          return (<div className="control-section">
                  <div id="wrapper">
                      
                      <SidebarComponent id="default" ref={Sidebar => this.leftSidebarObj = Sidebar} width="200px" type={this.type} created={this.onCreate} style={{ visibility: "hidden" }}>
                          <div className="title"> Left Sidebar content</div>
                      </SidebarComponent>
                      
                      <SidebarComponent id="default1" ref={Sidebar => this.rightSidebarObj = Sidebar} width="200px" type={this.type} position="Right" created={this.onCreate} style={{ visibility: "hidden" }}>
                          <div className="title"> Right Sidebar content</div>
                      </SidebarComponent>
                    
                 </div>
              </div>);
      }
  }
  

  const [merchandise, setMerchandise] = useState([]);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userToken, setUserToken] = useState('');
  const [loggedIn, setLoggedIn] = useState();


  return (
    
    <div className="App">
    <Router>
    <Sidebar />
      <Header />
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
      
    </Router>
    </div>
  );
}

export default App;