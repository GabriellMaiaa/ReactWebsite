import React, { useEffect, useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Nav, NavbarContainer, NavIcon, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavBtnLink, NavItemBtn } from './Navbar.element'
import { Button } from '../../globalStyles'
import { IconContext } from 'react-icons'

const Navbar = () => {// Componente criado para ficar padrão 
const [click, setClick]= useState(false);
const [button, setButton] = useState(true)

const handleClick = () => {
  setClick(!click)
}
const showButton = () => {
  if(window.innerWidth <= 960) {
    setButton(false)
  }else {
    setButton(true)
  }
}

useEffect(() => {
  showButton()
}, []) //1h e 02min

window.addEventListener('resize', showButton)

  return (
    <>
      <IconContext.Provider value={{  color:'fff' }}>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>{/*Vai pegar um LINK do React Router */}
                  <NavIcon color='#fff'/>{/*Vai ter um ícone da lib react-icons, e é importada no arq de styled-components */}
                    ULTRA
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                  {click ? <FaTimes/> : <FaBars/>}{/*click é o State que vai ser criado */}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                  <NavItem>
                    <NavLink to='/'>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to='/servicos'>Serviços</NavLink>{/*As rotas forma criadas dentro do componente Navbar */}
                  </NavItem>
                  <NavItem>
                    <NavLink to='/quemSomos'>Produtos</NavLink>{/*E passada só o componente Navbar dentro de APP/ROUTES */}
                  </NavItem>
                    <NavItemBtn>
                      {button ? (
                        <NavBtnLink to='/sign-up'>{/*O botão contém a rota da próx pagina ao clicar */}
                          <Button primary>Entrar</Button>
                        </NavBtnLink>
                      ) : (
                        <NavBtnLink to='/sign-up'>
                          <Button   primary>
                            ENTRAR
                          </Button>
                        </NavBtnLink>
                      )}
                    </NavItemBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar
