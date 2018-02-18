import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

class Navbar extends Component {

    render () {
        return (
                <div>
                    <nav class="navbar navbar-expand-lg navbar-dark indigo">
                        {/* <a class="navbar-brand" href="#">Flash Cards</a> */}
                        <Link to='/'>Home</Link>
                        <Link to='/create-lesson'>Create Lesson</Link>
                        <Link to='/profile'>Your Profile</Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                 <li class="nav-item active">
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li> 
                                <li class="nav-item">
                                    <Link to='/create-lesson'>Create Lesson</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/profile'>Your Profile</Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                            </form>
                        </div> */}
                    </nav>
            </div>
        )
    }
}

export default Navbar;