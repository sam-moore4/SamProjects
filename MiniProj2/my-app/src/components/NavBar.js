import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <div className="NavBar">
            <ul className="menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/collection">Collection</NavLink></li>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/login">LogIn</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar