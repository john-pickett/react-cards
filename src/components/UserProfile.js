import React, { Component } from 'react';
import '../App.css';
import Navbar from './Navbar';

class UserProfile extends Component {

    render () {
        return (
            <div>
                <Navbar />
                <h2>User Profile</h2>
            </div>
        )
    }
}

export default UserProfile;