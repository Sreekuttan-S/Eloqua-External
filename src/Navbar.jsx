import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/blogs">Contact</Link>
                </li>
                <li>
                    <Link to="/contact">FAQ</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;