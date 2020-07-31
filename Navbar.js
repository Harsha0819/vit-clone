import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar_header">
                <h1>
                    Vit-Scope
                </h1>
            </div>
            <div className="navbar_option">
            <Link to="/">
                <p className="navbarOption_items" style={{ textDecoration: 'none' }}>Home</p>
                </Link>
                <Link to="/course">
                <p className="navbarOption_items" style={{ textDecoration: 'none' }}>Courses</p>
                </Link>
                <Link to ="/depatment">
                <p className="navbarOption_items" style={{ textDecoration: 'none' }}>Department</p>
                </Link>

                <Link to ="/Faculty" style={{ textDecoration: 'none' }}>
                <p className="navbarOption_items">Faculty</p>
                </Link>
                <Link to="/Placement" style={{ textDecoration: 'none' }}>
                <p className="navbarOption_items" style={{ textDecoration: 'none' }}>Placements</p>
                </Link>
                <Link to="/Coe" style={{ textDecoration: 'none' }}>
                <p className="navbarOption_items">COE</p> 
                </Link>
            
            </div>

            
            
        </div>
    )
}

export default Navbar
