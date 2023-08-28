import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>
    )
}

export default Nav

