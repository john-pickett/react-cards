import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

class Navbar extends Component {

    render () {
        return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark indigo">
                        {/* <a className="navbar-brand" href="#">Flash Cards</a> */}
                        <Link to='/'>Home</Link>
                        <Link to='/create-lesson'>Create Lesson</Link>
                        <Link to='/profile'>Your Profile</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                 <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li> 
                                <li className="nav-item">
                                    <Link to='/create-lesson'>Create Lesson</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/profile'>Your Profile</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                            </form>
                        </div> */}
                    </nav>
            </div>
        )
    }
}

export default Navbar;