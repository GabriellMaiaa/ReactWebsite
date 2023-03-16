import styled from 'styled-components'
import { Container } from '../../globalStyles'
import { Link } from 'react-router-dom'
import { FaMagento } from 'react-icons/fa'

export const Nav = styled.nav `
    background-color: #101522;
    height: 80px;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 1.2rem;
    top: 0;
    z-index: 999;
    position: sticky;
    &:hover {
        
    }
`
export const NavbarContainer = styled(Container) `
    display: flex;
    justify-content: space-between;
    height: 80px 0;

    ${Container}
`

export const NavLogo = styled(Link) `//Esse Link é do React Router Dom 
    color:#fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display:flex;
    align-items: center;
`
export const NavIcon = styled(FaMagento) `
    margin-right: 0.5rem;
`