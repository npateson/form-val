import React from 'react';
import {Nav, NavLink, NavIcon, Bars} from './NavBarElements'

const NavBar = () => {
    return ( 
        <>
            <Nav>
                <NavLink to='/'>Prime Pub</NavLink>
                
                <NavIcon>
                   <p>Menu</p>
                   <Bars />
                </NavIcon>
            </Nav>
        </>
     );
}
 
export default NavBar;