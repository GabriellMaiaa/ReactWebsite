import React from 'react'
import { Nav, NavbarContainer } from './Navbar.element'


const Navbar = () => {
  return (
    <div>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavIcon/>
                    ULTRA
                </NavLogo>
            </NavbarContainer>
        </Nav>
    </div>
  )
}

export default Navbar
