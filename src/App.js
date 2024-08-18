/* import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/register/RegisterForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Home from "./components/home/Home";
import AddUSer from "./params/AddUser";

import DetailsMovie from "./Companies/DetailsMovie";
import Favorites from './pages/Favorites';
import MovieComponent from "./Companies/MovieComponent";

function App() {
  return (
    <>

      <BrowserRouter>
        <NavBar />
        <AddUSer/>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/register" component={RegisterForm} exact />
            <Route path="/login" component={LoginForm} exact />
            <Route path="/ListCompanies" component={MovieComponent} exact  />
            <Route path="/view/:id" component={DetailsMovie} exact  />
            <Route path="/favorites" component={Favorites} exact  />
            <Route path="*" component={NotFound} />
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App; */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext'; // Import LanguageProvider
import LanguageToggle from './components/LanguageToggle'; // Import LanguageToggle

import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/register/RegisterForm';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import Home from './components/home/Home';
import AddUSer from './params/AddUser';
import DetailsMovie from './Companies/DetailsMovie';
import Favorites from './pages/Favorites';
import MovieComponent from './Companies/MovieComponent';

function App() {
  return (
    
      <BrowserRouter>
        <NavBar />
         {/* Add the LanguageToggle component */}
        <AddUSer />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={RegisterForm} exact />
          <Route path="/login" component={LoginForm} exact />
          <Route path="/favorites" component={Favorites} exact />
          <Route path="/view/:id" component={DetailsMovie} exact />
          <LanguageProvider>
          <LanguageToggle />
          <Route path="/ListCompanies" component={MovieComponent} exact />
          </LanguageProvider>
          
          
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
