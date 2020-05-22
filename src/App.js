import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Card from "./components/Card";
import Default from "./components/Default";
import Modal from "./components/Modal";

function App() {
    return (
        <React.Fragment>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={ProductList}/>
                <Route path="/details" component={Details}/>
                <Route path="/card" component={Card}/>
                <Route component={Default}/>
            </Switch>
            <Modal />
        </React.Fragment>
    );
}

export default App;
