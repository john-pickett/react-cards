import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarToggler, NavbarNav, Collapse, NavItem, NavLink, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'mdbreact';


class NavbarFC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }
    
    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    
    render() {
        return (
            <Navbar color="indigo" dark expand="md" scrolling>
                <NavbarBrand href="/">
                    <strong>Flash Cards</strong>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav className="ml-auto">
                    <NavItem>
                        <NavLink className="nav-link" href="/create-lesson" to="/create-lesson">Create Lesson</NavLink>
                        {/* <Link to="/create-lesson" /> */}
                        
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/profile">User Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle nav caret>Dropdown</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="#">Action</DropdownItem>
                            <DropdownItem href="#">Another Action</DropdownItem>
                            <DropdownItem href="#">Something else here</DropdownItem>
                            <DropdownItem href="#">Something else here</DropdownItem>
                        </DropdownMenu>
                        </Dropdown>
                    </NavItem>
                        <form className="form-inline">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                        </form>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
}


export default NavbarFC;