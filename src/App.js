import React from "react";
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetail from "./containers/ProductDetail";
// FIrebase files
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
// import GoogleButton from 'react-google-button';


function App() {
  return (
    <div className="App">
    {/*<UserProvider value ={{user, setUser ,unsetUser}}>*/}
      <Router>
        <Header />
                  <UserAuthContextProvider>
        <Routes>
     
          <Route path="/home" element={
              <ProtectedRoute>
              <Home />
              </ProtectedRoute>
            }
            />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
         {/*For Product Pages   */}
          <Route path="/products" exact element={<ProductListing/>} />
          <Route path="/product/:productId" element={<ProductDetail/>} />
          <Route>404 Not Found!</Route>
     
        </Routes>
                  </UserAuthContextProvider>
      </Router>
      {/*</UserProvider>*/}
    </div>
  );
}

export default App;



///import React from 'react';

///const Header = () => {

///}

///export default Header;