import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Nav, NavbarContainer, NavIcon, NavLogo, MobileIcon, NavMenu, NavItem, NavLink } from './Navbar.element'
import { IconContext } from 'react-icons'

const Navbar = () => {
const [click, setClick]= useState(false);

const handleClick = () => {
  setClick(!click)
}
  return (
    <>
      <IconContext.Provider value={{  color:'fff' }}>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>{/*Vai pegar um LINK do React Router */}
                  <NavIcon color='#fff'/>{/*Vai ter um ícone da lib react-icons, e é importada no arq de styled-components */}
                    ULTRA PHOTOS
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                  {click ? <FaTimes/> : <FaBars/>}{/*click é o State que vai ser criado */}
                </MobileIcon>
                <NavMenu onClick={handleClick}>
                  <NavItem>
                    <NavLink to='/'>
                      Home
                    </NavLink>
                  </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar
