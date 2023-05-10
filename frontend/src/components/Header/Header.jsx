import React from "react";
import {Link, useNavigate} from "react-router-dom";

const Header = ({ stage }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    return <>
        <div className="about_me_main">
            <a href="/home"><h3>Your Hardware</h3></a>
            <p id="about_me_main"></p>
        </div>

        <div className="menu-wrap">
            <input type="checkbox" className="toggler"/>
            <div className="hamburger">
                <div></div>
            </div>
            <div className="menu">
                <div>
                    <div>
                        <ul>
                            <li><Link to="/home">Ma Page</Link></li>
                            <li><Link to="/posts">Posts</Link></li>
                            <li><Link to="/add">Add Post</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            {(stage === 'LOGIN' && stage !== 'LOGGED_IN') && (
                                <li><Link to="/register">Register</Link></li>
                            )}
                            {(stage === 'REGISTER' && stage !== 'LOGGED_IN') && (
                            <li><Link to="/login">Login</Link></li>
                            )}
                            {stage === 'LOGGED_IN' && (<>
                                <li><Link to="/myposts">My Posts</Link></li>
                                <li><button onClick={handleLogout}>Logout</button></li>
                            </>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Header;