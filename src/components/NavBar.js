import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png'

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-navbar-my navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand border-radius"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className="nav-link text-white">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <button className="btn btn-danger">
                        <span className="mr-2">
                            <i className="fa fa-shopping-cart">Card</i>
                        </span>
                    </button>
                </Link>
            </nav>
        );
    }
}

export default NavBar;
