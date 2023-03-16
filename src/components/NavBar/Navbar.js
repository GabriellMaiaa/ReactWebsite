import React from 'react'
import { Nav, NavbarContainer, NavIcon, NavLogo } from './Navbar.element'


const Navbar = () => {
  return (
    <div>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>{/*Vai pegar um LINK do React Router */}
                  <NavIcon color='#fff'/>{/*Vai ter um ícone da lib react-icons, e é importada no arq de styled-components */}
                    ULTRA
                </NavLogo>
            </NavbarContainer>
        </Nav>
    </div>
  )
}

export default Navbar
